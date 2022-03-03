const beatMap = {
    bpm: 170,
    layout: [
        { count: 1, step: 1, zone: "bot"},
        { count: 1, step: 2, zone: "bot"},
        { count: 1, step: 3, zone: "bot"},
        { count: 1, step: 4, zone: "bot"},
        { count: 1, step: 5, zone: "top"},
        { count: 1, step: 6, zone: "top"},
        { count: 1, step: 7, zone: "top"},
        { count: 1, step: 8, zone: "top"},

        { count: 2, step: 1, zone: "bot"},
        { count: 2, step: 2, zone: "bot"},
        { count: 2, step: 3, zone: "bot"},
        { count: 2, step: 4, zone: "bot"},
        { count: 2, step: 5, zone: "top"},
        { count: 2, step: 6, zone: "top"},
        { count: 2, step: 7, zone: "top"},
        { count: 2, step: 8, zone: "top"},

        { count: 3, step: 0.5, zone: "bot"},
        { count: 3, step: 1, zone: "bot"},
        { count: 3, step: 2, zone: "bot"},
        { count: 3, step: 3, zone: "bot"},
        { count: 3, step: 4, zone: "bot"},
        { count: 3, step: 5, zone: "top"},
        { count: 3, step: 6, zone: "top"},
        { count: 3, step: 7, zone: "top"},
        { count: 3, step: 8, zone: "top"},

        { count: 4, step: 1, zone: "bot"},
        { count: 4, step: 2, zone: "bot"},
        { count: 4, step: 3, zone: "bot"},
        { count: 4, step: 4, zone: "bot"},
        { count: 4, step: 5, zone: "top"},
        { count: 4, step: 6, zone: "top"},
        { count: 4, step: 6.5, zone: "bot", slide: 0.5},
        { count: 4, step: 7, zone: "top"},
        { count: 4, step: 7.33, zone: "top"},
        { count: 4, step: 7.66, zone: "top"},
        { count: 4, step: 8, zone: "top"},

        { count: 5, step: 0.5, zone: "top", slide: 0.5},
        { count: 5, step: 1, zone: "bot"},
        { count: 5, step: 2, zone: "bot"},
        { count: 5, step: 3, zone: "bot"},
        { count: 5, step: 4, zone: "bot"},
        { count: 5, step: 5, zone: "top"},
        { count: 5, step: 6, zone: "top"},
        { count: 5, step: 7, zone: "top"},
        { count: 5, step: 8, zone: "top"},

        { count: 6, step: 1, zone: "bot"},
        { count: 6, step: 2, zone: "bot"},
        { count: 6, step: 3, zone: "bot"},
        { count: 6, step: 4, zone: "bot"},
        { count: 6, step: 5, zone: "top"},
        { count: 6, step: 6, zone: "top"},
        { count: 6, step: 7, zone: "top"},
        { count: 6, step: 8, zone: "top"},

        { count: 7, step: 0.5, zone: "bot"},
        { count: 7, step: 1, zone: "top", slide: 4},
        { count: 7, step: 1, zone: "bot"},
        { count: 7, step: 1.5, zone: "bot"},
        { count: 7, step: 2, zone: "bot"},
        { count: 7, step: 2.5, zone: "bot"},
        { count: 7, step: 3, zone: "bot"},
        { count: 7, step: 3.5, zone: "bot"},
        { count: 7, step: 4, zone: "bot"},
        { count: 7, step: 4.5, zone: "bot"},
        { count: 7, step: 5, zone: "bot", slide: 2},
        { count: 7, step: 5.5, zone: "top"},
        { count: 7, step: 6, zone: "top"},
        { count: 7, step: 6.5, zone: "top"},
        { count: 7, step: 7, zone: "top", slide: 2},
        { count: 7, step: 7.5, zone: "bot"},
        { count: 7, step: 8, zone: "bot"},

        { count: 8, step: 0.5, zone: "bot"},
        { count: 8, step: 1, zone: "bot", slide: 1},
        { count: 8, step: 1.5, zone: "top"},
        { count: 8, step: 2, zone: "top", slide: 1},
        { count: 8, step: 2.5, zone: "bot"},
        { count: 8, step: 3, zone: "bot", slide: 1},
        { count: 8, step: 3.5, zone: "top"},
        { count: 8, step: 4, zone: "top", slide: 1},
        { count: 8, step: 4.5, zone: "bot"},

        // irregular count
        { count: 8, step: 5, zone: "bot"},
        { count: 8, step: 5.75, zone: "top"},
        { count: 8, step: 6.5, zone: "bot"},
        { count: 8, step: 7.25, zone: "top"},
        { count: 8, step: 8, zone: "bot"},
        { count: 9, step: 0.5, zone: "top"},

        { count: 9, step: 1, zone: "bot"},
        { count: 9, step: 2, zone: "top"},
        { count: 9, step: 3, zone: "bot"},
        { count: 9, step: 4, zone: "top"},
        { count: 9, step: 6, zone: "top"},
        { count: 9, step: 8, zone: "top"},

        { count: 10, step: 1, zone: "bot"},
        { count: 10, step: 2, zone: "top"},
        { count: 10, step: 3, zone: "bot"},
        { count: 10, step: 4, zone: "top"},
        { count: 10, step: 6, zone: "top"},
        { count: 10, step: 8, zone: "top"},

        { count: 11, step: 0.5, zone: "bot"},
        { count: 11, step: 1, zone: "bot"},
        { count: 11, step: 2, zone: "top"},
        { count: 11, step: 4, zone: "top"},
        { count: 11, step: 6, zone: "top"},
        { count: 11, step: 7, zone: "bot"},
        { count: 11, step: 8, zone: "top"},

        { count: 12, step: 1, zone: "bot"},
        { count: 12, step: 2, zone: "top"},
        { count: 12, step: 4, zone: "top"},
        { count: 12, step: 5, zone: "bot", slide: 1},
        { count: 12, step: 6, zone: "top"},
        { count: 12, step: 6.33, zone: "top"},
        { count: 12, step: 6.66, zone: "top"},
        { count: 12, step: 7, zone: "top"},
        { count: 12, step: 7, zone: "bot"},
        { count: 12, step: 8, zone: "top"},
        { count: 12, step: 8, zone: "bot"},



        { count: 13, step: 1, zone: "bot"},
        { count: 13, step: 2, zone: "top"},
        { count: 13, step: 4.5, zone: "bot"},
        { count: 13, step: 5, zone: "bot"},
        { count: 13, step: 6, zone: "top"},

        { count: 14, step: 1, zone: "bot"},
        { count: 14, step: 2.5, zone: "bot"},
        { count: 14, step: 3, zone: "bot"},
        { count: 14, step: 7, zone: "bot"},
        { count: 14, step: 8, zone: "top"},

        { count: 15, step: 0.5, zone: "bot"},
        { count: 15, step: 1, zone: "bot"},
        { count: 15, step: 8, zone: "top"},

        { count: 16, step: 1, zone: "bot"},
        { count: 16, step: 2, zone: "top"},
        { count: 16, step: 7, zone: "bot"},
        { count: 16, step: 7.5, zone: "bot"},
        { count: 16, step: 8, zone: "top"},
        { count: 16, step: 8.33, zone: "top"},
        { count: 16, step: 8.66, zone: "top"},

        { count: 17, step: 1, zone: "bot", slide: 2},
        { count: 17, step: 3, zone: "top"},
        { count: 17, step: 3.33, zone: "top"},
        { count: 17, step: 3.66, zone: "top"},
        { count: 17, step: 4, zone: "top"},
        { count: 17, step: 4.5, zone: "top"},
        { count: 17, step: 5, zone: "bot"},
        { count: 17, step: 5.66, zone: "bot"},
        { count: 17, step: 6.33, zone: "bot"},
        { count: 17, step: 7, zone: "top"},
        { count: 17, step: 7.25, zone: "top"},
        { count: 17, step: 7.5, zone: "top"},
        { count: 17, step: 7.75, zone: "top"},
        { count: 17, step: 8, zone: "top", slide: 1},

        


    ]
};

// example for adding slider
// { count: 1, step: 1, zone: "bot", slide: 1},
// 1111212121212121212121212121212121212
// 37 eight counts
// 0:09-1:53, 104 seconds
// 2.8108 seconds per eight count
// travel 3000 in 2.8108, is 1067.31 px/second
// 60fps, 17.788 pixels per frame movement

export default beatMap;