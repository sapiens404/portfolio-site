const COURSE_DB = {
    info: {
        title: "Graphic & UI/UX Design Mastery",
        price: 1300, // in paise (₹13)
        description: "Master Photoshop, Illustrator, Figma, and Design Theory in 4 weeks.",
        upi_id: "9473074602@ybl"
    },
    modules: [
        {
            title: "Module 1: Design Theory & Psychology",
            lessons: [
                {
                    id: 101,
                    title: "The Architecture of Color (Full Book)",
                    type: "video",
                    src: "https://www.youtube.com/embed/UwHopwh0L_k",
                    resources: ["Book_1_Color_Theory.pdf"],
                    pdf_content: {
                        "Book_1_Color_Theory.pdf": `
[H] THE ARCHITECTURE OF COLOR THEORY (COMPLETE BOOK)
[H] ===============================================

[H] INTRODUCTION: THE BIOLOGY OF COLOR
Color is a complex system of neurological signals. When light hits the retina, it triggers biochemical reactions that travel to the hypothalamus, which governs our hormones and emotions. In this 20-chapter summary book, we will explore why color is the most critical decision in branding.

[H] CHAPTER 1: LIGHT AND THE ELECTROMAGNETIC SPECTRUM
Light is energy. The visible spectrum (400nm to 700nm) is what we perceive as color. 
[BLUE] FACT: Red light has the longest wavelength and induces the highest physical stimulus. 

[H] CHAPTER 2: THE RGB VS CMYK DIVIDE
1. [H] RGB (Red, Green, Blue):
These are "Additive" colors. When you mix 100% of all three on a screen, you get Pure White. 
- [GREEN] Best for: Websites, Apps, Social Media, TV.
2. [H] CMYK (Cyan, Magenta, Yellow, Black):
These are "Subtractive" colors. When you mix them on paper, you get a muddy dark color (Black is added for depth).
- [RED] WARNING: If you design a logo in RGB and print it without conversion, the colors will look dull and washed out.

[H] CHAPTER 3: UNDERSTANDING THE COLOR WHEEL
- [BLUE] PRIMARY: Red, Yellow, Blue.
- [BLUE] SECONDARY: Green, Orange, Purple.
- [BLUE] TERTIARY: Vermilion, Amber, Chartreuse, Teal, Violet, Magenta.

[H] CHAPTER 4: CORE HARMONIES
[BLUE] Harmony 1: Complementary (Opposites). High energy, high impact.
[BLUE] Harmony 2: Analogous (Neighbors). Growth, safety, calming.
[BLUE] Harmony 3: Monochromatic (Tints/Shades). Elegant, professional, high-end luxury.

[H] CHAPTER 5: EMOTIONAL MAPPING
- [H] RED: Fear, Survival, Appetite, Love. 
- [H] BLUE: Logic, Trust, Intelligence. (Hence used by Banks and Tech giants).
- [H] GREEN: Equilibrium, Reassurance, Environmental.
- [H] YELLOW: Confidence, Fragility, Creativity.

[H] CHAPTER 6: TINTS, SHADES AND TONES
- [BLUE] TINT: Color + White. (Higher energy, youthful).
- [BLUE] SHADE: Color + Black. (Serious, mysterious, authoritative).
- [BLUE] TONE: Color + Grey. (Muted, sophisticated, corporate).

[H] CHAPTER 7: ACCESSIBILITY AND THE 60-30-10 RULE
[GREEN] RULE: 60% Dominant (Neutral), 30% Secondary, 10% Accent (Your CTA color).
[RED] ACCESSIBILITY: 8% of men are colorblind. Always ensure your "Submit" buttons have high contrast against the background so they are visible even in greyscale.

[H] CONCLUSION: THE BRAND VIBE
Color is the face of your brand. Choose wisely, or you will communicate the wrong emotion to your customers.
                        `
                    }
                },
                {
                    id: 102,
                    title: "Typography Mastery (Full Book)",
                    type: "video",
                    src: "https://www.youtube.com/embed/UwHopwh0L_k",
                    resources: ["Book_2_Typography_Bible.pdf"],
                    pdf_content: {
                        "Book_2_Typography_Bible.pdf": `
[H] THE TYPOGRAPHY MASTERCLASS BIBLE
[H] ================================

[H] CHAPTER 1: WORDS ARE PICTURES
Typography is the visual component of the written word. It is 90% of web design. If your type is bad, your website is bad.

[H] CHAPTER 2: THE ANATOMY OF A TYPEFACE
Understanding the grid:
- [BLUE] BASELINE: The ground.
- [BLUE] X-HEIGHT: The height of lowercase.
- [BLUE] CAP HEIGHT: Height of uppercase.
- [BLUE] SERIFS: The "feet" that help letters flow together on paper.

[H] CHAPTER 3: CLASSIFICATIONS
1. [H] SERIFS (Old Style & Transitional):
Used for long-form text (Books, News).
- [GREEN] Examples: Playfair Display, Times, Garamond.
2. [H] SANS-SERIFS (Geometric & Humanist):
Modern, efficient, legible on pixel screens.
- [GREEN] Examples: Inter, Roboto, Montserrat.
3. [H] SLAB SERIFS:
Bold, blocky, industrial.
- [GREEN] Examples: Rockwell, Roboto Slab.
4. [H] DISPLAY:
Fun, decorative, used ONLY for headlines. Never for body text.

[H] CHAPTER 4: SPACING SCIENCE
- [BLUE] LEADING: Line height. Too little = clustered. Too much = disconnected.
- [BLUE] TRACKING: Character spacing.
- [BLUE] KERNING: Space between two specific letters (like 'A' and 'V').
[RED] PRO TIP: Tighten tracking for headlines to make them look "heavier" and authoritative.

[H] CHAPTER 5: VISUAL HIERARCHY
[GREEN] Hierarchy is a map for the eye.
1. Large, Bold Headlines (Size 1).
2. Medium, Grey Subheadings (Size 2).
3. Clear, 16px-18px Body text (Size 3).

[H] CHAPTER 6: FONT PAIRING PROTOCOLS
Contrast is the goal.
[BLUE] RULE: Pair a "Strong Geometric Sans" with a "Classic Serif." 
[RED] WARNING: Never use three different font families. Use one "Font Family" (with weights like Light, Regular, Bold) to maintain professional consistency.

[H] CHAPTER 7: WEB VS PRINT TYPE
On high-resolution Retina screens, Thin and Light fonts look elegant. On low-resolution screens, they disappear. Always choose fonts with a large X-Height for mobile app design.

[H] CONCLUSION
Type carries voice. A thin font whispers; a bold slab font screams. Use your voice wisely.
                        `
                    }
                }
            ]
        },
        {
            title: "Module 2: Adobe Photoshop Deep-Dive",
            lessons: [
                {
                    id: 201,
                    title: "Photoshop Interface & Mastering Layers",
                    type: "video",
                    src: "https://www.youtube.com/embed/aNpO6G72O3w",
                    resources: ["Book_3_Photoshop_Bible.pdf"],
                    pdf_content: {
                        "Book_3_Photoshop_Bible.pdf": `
[H] THE PHOTOSHOP 2024 MASTER BIBLE
[H] ===============================

[H] CHAPTER 1: WHY PHOTOSHOP?
Photoshop is the world's most powerful image editor. It is a "Raster" tool, meaning it works with a finite number of pixels.

[H] CHAPTER 2: RESOLUTION AND DPI
Understanding the quality.
- [BLUE] 72 DPI: Screen resolution.
- [BLUE] 300 DPI: Print resolution.
[RED] RULE: Always start at 300 DPI. You can always go down to 72, but you can never "fake" pixels going from 72 up to 300.

[H] CHAPTER 3: NON-DESTRUCTIVE WORKFLOW
This is what separates pros from amateurs.
1. [H] LAYER MASKS: Use them to hide pixels, not delete them.
2. [H] ADJUSTMENT LAYERS: Add Curves, Levels, and Hue/Saturation as layers so you can change them later.
3. [H] SMART OBJECTS: Convert your images to Smart Objects so they don't pixelate when you scale them down and back up.

[H] CHAPTER 4: MASTERING SELECTION
- [BLUE] THE LASSO: For rough sketches.
- [BLUE] THE OBJECT SELECTION: AI-powered magic.
- [BLUE] THE PEN TOOL: The king of accuracy. Learn the paths, handles, and anchor points.

[H] CHAPTER 5: LAYER BLENDING MODES
- [BLUE] MULTIPLY: Removes whites (Perfect for adding shadows).
- [BLUE] SCREEN: Removes blacks (Perfect for fire and lighting effects).
- [BLUE] OVERLAY: Blends colors into the background.

[H] CHAPTER 6: RAW COLOR GRADING
Using the [BLUE] Camera Raw Filter. This is where the world's best photographers edit. Master the "Color Mixer" and "Calibration" tabs to create a unique color style.

[H] CHAPTER 7: EXPORTING ASSETS
- .PSD: The working file.
- .PNG: Transparent background.
- .WEBP: Ultra-small size for fast websites.
- .JPG: Standard for photography.

[H] FINAL VERDICT: Workflow is more important than tools. Keep your layers named and organized!
                        `
                    }
                },
                {
                    id: 202,
                    title: "Advanced Masking & Compositing",
                    type: "video",
                    src: "https://www.youtube.com/embed/aNpO6G72O3w",
                    resources: ["Book_4_Masking_Expert.pdf"],
                    pdf_content: {
                        "Book_4_Masking_Expert.pdf": `
[H] THE ADVANCED MASKING CASE STUDIES
[H] ==================================

[H] CHAPTER 1: THE CORE LOGIC
White Reveals. Black Conceals. 

[H] CHAPTER 2: SELECT AND MASK WORKSPACE
The modern way to select hair.
1. Use [BLUE] Select Subject.
2. Select the [BLUE] Refine Edge Brush.
3. Paint around the hair edges.
4. Output to [GREEN] Layer Mask.

[H] CHAPTER 3: CHANNEL MASKING
How to select impossible things like smoke, clouds, and glass.
- Use the Channels panel to find the highest contrast channel.
- Duplicate and use [BLUE] Levels (Ctrl+L) to make the object absolute white and background absolute black.

[H] CHAPTER 4: LUMINOSITY MASKS
For cinematic lighting. Targeting the "Brightest" 20% of an image to add a glow effect without affecting the shadows.

[H] CHAPTER 5: BLEND IF (THE PRO SECRET)
Hidden in Layer Styles.
- Slide the "This Layer" slider to remove darks or lights from the active layer.
- [RED] Hold ALT and split the slider for a smooth, feathered transition.

[H] CHAPTER 6: MATCHING COLORS IN COMPOSITES
Image A never matches Image B. 
1. Use the [BLUE] Match Color tool (Image > Adjustments).
2. Or use a [BLUE] Curves Adjustment Layer and match the Black and White points of both images.

[H] CHAPTER 7: PERSPECTIVE AND HORIZON
If your foreground image has a different horizon line than your background, the brain will instantly know it's fake. Always match the "Vanish points".

[H] CONCLUSION: THE ART OF THE MASK
A perfect composite is one where you cannot see the edge of the mask. Soften your edges and match your grain!
                        `
                    }
                }
            ]
        },
        {
            title: "Module 3: Illustrator Mastery (Vector)",
            lessons: [
                {
                    id: 301,
                    title: "The Logic of Vectors (Full Book)",
                    type: "video",
                    src: "https://www.youtube.com/embed/UwHopwh0L_k",
                    resources: ["Book_5_Illustrator_Manual.pdf"],
                    pdf_content: {
                        "Book_5_Illustrator_Manual.pdf": `
[H] THE ADOBE ILLUSTRATOR COMPLETE MANUAL
[H] ======================================

[H] CHAPTER 1: THE MATH OF DESIGN
Vectors are mathematical paths. Points and Lines.
[GREEN] THE SUPERPOWER: You can scale a vector logo from a business card to a sky-scraping billboard without losing any quality.

[H] CHAPTER 2: THE TOOLSET
- [BLUE] P: Pen Tool (The backbone of Illustrator).
- [BLUE] A: Direct Selection (To move individual points).
- [BLUE] V: Selection Tool (To move groups).
- [BLUE] M: Rectangle Tool.

[H] CHAPTER 3: THE SHAPE BUILDER (SHIFT+M)
Professionals don't draw; they build.
1. Position two shapes together.
2. Select both.
3. Use Shift+M to drag and merge them OR hold Alt to subtract.
[RED] LOGO SECRET: 99% of professional logos are built using simple circles and the Shape Builder.

[H] CHAPTER 4: PATHFINDER VS SHAPE BUILDER
Pathfinder is for permanent operations. Shape Builder is for fluid, live creation. Use Pathfinder for final file cleanup.

[H] CHAPTER 5: TYPOGRAPHY ON PATHS
- Type along a circle (Great for badges).
- Type inside a shape (Great for complex layouts).
- [BLUE] Create Outlines (Ctrl+Shift+O): Turning text into editable shapes.

[H] CHAPTER 6: THE GRADIENT MESH
Photorealism in a vector world. Create mesh points to add realistic lighting, shadows, and reflections to flat shapes.

[H] CHAPTER 7: PACKAGING AND HANDOFF
- [H] AI: The project source.
- [H] EPS: For high-end printing.
- [H] SVG: For modern website icons.
- [H] PDF: The universal preview.

[H] CONCLUSION: VECTOR IS FOREVER
Mastering paths makes you a true designer. Photoshop is for pictures; Illustrator is for BRANDING.
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
                    title: "Product Design & Prototyping (Full Book)",
                    type: "video",
                    src: "https://www.youtube.com/embed/bI6q16ffdgQ",
                    resources: ["Book_6_Figma_Design_Bible.pdf"],
                    pdf_content: {
                        "Book_6_Figma_Design_Bible.pdf": `
[H] THE FIGMA PRODUCT DESIGN BIBLE
[H] ==============================

[H] CHAPTER 1: THE UI DESIGN REVOLUTION
Figma is a collaborative tool. It is where logic meets layout. Unlike Photoshop, it's built specifically for building apps and websites.

[H] CHAPTER 2: AUTO-LAYOUT (THE MASTER SKILL)
[BLUE] SHIFT + A: This simulates how code actually works. 
If you add text to a button, the button grows automatically. Master Padding, Gap, and Alignment.
- [GREEN] Fixed vs Hue vs Fill: The three modes of resizing.

[H] CHAPTER 3: COMPONENTS AND VARIANTS
[BLUE] ATOMIC DESIGN:
1. ATOMS: Colors and Icons.
2. MOLECULES: Buttons and Input fields.
3. ORGANISMS: Headers and Sidebars.
[RED] PRO TIP: Use Variants to manage multiple button states (Hover, Click, Error) in one clean container.

[H] CHAPTER 4: CONSTRAINTS AND GRIDS
How to make an app look good on iPhone and Desktop.
- [BLUE] THE 8PT GRID: The industry standard for spacing. Every gap should be a multiple of 8 (8, 16, 24, 32).

[H] CHAPTER 5: INTERACTIVE PROTOTYPING
- [BLUE] SMART ANIMATE: Intelligently moves layers between frames.
- [BLUE] FLOWS: Simulating the user journey through the app.

[H] CHAPTER 6: DESIGN SYSTEMS
Building a library of styles that a whole company can use.
- [BLUE] LOCAL VARIABLES (Figma 2024): The new way to handle font sizes and colors as "Tokens" that update everywhere instantly.

[H] CHAPTER 7: THE DEV-HANDOFF
Figma's [BLUE] Dev Mode allows programmers to copy your CSS properties directly. 

[H] CONCLUSION: USER-CENTRIC DESIGN
Figma is only the tool. The real work is understanding the USER. Research, Wireframe, Prototype, then Design.
                        `
                    }
                }
            ]
        }
    ]
};
