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
                    src: "https://www.youtube.com/embed/_2LLXnUdUIc",
                    resources: ["Color_Wheel_Guide.pdf"],
                    pdf_content: {
                        "Color_Wheel_Guide.pdf": `
                        COLOR HARMONY RUELS
                        -------------------
                        1. Complementary: Opposite colors (Red + Green) - High Contrast
                        2. Analogous: Side-by-side (Blue + Blue-Green) - Calm
                        3. Triadic: Triangle (Red + Yellow + Blue) - Vibrant

                        EMOTIONAL MEANINGS
                        -------------------
                        Red: Passion, Urgency
                        Blue: Trust, Tech
                        Yellow: Optimism, Warning
                        Green: Growth, Money
                        `
                    }
                },
                {
                    id: 102,
                    title: "Typography Mastery",
                    type: "video",
                    src: "https://www.youtube.com/embed/sJdZ902dCqM",
                    resources: ["Font_Pairing_Guide.pdf"],
                    pdf_content: {
                        "Font_Pairing_Guide.pdf": `
                        1. HEADER + BODY PAIRS
                        ------------------------------------
                        - Montserrat (Bold) + Open Sans (Light)
                        - Playfair Display + Lato
                        - Oswald + Roboto
                        - Bebas Neue + Montserrat

                        2. HIERARCHY RULES
                        ------------------------------------
                        - Scale: 2x rule (Headers 2x size of body)
                        - Weight: Skip a weight (Bold -> Light, not Medium)
                        - Contrast: Serif Header + Sans-Serif Body
                        `
                    }
                },
                {
                    id: 103,
                    title: "Layout & Composition Rules",
                    type: "video",
                    src: "https://www.youtube.com/embed/a5s5qGg01nE",
                    resources: ["Grid_Systems_101.pdf"],
                    pdf_content: {
                        "Grid_Systems_101.pdf": `
                        THE RULE OF THIRDS
                        Divide your canvas into 3x3. Place key elements at intersections.

                        THE F-PATTERN
                        Users scan screens in an F-shape. 
                        Top Left -> Top Right -> Lower Left -> Across.

                        WHITESPACE
                        Space is not empty; it is an active design element.
                        Give content room to breathe.
                        `
                    }
                }
            ]
        },
        {
            title: "Module 2: Photoshop Advanced",
            lessons: [
                {
                    id: 201,
                    title: "Photoshop Interface Tour",
                    type: "video",
                    src: "https://www.youtube.com/embed/IyR_uYsRdPs",
                    resources: ["Shortcut_Map.pdf"],
                    pdf_content: {
                        "Shortcut_Map.pdf": `
                        ESSENTIAL SHORTCUTS (WIN/MAC)
                        ------------------------------------
                        - Move Tool: V
                        - Marquee Tool: M
                        - Brush Tool: B
                        - Pen Tool: P
                        - Text Tool: T
                        
                        LAYERS
                        ------------------------------------
                        - New Layer: Ctrl/Cmd + Shift + N
                        - Duplicate: Ctrl/Cmd + J
                        - Group: Ctrl/Cmd + G
                        `
                    }
                },
                {
                    id: 202,
                    title: "Advanced Masking Techniques",
                    type: "video",
                    src: "https://www.youtube.com/embed/v_32rCq63Ww",
                    resources: ["Masking_Checklist.pdf"],
                    pdf_content: {
                        "Masking_Checklist.pdf": `
                        THE GOLDEN RULES OF MASKING
                        ------------------------------------
                        1. WHITE Reveals, BLACK Conceals.
                        2. Use Soft Brushes for hair/fur edges.
                        3. Use Pen Tool for hard mechanical edges.
                        
                        REFINE EDGE WORKFLOW
                        1. Select Subject (Auto)
                        2. Select & Mask -> Refine Edge Brush
                        3. Toggle "Decontaminate Colors" to remove halos.
                        `
                    }
                }
            ]
        },
        {
            title: "Module 3: Figma & UI/UX",
            lessons: [
                {
                    id: 301,
                    title: "Figma Crash Course",
                    type: "video",
                    src: "https://www.youtube.com/embed/FTFaQWZBqQ8",
                    resources: ["Figma_Shortcuts.pdf"],
                    pdf_content: {
                        "Figma_Shortcuts.pdf": `
                        FIGMA POWER MOVES
                        ------------------------------------
                        - Frame: F
                        - Rectangle: R
                        - Text: T
                        - Color Picker: I
                        
                        AUTO LAYOUT
                        - Add: Shift + A
                        - Remove: Alt + Shift + A
                        
                        COMPONENTS
                        - Create: Ctrl/Cmd + Alt + K
                        - Detach: Ctrl/Cmd + Alt + B
                        `
                    }
                },
                {
                    id: 302,
                    title: "Building a Glassmorphism App",
                    type: "video",
                    src: "https://www.youtube.com/embed/W7fT_lXwPuw",
                    resources: ["Glassmorphism_UI_Kit.fig"]
                }
            ]
        }
    ]
};
