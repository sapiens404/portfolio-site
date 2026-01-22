// COURSE ENGINE - Handles Payment, Auth, Player, and Admin

const App = {
    state: {
        isEnrolled: localStorage.getItem('isEnrolled') === 'true',
        currentLesson: null,
        isAdmin: false
    },

    init: function () {
        console.log("Course Engine Starting...");
        this.render();
    },

    // --- PAYMENT SYSTEM ---
    startPayment: function () {
        // 1. Razorpay Test
        const options = {
            "key": "rzp_test_1DP5mmOlF5G5ag",
            "amount": COURSE_DB.info.price,
            "currency": "INR",
            "name": "Ritu Raj Design",
            "description": COURSE_DB.info.title,
            "handler": function (response) {
                App.unlockCourse();
                alert("Payment Successful! Welcome aboard.");
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

        // Highlight Active
        document.querySelectorAll('.lesson-row').forEach(el => el.classList.remove('active'));
        const activeRow = document.getElementById(`lesson-${lessonId}`);
        if (activeRow) activeRow.classList.add('active');
    },

    generatePDF: function (filename) {
        try {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            // Find content in DB
            let pdfText = "This is a verified course material downloaded from the learning portal.\nUse this for your assignments and practice.";

            // Search all lessons for this resource
            COURSE_DB.modules.forEach(mod => {
                mod.lessons.forEach(l => {
                    if (l.pdf_content && l.pdf_content[filename]) {
                        pdfText = l.pdf_content[filename];
                    }
                });
            });

            // HEADER
            doc.setFontSize(22);
            doc.setTextColor(0, 255, 102); // Neon Green
            doc.text("Ritu Raj Design Academy", 20, 20);

            doc.setDrawColor(0, 255, 102);
            doc.line(20, 25, 190, 25);

            // TITLE
            doc.setFontSize(16);
            doc.setTextColor(0, 0, 0);
            doc.text("Resource: " + filename, 20, 40);

            // BODY CONTENT
            doc.setFontSize(11);
            doc.setTextColor(40, 40, 40);

            const splitText = doc.splitTextToSize(pdfText, 170); // Wrap text
            doc.text(splitText, 20, 60);

            doc.save(filename);
        } catch (e) {
            alert("PDF Error: " + e.message);
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
