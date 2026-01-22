// COURSE ENGINE - Handles Payment, Auth, Player, and Admin

const App = {
    state: {
        isEnrolled: localStorage.getItem('isEnrolled') === 'true',
        currentLesson: null,
        isAdmin: false,
        theme: localStorage.getItem('course_theme') || 'dark'
    },

    init: function () {
        console.log("Course Engine Starting...");
        this.initStars();
        this.applyTheme();
        this.render();
    },

    // --- COSMIC STARFIELD ---
    initStars: function () {
        const canvas = document.getElementById('star-canvas');
        if (!canvas) return;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        const starGeometry = new THREE.BufferGeometry();
        const starCount = 8000;
        const posArray = new Float32Array(starCount * 3);
        for (let i = 0; i < starCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 2000;
        }
        starGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 1.2, transparent: true, opacity: 0.6 });
        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);
        camera.position.z = 5;
        this.starMaterial = starMaterial;

        const animate = () => {
            requestAnimationFrame(animate);
            stars.rotation.y += 0.0005;
            stars.rotation.x += 0.0002;
            renderer.render(scene, camera);
        };
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    },

    // --- THEME TOGGLE ---
    toggleTheme: function () {
        this.state.theme = this.state.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('course_theme', this.state.theme);
        this.applyTheme();
    },

    applyTheme: function () {
        document.documentElement.setAttribute('data-theme', this.state.theme);
        const btn = document.getElementById('theme-toggle');
        if (btn) btn.innerHTML = this.state.theme === 'dark' ? '🌙 Dark' : '☀️ Light';
        if (this.starMaterial) {
            this.starMaterial.color.setHex(this.state.theme === 'dark' ? 0xffffff : 0x0066ff);
        }
    },

    resetEnrollment: function () {
        localStorage.removeItem('isEnrolled');
        localStorage.removeItem('watched_lessons');
        window.location.reload();
    },

    // --- PAYMENT SYSTEM ---
    startPayment: function () {
        // 1. Razorpay Test
        const options = {
            "key": "rzp_test_1DP5mmOlF5G5ag", // REPLACE WITH LIVE KEY
            "amount": COURSE_DB.info.price,
            "currency": "INR",
            "name": "Design The Imagination",
            "description": COURSE_DB.info.title,
            "handler": function (response) {
                App.unlockCourse();
                alert("Payment Successful! Welcome to the Design Evolution.");
            },
            "theme": { "color": "#00ff66" }
        };

        try {
            const rzp = new Razorpay(options);
            rzp.open();
        } catch (e) {
            alert("Razorpay Error: " + e.message + ". Trying Manual Mode...");
            this.showManualQR();
        }
    },

    showManualQR: function () {
        document.getElementById('payment-modal').style.display = 'flex';
    },

    verifyManual: function () {
        const btn = document.getElementById('verify-btn');
        btn.innerText = "Verifying...";
        setTimeout(() => {
            this.unlockCourse();
            document.getElementById('payment-modal').style.display = 'none';
        }, 1500);
    },

    unlockCourse: function () {
        localStorage.setItem('isEnrolled', 'true');
        this.state.isEnrolled = true;
        this.render();
    },

    // --- PLAYER SYSTEM ---
    loadLesson: function (lessonId) {
        // Find lesson data
        let foundLesson = null;
        COURSE_DB.modules.forEach(mod => {
            const l = mod.lessons.find(x => x.id === lessonId);
            if (l) foundLesson = l;
        });

        if (!foundLesson) return;

        // Render Video
        const screen = document.getElementById('video-screen');
        if (foundLesson.src.includes('youtube')) {
            screen.innerHTML = `<iframe src="${foundLesson.src}" frameborder="0" allowfullscreen style="width:100%; height:100%;"></iframe>`;
        } else {
            // Local fallback
            screen.innerHTML = `<video controls src="${foundLesson.src}" style="width:100%; height:100%;"></video>`;
        }

        // Render Resources
        const resList = document.getElementById('resource-list');
        resList.innerHTML = '';
        if (foundLesson.resources.length > 0) {
            foundLesson.resources.forEach(res => {
                const btn = document.createElement('button');
                btn.className = 'res-btn';
                btn.innerHTML = `<i class="fas fa-download"></i> ${res}`;
                btn.onclick = () => this.generatePDF(res);
                resList.appendChild(btn);
            });
        } else {
            resList.innerHTML = '<span style="color:#666">No resources for this lesson.</span>';
        }

        // Render Related Videos
        const relatedDiv = document.getElementById('related-videos');
        if (relatedDiv) {
            relatedDiv.innerHTML = '';
            if (foundLesson.related_videos && foundLesson.related_videos.length > 0) {
                foundLesson.related_videos.forEach(vid => {
                    const link = document.createElement('a');
                    link.href = vid.url;
                    link.target = "_blank";
                    link.style.display = "block";
                    link.style.color = "var(--neon)";
                    link.style.fontSize = "0.85rem";
                    link.style.marginBottom = "8px";
                    link.style.textDecoration = "none";
                    link.innerHTML = `<i class="fab fa-youtube"></i> ${vid.title}`;
                    relatedDiv.appendChild(link);
                });
            } else {
                relatedDiv.innerHTML = '<span style="color:#666">No extra videos.</span>';
            }
        }

        this.state.currentLesson = lessonId;
        this.updateProgress();

        // Highlight Active
        document.querySelectorAll('.lesson-row').forEach(el => el.classList.remove('active'));
        const activeRow = document.getElementById(`lesson-${lessonId}`);
        if (activeRow) activeRow.classList.add('active');
    },

    nextLesson: function () {
        const allLessons = [];
        COURSE_DB.modules.forEach(m => m.lessons.forEach(l => allLessons.push(l.id)));
        const currentIndex = allLessons.indexOf(this.state.currentLesson);
        if (currentIndex < allLessons.length - 1) {
            this.loadLesson(allLessons[currentIndex + 1]);
        } else {
            alert("Congratulations! You've reached the end of the course.");
        }
    },

    updateProgress: function () {
        // Track watched lessons in localStorage
        let watched = JSON.parse(localStorage.getItem('watched_lessons') || '[]');
        if (!watched.includes(this.state.currentLesson)) {
            watched.push(this.state.currentLesson);
            localStorage.setItem('watched_lessons', JSON.stringify(watched));
        }

        const total = COURSE_DB.modules.reduce((acc, m) => acc + m.lessons.length, 0);
        const percent = Math.round((watched.length / total) * 100);
        const bar = document.getElementById('progress-bar-inner');
        const text = document.getElementById('progress-text');
        if (bar) bar.style.width = percent + "%";
        if (text) text.innerText = `Progress: ${percent}%`;
    },

    generatePDF: function (filename) {
        try {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            const pageHeight = doc.internal.pageSize.height;
            const pageWidth = doc.internal.pageSize.width;
            let y = 20; // Start Y position

            // Find content in DB
            let pdfText = "Content loading error. Please contact admin.";
            COURSE_DB.modules.forEach(mod => {
                mod.lessons.forEach(l => {
                    if (l.pdf_content && l.pdf_content[filename]) {
                        pdfText = l.pdf_content[filename];
                    }
                });
            });

            // --- HELPER: Add Heading ---
            const addHeader = () => {
                doc.setFontSize(18);
                doc.setTextColor(0, 255, 102); // Neon Green
                doc.text("Ritu Raj Design Mastery", 20, 20);
                doc.setDrawColor(0, 255, 102);
                doc.line(20, 25, pageWidth - 20, 25);
                y = 40;
            };

            // First Page Header
            addHeader();

            // Resource Title
            doc.setFontSize(14);
            doc.setTextColor(0, 0, 0);
            doc.setFont("helvetica", "bold");
            doc.text("RESOURCE: " + filename, 20, y);
            y += 15;

            // Content Body
            doc.setFontSize(11);
            doc.setFont("helvetica", "normal");
            doc.setTextColor(40, 40, 40);

            const splitText = doc.splitTextToSize(pdfText, pageWidth - 40);

            // Loop through lines to handle pagination
            splitText.forEach(line => {
                if (y > pageHeight - 30) {
                    doc.addPage();
                    addHeader(); // Re-add header on new page
                }

                // --- Color Logic ---
                if (line.includes("[GREEN]")) {
                    doc.setTextColor(0, 150, 0);
                    line = line.replace("[GREEN]", "✓ ");
                } else if (line.includes("[RED]")) {
                    doc.setTextColor(200, 0, 0);
                    line = line.replace("[RED]", "⚠ ");
                } else if (line.includes("[BLUE]")) {
                    doc.setTextColor(0, 102, 204);
                    line = line.replace("[BLUE]", "ℹ ");
                } else if (line.includes("[H]")) {
                    doc.setFont("helvetica", "bold");
                    doc.setTextColor(0, 0, 0);
                    line = line.replace("[H]", "");
                } else {
                    doc.setTextColor(40, 40, 40);
                    doc.setFont("helvetica", "normal");
                }

                doc.text(line, 20, y);
                y += 7; // Line spacing
            });

            // Footer (Copyright)
            const totalPages = doc.internal.getNumberOfPages();
            for (let i = 1; i <= totalPages; i++) {
                doc.setPage(i);
                doc.setFontSize(9);
                doc.setTextColor(150);
                doc.text("© 2024 Ritu Raj Designs - Premier Education Material", 20, pageHeight - 10);
                doc.text(`Page ${i} of ${totalPages}`, pageWidth - 40, pageHeight - 10);
            }

            doc.save(filename);
        } catch (e) {
            alert("PDF Generation Failed: " + e.message);
            console.error(e);
        }
    },

    // --- RENDER SYSTEM ---
    render: function () {
        const landing = document.getElementById('landing-view');
        const player = document.getElementById('player-view');

        if (this.state.isEnrolled) {
            landing.style.display = 'none';
            player.style.display = 'grid';
            // Auto load first lesson if nothing loaded
            if (!this.state.currentLesson) this.loadLesson(101);
        } else {
            landing.style.display = 'block';
            player.style.display = 'none';
        }
    }
};

// Admin Backdoor
window.adminLogin = function () {
    const pass = prompt("Enter Admin Password:");
    if (pass === "admin123") {
        alert("Admin Mode Active: You can now access internal memory.");
        App.unlockCourse(); // Admin gets free access
    }
};
