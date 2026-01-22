const COURSE_DB = {
    info: {
        title: "Design The Imagination | Graphic & UI/UX Mastery",
        price: 1300, // in paise (₹13)
        description: "Master Photoshop, Illustrator, Figma, and Design Theory in 4 weeks.",
        upi_id: "9473074602@ybl"
    },
    modules: [
        {
            title: "Module 1: Design Foundations & Visual Language",
            lessons: [
                {
                    id: 101,
                    title: "The Architecture of Color Theory",
                    type: "video",
                    src: "https://www.youtube.com/embed/UwHopwh0L_k",
                    related_videos: [
                        { title: "Color Psychology in Branding", url: "https://www.youtube.com/watch?v=M8afKKlwJAk" },
                        { title: "Choosing Color Palettes", url: "https://www.youtube.com/watch?v= UwHopwh0L_k" }
                    ],
                    resources: ["Book_1_Color_Physics.pdf", "Color_Emotional_Mapping.pdf", "Professional_Palette_Samples.pdf"],
                    pdf_content: {
                        "Book_1_Color_Physics.pdf": `
[H] THE PHYSICS AND BIOLOGY OF COLOR THEORY (FULL MANUAL)
[H] ========================================

[H] INTRODUCTION: THE NEUROSCIENCE OF COLOR
Color is more than just light; it is a profound neurological event. When light hits the human retina, it triggers biochemical reactions that travel to the hypothalamus—the part of the brain that governs our hormones and emotions. In this comprehensive guide, we explore the deep architecture of color in branding.

[H] CHAPTER 1: THE ELECTROMAGNETIC SPECTRUM
Light is energy moving in waves. The human eye can only see a small sliver (400nm to 700nm). 
[BLUE] THE WAVELENGTH FACTOR: Red has the longest wavelength (low frequency), while Violet has the shortest (high frequency). 
[RED] DESIGN FACT: Long wavelengths (Red/Orange) physically stimulate the nervous system, increasing heart rate and blood flow. This is why "Sale" signs are red.

[H] CHAPTER 2: THE RGB VS CMYK DIVIDE
Understanding your workspace is critical.
1. [H] RGB (Red, Green, Blue):
These are ADDITIVE colors. They are created with light. When you mix 100% of all three on a screen, you get Pure White.
- [GREEN] BEST FOR: UI Design, App Design, Social Media, TV, and Digital Art.
2. [H] CMYK (Cyan, Magenta, Yellow, Black):
These are SUBTRACTIVE colors. They are created with physical pigment. When you mix them on paper, they absorb light.
- [RED] CRITICAL WARNING: If you design a brand identity in RGB and send it to a printer without conversion, your colors will look "muddy" and dead on paper. Always design for the medium.

[H] CHAPTER 3: TINTS, SHADES, AND TONES
Mastering the depth of a single hue:
[BLUE] TINT: Color + White. These create soft, youthful, and energetic vibes.
[BLUE] SHADE: Color + Black. These create mystery, authority, and high-end luxury vibes.
[BLUE] TONE: Color + Grey. These create sophisticated, corporate, and stable vibes.

[H] CHAPTER 4: THE 60-30-10 BALANCE RULE
A mathematical approach to color distribution in UI:
- [GREEN] 60% NEUTRAL: Usually the background (White/Dark Grey).
- [GREEN] 30% SECONDARY: The brand's primary theme.
- [GREEN] 10% ACCENT: The "Call to Action" color (Buttons/Notifications).
[RED] DESIGN TIP: Your accent color should be the highest contrast to the 60% neutral.

[H] CHAPTER 5: ACCESSIBILITY (WCAG STANDARDS)
[BLUE] CONTRAST RATIO: Professional web text must meet AA (4.5:1) or AAA (7:1) contrast standards.
[RED] ACCESSIBILITY ALERT: 8% of the male population is colorblind. Never use color as the ONLY way to show status.

[H] CHAPTER 6: COLOR IN CULTURE
Color meanings change by geography:
- [BLUE] WHITE: Purity in the West, Mourning in parts of the East.
- [BLUE] RED: Danger in the West, Good Luck and Prosperity in China.
Always research your audience before picking a palette.
                        `,
                        "Color_Emotional_Mapping.pdf": `
[H] COLOR PSYCHOLOGY: THE EMOTIONAL MAP
[H] =====================================

[H] RED: THE AGGRESSOR
Red is the color of survival, appetite, and high energy.
- [BLUE] POSITIVE: Passion, Energy, Excitement.
- [BLUE] NEGATIVE: Aggression, Danger, Strain.
- [H] BEST FOR: Fast food, Sales, Emergency services.

[H] BLUE: THE COMMUNICATOR
The world's most trusted color. It reduces heart rate.
- [BLUE] POSITIVE: Trust, Logic, Intelligence, Calm.
- [BLUE] NEGATIVE: Coldness, Lack of emotion.
- [H] BEST FOR: Banking, Tech companies, Healthcare.

[H] YELLOW: THE OPTIMIST
The first color the human eye notices.
- [BLUE] POSITIVE: Confidence, Creativity, Friendliness.
- [BLUE] NEGATIVE: Anxiety, Fragility.
- [H] BEST FOR: Warning signs, Creative agencies, Kids' brands.

[H] GREEN: THE EQUILIBRIUM
The color of rest. It sits in the middle of the spectrum.
- [BLUE] POSITIVE: Health, Wealth, Environment, Growth.
- [BLUE] NEGATIVE: Boredom, Stagnation.
- [H] BEST FOR: Organic brands, Finance, Sustainability.

[H] BLACK: THE AUTHORITATIVE
Black is the absence of light. It suggests total clarity.
- [BLUE] POSITIVE: Sophistication, Power, Efficiency, Mystery.
- [BLUE] NEGATIVE: Oppression, Heaviness.
- [H] BEST FOR: Luxury goods (Chanel, Nike), Premium electronics.
                        `,
                        "Professional_Palette_Samples.pdf": `
[H] CURATED PROFESSIONAL PALETTES
[H] ============================

[H] PALETTE 1: THE DISRUPTIVE STARTUP
[BLUE] Colors: Electric Purple, Neon Green, Deep Charcoal.
Vibe: High energy, futuristic, daring.

[H] PALETTE 2: THE LUXURY SPA
[BLUE] Colors: Sage Green, Sand Beige, Soft White.
Vibe: Calm, expensive, organic.

[H] PALETTE 3: THE FINTECH GIANT
[BLUE] Colors: Navy Blue, Cyan Accent, Cool Grey.
Vibe: Stable, secure, fast.
                        `
                    }
                },
                {
                    id: 102,
                    title: "Typography Mastery & Font Psychology",
                    type: "video",
                    src: "https://www.youtube.com/embed/mZH8Adm7PMg",
                    related_videos: [
                        { title: "Pairing Fonts Like a Pro", url: "https://www.youtube.com/watch?v=xyIXxSOXAlo" },
                        { title: "Modern Web Typography Tips", url: "https://www.youtube.com/watch?v=9EPTM91TBDU" }
                    ],
                    resources: ["Book_2_Typography_Manual.pdf", "Font_Pairing_Secrets.pdf", "Typography_Checklist.pdf"],
                    pdf_content: {
                        "Book_2_Typography_Manual.pdf": `
[H] THE ULTIMATE MANUAL OF TYPOGRAPHY (DEEP DIVE)
[H] ============================================

[H] CHAPTER 1: WORDS ARE PICTURES
Typography is the most important skill for a graphic designer. 95% of the information on the web is written language. If your typography is bad, your design is a failure.

[H] CHAPTER 2: THE ANATOMY OF A LETTER
To master type, you must see the grid:
- [BLUE] ASCENDER: The part of a letter that goes above the x-line (like 'h' or 'd').
- [BLUE] DESCENDER: The part that goes below the baseline (like 'y' or 'g').
- [BLUE] X-HEIGHT: The height of the lowercase body. Large x-heights are more readable on mobile screens.
- [BLUE] SERIF: The "feet" at the ends of strokes.

[H] CHAPTER 3: CLASSIFICATIONS
1. [H] SERIFS:
Traditional and formal. The serifs help lead the eye from one letter to the next.
- [GREEN] EXAMPLES: Playfair Display, Times New Roman, Garamond.
2. [H] SANS-SERIFS:
Modern, clean, and efficient. No "feet".
- [GREEN] EXAMPLES: Inter, Montserrat, Roboto, Helvetica.
3. [H] SLAB SERIFS:
Bold and blocky. Used for impact and industrial branding.
4. [H] SCRIPT:
Decorative. Use ONLY for short headlines or invitations.

[H] CHAPTER 4: THE VERTICAL RHYTHM (LEADING)
Leading is the space between lines of text.
[BLUE] THE 1.5x RULE: For body text on the web, use a leading of 140%-160% of the font size.

[H] CHAPTER 5: THE HORIZONTAL RHYTHM (KERNING & TRACKING)
[BLUE] KERNING: Adjusting the space between two specific letters.
[BLUE] TRACKING: Adjusting the space across a whole paragraph.
[RED] PRO TIP: Increase tracking for ALL-CAPS headlines to create a high-luxury, premium vibe.

[H] CHAPTER 6: SCALE AND MODULAR GRIDS
Use a modular scale (e.g., 1.25 Ratio) to define your font sizes:
- 16px (Body)
- 20px (H4)
- 25px (H3)
- 31px (H2)
- 39px (H1)
This ensures mathematical harmony in your layout.
                        `,
                        "Font_Pairing_Secrets.pdf": `
[H] THE ART OF FONT PAIRING: STEP-BY-STEP
[H] =====================================

[H] STEP 1: ESTABLISH CONTRAST
Never pair two fonts that look "almost the same" (like two different Sans-Serifs). It looks like a mistake.
[GREEN] SUCCESSFUL PAIR: A Geometric Sans (Header) + A Humanist Serif (Body).

[H] STEP 2: ASSIGN ROLES
Pick one "Workhorse" font family that has many weights (Thin, Light, Regular, Bold, Black). Use this for 90% of your UI.

[H] STEP 3: LIMIT YOUR TOOLS
[RED] WARNING: Never use more than 3 fonts in a single project. 2 is usually the professional standard.
                        `,
                        "Typography_Checklist.pdf": `
[H] THE TYPOGRAPHY QUALITY CHECKLIST
[H] ================================

[BLUE] 1. Is the line height comfortable? (1.5x)
[BLUE] 2. Is the line length too long? (Max 70 characters)
[BLUE] 3. Does the Headline stand out enough from the Body?
[BLUE] 4. Is the font readable at small sizes?
[BLUE] 5. Are there any "Widows" or "Orphans" in the text block?
                        `
                    }
                },
                {
                    id: 103,
                    title: "Composition, Grids & UI Principles",
                    type: "video",
                    src: "https://www.youtube.com/embed/M8afKKlwJAk",
                    related_videos: [
                        { title: "Understanding White Space", url: "https://www.youtube.com/watch?v=xyIXxSOXAlo" },
                        { title: "Layout Design Mastery", url: "https://www.youtube.com/watch?v=M8afKKlwJAk" }
                    ],
                    resources: ["Book_3_Composition_Guide.pdf", "UI_UX_Principles_Checklist.pdf", "Grid_Layout_Schematics.pdf"],
                    pdf_content: {
                        "Book_3_Composition_Guide.pdf": `
[H] COMPOSITION & GRID SYSTEMS IN DESIGN (VOLUME 1)
[H] =====================================

[H] CHAPTER 1: THE RULE OF THIRDS
Divide your canvas into a 3x3 grid. Placing key elements at the intersections creates more tension and interest.

[H] CHAPTER 2: THE GOLDEN RATIO (1.618)
The mathematical pattern found in nature. In design, we use it to create perfectly balanced proportions.

[H] CHAPTER 3: GRID SYSTEMS
[BLUE] THE 12-COLUMN GRID: The industry standard for web design.
[BLUE] THE 8PT SPACING SYSTEM: In UI, every gap should be a multiple of 8px (8, 16, 24, 32...).

[H] CHAPTER 4: BALANCE AND SYMMETRY
- [H] SYMMETRICAL: Stability, trust.
- [H] ASYMMETRICAL: Movement, creativity.

[H] CHAPTER 5: WHITE SPACE (NEGATIVE SPACE)
[RED] CRITICAL TIP: White space is not "empty space"—it is a functional element. 
                        `,
                        "UI_UX_Principles_Checklist.pdf": `
[H] THE UI/UX PROFESSIONAL CHECKLIST
[H] ===============================

[H] 1. VISUAL HIERARCHY
Does the most important element (The Button) stand out the most?

[H] 2. PROXIMITY
Related items should be grouped together. 

[H] 3. CONSISTENCY
Buttons that do the same thing should look the same.

[H] 4. FEEDBACK
When a user clicks, did something happen?
                        `,
                        "Grid_Layout_Schematics.pdf": `
[H] COMMON WEB GRID SCHEMATICS
[H] ==========================

- [BLUE] Single Column: For focused articles.
- [BLUE] Split Screen (50/50): For landing pages (Image + CTA).
- [BLUE] Card Grid (3x3): For portfolios and dashboards.
- [BLUE] Sidebar Layout: For complex management tools.
                        `
                    }
                }
            ]
        },
        {
            title: "Module 2: Adobe Photoshop Expert Course",
            lessons: [
                {
                    id: 201,
                    title: "Interface, Layer Logic & Smart Objects",
                    type: "video",
                    src: "https://www.youtube.com/embed/FSy_4xEHXTM",
                    related_videos: [
                        { title: "Managing Layers Effectively", url: "https://www.youtube.com/watch?v=FSy_4xEHXTM" }
                    ],
                    resources: ["Book_4_Photoshop_Fundamentals.pdf", "Smart_Objects_InDepth.pdf"],
                    pdf_content: {
                        "Book_4_Photoshop_Fundamentals.pdf": `
[H] PHOTOSHOP EXPERT: CHAPTER 1 - THE FUNDAMENTALS
[H] ==============================================

[H] CHAPTER 1: RASTER VS VECTOR
Photoshop is a pixel editor. Every image is a grid of colored squares. 

[H] CHAPTER 2: THE POWER OF SMART OBJECTS
[RED] NEVER SCALE A NORMAL LAYER.
[GREEN] SOLUTION: Right Click > Convert to Smart Object. 

[H] CHAPTER 3: NON-DESTRUCTIVE EDITING
- [BLUE] USE LAYER MASKS.
- [BLUE] USE ADJUSTMENT LAYERS.

[H] CHAPTER 4: LAYER BLENDING MODES
1. [BLUE] MULTIPLY: Darkens. 
2. [BLUE] SCREEN: Lightens. 
3. [BLUE] OVERLAY: Blends light and dark.
                        `,
                        "Smart_Objects_InDepth.pdf": `
[H] SMART OBJECTS: THE DESIGNER'S SAFETY NET
[H] =========================================

[H] 1. LINKED VS EMBEDDED
[BLUE] EMBEDDED: Stored inside the PSD file.
[BLUE] LINKED: Saved as a separate file. Good for updating one logo across multiple designs.

[H] 2. SMART FILTERS
When you apply a filter (like Blur) to a Smart Object, it becomes a "Smart Filter". You can change the blur amount or mask out certain parts of the filter later.
                        `
                    }
                },
                {
                    id: 202,
                    title: "Advanced Selection & The Pen Tool",
                    type: "video",
                    src: "https://www.youtube.com/embed/5kAQUNFZJXY",
                    related_videos: [
                        { title: "Pen Tool Masterclass", url: "https://www.youtube.com/watch?v=5kAQUNFZJXY" }
                    ],
                    resources: ["Book_5_Pen_Tool_Mastery.pdf", "Selection_Tools_CheatSheet.pdf", "Vector_Masking_Protocol.pdf"],
                    pdf_content: {
                        "Book_5_Pen_Tool_Mastery.pdf": `
[H] MASTERING THE PEN TOOL (THE PRO WAY)
[H] =====================================

[H] CHAPTER 1: WHY THE PEN TOOL?
It uses math (Bezier Curves) to create infinitely sharp, perfect paths. 

[H] CHAPTER 2: ANCHORS AND HANDLES
- [BLUE] ANCHOR POINT: The corners.
- [BLUE] HANDLES: The curves.
[RED] THE CORE TRICK: Hold ALT/Option while clicking an anchor to break the handle.

[H] CHAPTER 3: PATHS VS SHAPES
[GREEN] PRO TIP: Use Ctrl+Enter to turn any finished path into a selection.
                        `,
                        "Selection_Tools_CheatSheet.pdf": `
[H] PHOTOSHOP SELECTION FIELD GUIDE
[H] ===============================
1. [BLUE] OBJECT SELECTION (W)
2. [BLUE] QUICK SELECTION (W)
3. [BLUE] MAGNETIC LASSO
4. [BLUE] COLOR RANGE
                        `,
                        "Vector_Masking_Protocol.pdf": `
[H] VECTOR MASKING FOR PRODUCT RETOUCHING
[H] =====================================

[H] STEPS:
1. Create a path with the Pen Tool.
2. Hold Cmd/Ctrl and click the "Mask" button in the layers panel.
[GREEN] RESULT: A razor-sharp edge that is mathematically defined. Perfect for high-end product photography.
                        `
                    }
                },
                {
                    id: 203,
                    title: "Skin Retouching & Object Removal",
                    type: "video",
                    src: "https://www.youtube.com/embed/0q_GxbuEr_M",
                    related_videos: [
                        { title: "Professional Skin Retouching", url: "https://www.youtube.com/watch?v=0q_GxbuEr_M" },
                        { title: "Removing Objects (AI)", url: "https://www.youtube.com/watch?v=FSy_4xEHXTM" }
                    ],
                    resources: ["Book_6_Retouching_Manual.pdf", "Skin_Frequency_Separation.pdf", "Advanced_Healing_Tactics.pdf"],
                    pdf_content: {
                        "Book_6_Retouching_Manual.pdf": `
[H] THE PROFESSIONAL RETOUCHING MANUAL
[H] ==================================

[H] CHAPTER 1: THE CLONE STAMP (S)
[GREEN] PRO TIP: Set the Opacity to 30% for a natural blend.

[H] CHAPTER 2: THE HEALING BRUSH (J)
Matches the texture AND the lighting.

[H] CHAPTER 3: CONTENT-AWARE FILL
Use Edit > Content-Aware Fill for complex objects.
                        `,
                        "Skin_Frequency_Separation.pdf": `
[H] SKIN RETOUCHING: FREQUENCY SEPARATION
[H] =====================================
1. [BLUE] HIGH FREQUENCY: Texture.
2. [BLUE] LOW FREQUENCY: Color.
                        `,
                        "Advanced_Healing_Tactics.pdf": `
[H] ADVANCED TEXTURE HEALING
[H] =========================
- [BLUE] Use the Patch Tool for large skin areas.
- [BLUE] Use the Spot Healing Brush with "Content-Aware" checked.
- [RED] Always retouch on a NEW BLANK LAYER with "Sample All Layers" active.
                        `
                    }
                },
                {
                    id: 204,
                    title: "Advanced Compositing & Light Blending",
                    type: "video",
                    src: "https://www.youtube.com/embed/x5TbF8Tb9U0",
                    related_videos: [
                        { title: "Compositing Workflow", url: "https://www.youtube.com/watch?v=x5TbF8Tb9U0" }
                    ],
                    resources: ["Book_7_Compositing_Secrets.pdf", "Blending_Light_Guide.pdf", "Shadow_Physics_Workbook.pdf"],
                    pdf_content: {
                        "Book_7_Compositing_Secrets.pdf": `
[H] PHOTO COMPOSITING: WORLD BUILDING
[H] =================================

[H] CHAPTER 1: MATCHING PERSPECTIVE
Always identify the "Vanish Points".

[H] CHAPTER 2: MATCHING LIGHT DIRECTION
 shadows must align!

[H] CHAPTER 3: ADDING ATMOSPHERE
Add fog, dust, or lens flares between the layers.
                        `,
                        "Blending_Light_Guide.pdf": `
[H] THE ART OF BLENDING LIGHT & COLOR
[H] ==================================
1. [BLUE] THE CURVES ADJUSTMENT.
2. [BLUE] COLOR BALANCE.
                        `,
                        "Shadow_Physics_Workbook.pdf": `
[H] THE PHYSICS OF SHADOWS
[H] =======================
- [BLUE] OCCLUSION SHADOW: Very dark, very sharp, where object touches ground.
- [BLUE] CONTACT SHADOW: Soft, slightly larger.
- [BLUE] CAST SHADOW: Long shadow based on sun position.
                        `
                    }
                }
            ]
        },
        {
            title: "Module 3: Adobe Illustrator Mastery (Vector)",
            lessons: [
                {
                    id: 301,
                    title: "The Logic of Vectors & Shape Builder",
                    type: "video",
                    src: "https://www.youtube.com/embed/AMqc3sRQ_-M",
                    related_videos: [
                        { title: "Shape Builder Mastering", url: "https://www.youtube.com/watch?v=AMqc3sRQ_-M" }
                    ],
                    resources: ["Book_8_Vector_Logic.pdf", "Shape_Builder_Workflow.pdf", "Pathfinder_Vs_ShapeBuilder.pdf"],
                    pdf_content: {
                        "Book_8_Vector_Logic.pdf": `
[H] ADOBE ILLUSTRATOR: VECTOR ARCHITECTURE
[H] ========================================

[H] CHAPTER 1: THE INFINITE SCALE
[GREEN] THE SUPERPOWER: Scale infinitely without quality loss.

[H] CHAPTER 2: ANCHORS VS HANDLES
[RED] PRO TIP: The less anchor points, the smoother the design.

[H] CHAPTER 3: THE PEN TOOL IN ILLUSTRATOR
Use the [BLUE] Direct Selection Tool (A) to perfect curves.
                        `,
                        "Shape_Builder_Workflow.pdf": `
[H] THE SHAPE BUILDER (SHIFT+M): LOGO SECRETS
[H] =========================================
[BLUE] STEP 1: Overlap circles.
[BLUE] STEP 2: Click and drag to merge.
[BLUE] STEP 3: Alt+Click to subtract.
                        `,
                        "Pathfinder_Vs_ShapeBuilder.pdf": `
[H] PATHFINDER VS SHAPE BUILDER
[H] ===========================
- [BLUE] PATHFINDER: Static, mathematical, great for final cleanup.
- [BLUE] SHAPE BUILDER: Dynamic, visual, great for creation.
                        `
                    }
                },
                {
                    id: 302,
                    title: "Logo Design Process (Start to Finish)",
                    type: "video",
                    src: "https://www.youtube.com/embed/TF4_T7yMTOA",
                    related_videos: [
                        { title: "Building a Dynamic Brand", url: "https://www.youtube.com/watch?v=TF4_T7yMTOA" }
                    ],
                    resources: ["Book_9_Logo_Design_Bible.pdf", "Brand_Identity_Guidelines.pdf"],
                    pdf_content: {
                        "Book_9_Logo_Design_Bible.pdf": `
[H] THE LOGO DESIGNER'S BIBLE: STEP-BY-STEP
[H] =======================================

[H] CHAPTER 1: THE BRIEF
[H] CHAPTER 2: SKETCHING
[H] CHAPTER 3: VECTORIZATION
[H] CHAPTER 4: COLORING
[H] CHAPTER 5: THE PRESENTATION
                        `,
                        "Brand_Identity_Guidelines.pdf": `
[H] CREATING A BRAND IDENTITY SYSTEM
[H] ================================
- [BLUE] Primary Logo.
- [BLUE] Secondary Mark (Monogram).
- [BLUE] Typography System.
- [BLUE] Color Palette.
- [BLUE] Imagery Style.
                        `
                    }
                },
                {
                    id: 303,
                    title: "Advanced Typography & Type on Path",
                    type: "video",
                    src: "https://www.youtube.com/embed/mZH8Adm7PMg",
                    related_videos: [
                        { title: "Mastering Type on Paths", url: "https://www.youtube.com/watch?v=mZH8Adm7PMg" }
                    ],
                    resources: ["Book_10_Advanced_Type.pdf", "Custom_Font_Creation_Basics.pdf"],
                    pdf_content: {
                        "Book_10_Advanced_Type.pdf": `
[H] ILLUSTRATOR TYPOGRAPHY SECRETS
[H] ==============================
- [BLUE] Type on a Circle.
- [BLUE] Creating Outlines (Ctrl+Shift+O).
- [BLUE] Touch Type Tool.
                        `,
                        "Custom_Font_Creation_Basics.pdf": `
[H] CUSTOM LETTERING BASICS
[H] ========================
1. Type a word in a standard font.
2. Convert to Outlines.
3. Use the [BLUE] Direct Selection Tool to pull anchor points and create custom ligatures.
                        `
                    }
                }
            ]
        },
        {
            title: "Module 4: Figma & UI/UX Strategy",
            lessons: [
                {
                    id: 401,
                    title: "Figma UI Basics & Web Layout",
                    type: "video",
                    src: "https://www.youtube.com/embed/9EPTM91TBDU",
                    related_videos: [
                        { title: "UI Components Basics", url: "https://www.youtube.com/watch?v=9EPTM91TBDU" }
                    ],
                    resources: ["Book_11_Figma_Mastery.pdf", "Auto_Layout_Secrets.pdf", "Design_System_Fundamentals.pdf"],
                    pdf_content: {
                        "Book_11_Figma_Mastery.pdf": `
[H] FIGMA FOR UI DESIGNERS: THE STARTING POINT
[H] ==========================================
[BLUE] FRAMES VS GROUPS.
[BLUE] STYLES AND LIBRARIES.
[BLUE] COMPONENTS (CMD+ALT+K).
                        `,
                        "Auto_Layout_Secrets.pdf": `
[H] AUTO-LAYOUT (SHIFT+A): THE SUPERPOWER
[H] =====================================
- [H] HUG.
- [H] FILL.
- [H] FIXED.
                        `,
                        "Design_System_Fundamentals.pdf": `
[H] BUILDING YOUR FIRST DESIGN SYSTEM
[H] =================================
- [BLUE] Define Color Styles.
- [BLUE] Define Text Styles.
- [BLUE] Define Icon Library.
- [BLUE] Set Spacing Tokens (8pt Grid).
                        `
                    }
                },
                {
                    id: 402,
                    title: "Prototyping & Smart Animate",
                    type: "video",
                    src: "https://www.youtube.com/embed/oAZEttTI0Xw",
                    related_videos: [
                        { title: "Advanced Figma Prototyping", url: "https://www.youtube.com/watch?v=oAZEttTI0Xw" }
                    ],
                    resources: ["Book_12_Prototyping_Manual.pdf", "Microinteractions_Guide.pdf"],
                    pdf_content: {
                        "Book_12_Prototyping_Manual.pdf": `
[H] FIGMA PROTOTYPING: BRINGING DESIGN TO LIFE
[H] ==========================================
1. [BLUE] THE PROTOTYPE TAB.
2. [BLUE] SMART ANIMATE.
3. [BLUE] TRIGGERS.
                        `,
                        "Microinteractions_Guide.pdf": `
[H] DESIGNING MICROINTERACTIONS
[H] ===========================
- [BLUE] The Button Pop: Use a scale change on hover.
- [BLUE] The Page Slide: Smooth transition between mobile frames.
- [BLUE] The Tab Switch: Animate the active underline.
                        `
                    }
                },
                {
                    id: 403,
                    title: "Portfolio Building & Landing Your First Job",
                    type: "video",
                    src: "https://www.youtube.com/embed/DZ2bB8tL4O0",
                    related_videos: [
                        { title: "Designing a Creative Portfolio", url: "https://www.youtube.com/watch?v=DZ2bB8tL4O0" },
                        { title: "Design Resume Tips", url: "https://www.youtube.com/watch?v=sFY1_tEXcOs" }
                    ],
                    resources: ["Book_13_Portfolio_Strategy.pdf", "Designer_Interview_Questions.pdf"],
                    pdf_content: {
                        "Book_13_Portfolio_Strategy.pdf": `
[H] THE ULTIMATE DESIGN PORTFOLIO STRATEGY
[H] ======================================
- [H] QUALITY OVER QUANTITY.
- [H] THE CASE STUDY (THE "WHY").
- [H] WHERE TO HOST?
                        `,
                        "Designer_Interview_Questions.pdf": `
[H] TOP DESIGN INTERVIEW QUESTIONS
[H] ==============================
1. Walk me through your design process.
2. How do you handle critical feedback?
3. Why did you choose these fonts for this project?
4. How do you ensure your designs are accessible?
                        `
                    }
                }
            ]
        }
    ]
};
