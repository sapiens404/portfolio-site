const COURSE_DB = {
    info: {
        title: "Graphic & UI/UX Design Mastery",
        price: 1300, // in paise (₹13)
        description: "Master Photoshop, Illustrator, Figma, and Design Theory in 4 weeks.",
        upi_id: "9473074602@ybl"
    },
    modules: [
        {
            title: "Module 1: Design Theory & Branding",
            lessons: [
                {
                    id: 101,
                    title: "The Science of Color Psychology",
                    type: "video",
                    src: "https://www.youtube.com/embed/UwHopwh0L_k",
                    resources: ["Color_Theory_Full_Compendium.pdf"],
                    pdf_content: {
                        "Color_Theory_Full_Compendium.pdf": `
[H] MASTERING COLOR PSYCHOLOGY (A 20-PAGE STUDY GUIDE)
[H] ===================================================

[H] INTRODUCTION
Color is the silent language of the brain. It is the first thing a user processes when visiting a site or seeing a brand.

[H] STEP 1: UNDERSTANDING THE FOUNDATION
[BLUE] PRIMARY COLORS: The root of everything (Red, Yellow, Blue).
[BLUE] SECONDARY COLORS: Mixed from primary (Green, Orange, Purple).
[BLUE] TERTIARY COLORS: The subtle shades in between.

[H] STEP 2: THE HARMONY FORMULAS
[GREEN] COMPLEMENTARY: Use for high-energy brands (e.g., Sports, Sales).
[GREEN] ANALOGOUS: Use for calm, luxury brands (e.g., Spas, Nature).
[GREEN] TRIADIC: High contrast but balanced (e.g., Kids toys, Entertainment).

[H] STEP 3: EMOTIONAL MAPPING
- [RED] RED: Appetite, Speed, Urgency.
- [BLUE] BLUE: Trust, Intelligence, Calm.
- [GREEN] GREEN: Health, Freshness, Wealth.
- [H] BLACK: Premium, Secretive, Strong.

[H] STEP 4: THE TECHNICAL WORKFLOW
[BLUE] CMYK VS RGB:
- RGB is for screens (Light-based).
- CMYK is for printing (Ink-based).
[RED] CRITICAL: Never design a print poster in RGB; your colors will look "muddy" when printed.

[H] STEP 5: PRO TIPS FOR ACCESSIBILITY
[GREEN] Always ensure a contrast ratio of at least 4.5:1 for body text.
Use online tools to check for color-blindness compatibility.
                        `
                    }
                },
                {
                    id: 102,
                    title: "Typography & Layout Mastery",
                    type: "video",
                    src: "https://www.youtube.com/embed/UwHopwh0L_k",
                    resources: ["Typography_Mastery_Bible.pdf"],
                    pdf_content: {
                        "Typography_Mastery_Bible.pdf": `
[H] THE TYPOGRAPHY MASTERCLASS (STEP-BY-STEP BOOK)
[H] =============================================

[H] CHAPTER 1: THE ANATOMY OF TYPE
To master type, you must see the shapes. Baseline, X-height, Ascenders, Descenders, and Serifs.

[H] CHAPTER 2: CHOOSING THE RIGHT CATEGORY
- [BLUE] SERIF: Use for traditional, formal, or long-form reading (Print).
- [BLUE] SANS-SERIF: Use for digital, modern, and minimal design.
- [BLUE] SLAB SERIF: Masculine, thick, and authoritative.
- [BLUE] SCRIPT: For invitations and high-end elegance.

[H] CHAPTER 3: THE THREE PILLARS OF SPACING
[GREEN] KERNING: Individual character adjustment.
[GREEN] TRACKING: Group adjustment.
[GREEN] LEADING: Line height.
[RED] PRO TIP: Standard leading is usually 1.2 to 1.5 times the font size.

[H] CHAPTER 4: CREATING HIERARCHY
1. [BLUE] SCALE: Big titles, small body.
2. [BLUE] WEIGHT: Bold vs Thin.
3. [BLUE] CASE: ALL CAPS vs lowercase.

[H] CHAPTER 5: PAIRING SECRETS
[GREEN] The Golden Rule: Use fonts from the same family OR completely different families. Never pair two fonts that look "almost the same."
                        `
                    }
                }
            ]
        },
        {
            title: "Module 2: Photoshop Expert Training",
            lessons: [
                {
                    id: 201,
                    title: "The Photoshop Interface & Layer Logic",
                    type: "video",
                    src: "https://www.youtube.com/embed/aNpO6G72O3w",
                    resources: ["Photoshop_Complete_Guide.pdf"],
                    pdf_content: {
                        "Photoshop_Complete_Guide.pdf": `
[H] PHOTOSHOP 2024: THE COMPLETE MASTERCLASS BOOK
[H] =============================================

[H] CHAPTER 1: GETTING STARTED
Understanding Bit Depth, Resolution (72 vs 300 DPI), and the workspace.

[H] CHAPTER 2: THE POWER OF LAYERS
Layers are the soul of Photoshop. Master Layer Modes (Multiply, Screen, Overlay) to blend light and shadows perfectly.

[H] CHAPTER 3: SELECTION TOOLS STEP-BY-STEP
1. [BLUE] Rectangular Marquee: Box selections.
2. [BLUE] Lasso Tool: Organic selections.
3. [BLUE] Object Selection: New AI tool for quick work.
4. [BLUE] THE PEN TOOL: The only tool for pixel-perfect product selection.

[H] CHAPTER 4: MASKING SECRETS
[GREEN] Non-Destructive Editing: NEVER use the eraser tool. Always use mask buttons.
[BLUE] White = Visible. Black = Invisible. Gray = Transparent.

[H] CHAPTER 5: RETOUCHING LIKE A PRO
[BLUE] Liquify: For shaping and proportions.
[BLUE] Healing Brushes: For skin and texture cleanup.
[BLUE] Clone Stamp: For manual precision.

[H] CHAPTER 6: COLOR GRADING
Using Camera Raw Filter to push colors like a cinematic grader.
                        `
                    }
                },
                {
                    id: 202,
                    title: "Advanced Masking & Compositing",
                    type: "video",
                    src: "https://www.youtube.com/embed/aNpO6G72O3w",
                    resources: ["The_Masking_Book.pdf"],
                    pdf_content: {
                        "The_Masking_Book.pdf": `
[H] THE ADVANCED MASKING BIBLE (HIGH-LEVEL ONLY)
[H] ============================================

[H] CHAPTER 1: HAIR & FUR SELECTION
The hardest part of masking. Use "Select and Mask" + "Refine Edge Brush" to capture every single hair.

[H] CHAPTER 2: CHANNEL MASKING
For complex transparent objects like glass or water. Using the RGB channels to isolate specific luminosity data.

[H] CHAPTER 3: LUMINOSITY MASKS
Targeting only the highlights or shadows for ultra-realistic composite blending.

[H] CHAPTER 4: COMPOSITING SECRETS
[GREEN] Matching Light: Ensure the light source in Image A matches Image B.
[GREEN] Matching Color: Use a "Color Balance" or "Curves" layer to match high-low tones.
[GREEN] Matching Sharpness: Add a tiny bit of noise to a "clean" cut-out to make it look like it belongs in the photo.
                        `
                    }
                }
            ]
        },
        {
            title: "Module 3: Illustrator Mastery (Vector Logic)",
            lessons: [
                {
                    id: 203,
                    title: "Introduction to Vector Design",
                    type: "video",
                    src: "https://www.youtube.com/embed/UwHopwh0L_k",
                    resources: ["Illustrator_Step_By_Step.pdf"],
                    pdf_content: {
                        "Illustrator_Step_By_Step.pdf": `
[H] ADOBE ILLUSTRATOR: THE COMPLETE VECTOR BOOK
[H] ===========================================

[H] CHAPTER 1: WHAT IS A VECTOR?
Unlike Photoshop (Pixels), Illustrator uses Math (Points). Vectors are infinitely scalable. Never lose quality again.

[H] CHAPTER 2: THE TOOLSET
[BLUE] SELECTION TOOL (V): Moves objects.
[BLUE] DIRECT SELECTION (A): Moves individual points.
[BLUE] PEN TOOL (P): Creates the path.

[H] CHAPTER 3: THE SHAPE BUILDER TOOL
Move beyond simple circles and boxes. Use Shift+M to merge or subtract shapes from each other. This is how 90% of modern logos are built.

[H] CHAPTER 4: TYPOGRAPHY ON PATHS
Make your text follow curves, circles, and custom shapes. Perfect for badge designs and stickers.

[H] CHAPTER 5: THE GRADIENT MESH
Create hyper-realistic 3D shading on 2D vector shapes. This separates the pros from the amateurs.

[H] CHAPTER 6: EXPORTING ASSETS
How to save for Logo Hand-offs (EPS, PDF, SVG, AI).
                        `
                    }
                }
            ]
        },
        {
            title: "Module 4: Figma & UI/UX Strategy",
            lessons: [
                {
                    id: 301,
                    title: "Figma Fundamentals & Auto-Layout",
                    type: "video",
                    src: "https://www.youtube.com/embed/bI6q16ffdgQ",
                    resources: ["Figma_UX_Master_Book.pdf"],
                    pdf_content: {
                        "Figma_UX_Master_Book.pdf": `
[H] THE FIGMA UX DESIGN BIBLE (20-PAGE DEEP DIVE)
[H] =============================================

[H] CHAPTER 1: WORKSPACE & COLLABORATION
Designing with Teams. The history of Figma and why it beat Sketch and Adobe XD.

[H] CHAPTER 2: AUTO-LAYOUT (SHIFTA+A)
The superpower of UI design. Padding, Gap, and Constraints.
[GREEN] This is how you build buttons that automatically fit different word lengths.

[H] CHAPTER 3: COMPONENTS & VARIANTS
[BLUE] ATOMIC DESIGN: Build the small atoms (icons, colors), then molecules (buttons), then organisms (navbars), then templates.

[H] CHAPTER 4: PROTOTYPING & ANIMATION
[BLUE] SMART ANIMATE: How to simulate a real app feeling.
[BLUE] FLOWS: Creating a user journey from Login -> Home -> Transaction.

[H] CHAPTER 5: DESIGN SYSTEMS
Building a library that developers can actually use. Grids (8pt system), Spacing tokens, and variable color palettes.

[H] CONCLUSION
Master Figma, and you master the modern web economy.
                        `
                    }
                }
            ]
        }
    ]
};
