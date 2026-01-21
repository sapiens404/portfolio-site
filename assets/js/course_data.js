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
                    resources: ["Color_Wheel.pdf", "Psychology_of_Color.pdf"]
                },
                {
                    id: 102,
                    title: "Typography Mastery",
                    type: "video",
                    src: "https://www.youtube.com/embed/sJdZ902dCqM",
                    resources: ["Font_Pairing_CheatSheet.pdf"]
                },
                {
                    id: 103,
                    title: "Layout & Composition Rules",
                    type: "video",
                    src: "https://www.youtube.com/embed/a5s5qGg01nE",
                    resources: []
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
                    resources: ["Shortcut_Map.pdf"]
                },
                {
                    id: 202,
                    title: "Advanced Masking Techniques",
                    type: "video",
                    src: "https://www.youtube.com/embed/v_32rCq63Ww",
                    resources: ["Practice_Images.zip"]
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
                    resources: []
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
