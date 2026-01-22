const COURSE_DB = {
    info: {
        title: "Graphic & UI/UX Design Mastery",
        price: 1300, // in paise (₹13)
        description: "Master Photoshop, Illustrator, Figma, and Design Theory in 4 weeks.",
        upi_id: "9473074602@ybl"
    },
    modules: [
        {
            title: "Module 1: Design Foundations",
            lessons: [
                {
                    id: 101,
                    title: "Understanding Color Theory",
                    type: "video",
                    src: "https://www.youtube.com/embed/UwHopwh0L_k", // Deep 2-hour Mastery
                    resources: ["Color_Psychology_Guide.pdf"],
                    pdf_content: {
                        "Color_Psychology_Guide.pdf": `
[H] MASTERING COLOR PSYCHOLOGY & THEORY
[H] -----------------------------------------

Color is the most powerful tool in your design arsenal. It sets the mood, directs attention, and influences psychology.

[BLUE] ANALOGOUS COLORS:
Side-by-side on the wheel. They create a serene and comfortable design. Used extensively in nature.
[GREEN] PRO TIP: Use Analogous colors for backgrounds to keep them subtle.

[BLUE] COMPLEMENTARY COLORS:
Directly opposite on the wheel. They create high contrast and vibrant looks.
[RED] WARNING: Use sparingly! Overuse can cause visual vibration and eye strain.

[H] PSYCHOLOGY OF COLORS:
- [BLUE] BLUE: Represents Trust, Stability, and Tech. Used by Facebook, Intel, Boeing.
- [RED] RED: Represents Urgency, Passion, and Appetite. Used by CNN, Netflix, KFC.
- [GREEN] GREEN: Represents Growth, Money, and Nature. Used by Starbucks, Animal Planet.

[H] THE 60-30-10 RULE:
[GREEN] 60% should be your Dominant Color (usually neutral).
[GREEN] 30% should be your Secondary Color.
[GREEN] 10% should be your Accent Color (for Buttons and CTAs).
                        `
                    }
                },
                {
                    id: 102,
                    title: "Typography Mastery",
                    type: "video",
                    src: "https://www.youtube.com/embed/UwHopwh0L_k",
                    resources: ["Pro_Typography_Secrets.pdf"],
                    pdf_content: {
                        "Pro_Typography_Secrets.pdf": `
[H] THE COMPLETE GUIDE TO TYPOGRAPHY
[H] ---------------------------------

Typography is 90% of design. If you cannot master type, you cannot design for the web.

[H] SERIF VS SANS-SERIF:
- [BLUE] SERIF: Formal, Traditional, Trustworthy (Example: Times New Roman, Playfair).
- [BLUE] SANS-SERIF: Modern, Clean, Minimalist (Example: Montserrat, Roboto).

[H] READABILITY VS LEGIBILITY:
[BLUE] LEGIBILITY is how easy it is to distinguish one letter from another.
[BLUE] READABILITY is how easy it is to read a long block of text.

[H] MASTERING HIERARCHY:
[GREEN] RULE 1: Use Size to show importance.
[GREEN] RULE 2: Use Weight (Bold vs Regular) to create contrast.
[GREEN] RULE 3: Use Color/Opacity to push background text away.

[RED] DON'T DO THIS:
- Never use Comic Sans for professional work.
- Never stretch your fonts. Always scale holding SHIFT.
- Never use more than 2-3 fonts in a single project.
                        `
                    }
                }
            ]
        },
        {
            title: "Module 2: Photoshop Mastery",
            lessons: [
                {
                    id: 201,
                    title: "Photoshop Interface & Workflow",
                    type: "video",
                    src: "https://www.youtube.com/embed/aNpO6G72O3w",
                    resources: ["Photoshop_CheatSheet.pdf"],
                    pdf_content: {
                        "Photoshop_CheatSheet.pdf": `
[H] PHOTOSHOP PRO WORKFLOW
[H] -----------------------

[BLUE] ESSENTIAL SHORTCUTS:
- [GREEN] V: Move Tool
- [GREEN] B: Brush Tool
- [GREEN] M: Marquee Tool
- [GREEN] P: Pen Tool (The King of selection)
- [GREEN] Ctrl/Cmd + J: Duplicate Layer
- [GREEN] Ctrl/Cmd + Shift + N: New Layer

[H] NON-DESTRUCTIVE EDITING:
[BLUE] NEVER delete pixels. Always use MASKING.
[GREEN] Smart Objects: Convert layers to Smart Objects to keep them high-res when scaling.
[GREEN] Adjustment Layers: Use the panel for Color/Brightness instead of Image > Adjustments.
                        `
                    }
                },
                {
                    id: 202,
                    title: "Advanced Masking Techniques",
                    type: "video",
                    src: "https://www.youtube.com/embed/aNpO6G72O3w", // PiXimperfect Master Master
                    resources: ["Masking_Masterclass_Notes.pdf"],
                    pdf_content: {
                        "Masking_Masterclass_Notes.pdf": `
[H] ADVANCED MASKING & COMPOSITING
[H] -------------------------------

[H] THE MAGIC RULE:
[BLUE] WHITE Reveals, BLACK Conceals. 
[GREEN] Gray levels create transparency.

[H] HAIR SELECTION WORKFLOW:
1. Use [BLUE] Select Subject.
2. Go to [BLUE] Select and Mask.
3. Use the [BLUE] Refine Edge Brush on the hair edges.
4. Set Output to [GREEN] Layer Mask.

[H] USING LUMINOSITY MASKS:
These are masks based on Brightness levels. Perfect for landscape blending.

[RED] COMMON MISTAKES:
- Leaving "halos" or white edges around masked objects.
- Using a hard brush for soft objects like clouds or hair.
                        `
                    }
                }
            ]
        },
        {
            title: "Module 3: Figma & UX Design",
            lessons: [
                {
                    id: 301,
                    title: "Figma Fundamentals for UX",
                    type: "video",
                    src: "https://www.youtube.com/embed/bI6q16ffdgQ",
                    resources: ["Figma_UX_Checklist.pdf"],
                    pdf_content: {
                        "Figma_UX_Checklist.pdf": `
[H] FIGMA FOR PROFESSIONAL UX DESIGN
[H] ---------------------------------

[H] AUTO-LAYOUT (SHIFTA+A):
[BLUE] This is the most important feature. It allows your designs to grow/shrink based on content.
[GREEN] PRO TIP: Nest Auto-Layouts inside each other for complex interfaces.

[H] COMPONENTS & VARIANTS:
[BLUE] Create atomic elements (Buttons, Inputs) as Components.
[BLUE] Use VARIANTS to manage states like Hover, Pressed, and Disabled.

[H] THE DESIGN SYSTEM:
[GREEN] 1. Define Color Styles.
[GREEN] 2. Define Text Styles.
[GREEN] 3. Define Grid System (8pt Grid is standard).

[RED] PROHIBITED:
- Detaching instances unless absolutely necessary.
- Naming layers "Frame 14923". Always Name your layers!
                        `
                    }
                }
            ]
        }
    ]
};
