const brainPower = {
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

        { count: 18, step: 1, zone: "bot", slide: 2},
        { count: 18, step: 3, zone: "top"},
        { count: 18, step: 3.5, zone: "top"},
        { count: 18, step: 4, zone: "top"},
        { count: 18, step: 5, zone: "bot"},
        { count: 18, step: 6, zone: "bot"},
        { count: 18, step: 6.5, zone: "bot"},
        { count: 18, step: 7, zone: "top"},
        { count: 18, step: 7.25, zone: "top"},
        { count: 18, step: 7.5, zone: "top"},
        { count: 18, step: 7.75, zone: "top"},
        { count: 18, step: 8, zone: "bot"},
        { count: 18, step: 8.25, zone: "bot"},
        { count: 18, step: 8.5, zone: "bot"},
        { count: 18, step: 8.75, zone: "bot"},

        { count: 19, step: 1, zone: "bot", slide: 2},
        { count: 19, step: 3, zone: "top"},
        { count: 19, step: 3.5, zone: "top"},
        { count: 19, step: 4, zone: "top"},
        { count: 19, step: 5, zone: "bot", slide: 2},
        { count: 19, step: 7, zone: "top"},
        { count: 19, step: 7.33, zone: "top"},
        { count: 19, step: 7.66, zone: "top"},
        { count: 19, step: 8, zone: "top", slide: 1},

        { count: 20, step: 1, zone: "bot"},
        { count: 20, step: 2, zone: "bot"},
        { count: 20, step: 2.5, zone: "bot"},
        { count: 20, step: 3, zone: "top", slide: 1},
        { count: 20, step: 4, zone: "bot"},
        { count: 20, step: 4.5, zone: "bot"},
        { count: 20, step: 4.75, zone: "bot"},
        { count: 20, step: 5, zone: "bot", slide: 1},
        { count: 20, step: 6, zone: "top"},
        { count: 20, step: 6.33, zone: "top"},
        { count: 20, step: 6.66, zone: "top"},
        { count: 20, step: 7, zone: "bot"},
        { count: 20, step: 7.25, zone: "bot"},
        { count: 20, step: 7.5, zone: "bot"},
        { count: 20, step: 7.75, zone: "bot"},
        { count: 20, step: 8, zone: "top", slide: 1},

        // count 21 - 24 sound off, might be on half beats instead
        { count: 21, step: 1, zone: "bot"},
        { count: 21, step: 2, zone: "bot"},
        { count: 21, step: 3, zone: "bot"},
        { count: 21, step: 4, zone: "bot"},
        { count: 21, step: 5, zone: "top"},
        { count: 21, step: 6, zone: "top"},
        { count: 21, step: 7, zone: "top"},
        { count: 21, step: 8, zone: "top"},

        { count: 22, step: 1, zone: "bot"},
        { count: 22, step: 2, zone: "bot"},
        { count: 22, step: 3, zone: "bot"},
        { count: 22, step: 4, zone: "bot"},
        { count: 22, step: 5, zone: "top"},
        { count: 22, step: 6, zone: "top"},
        { count: 22, step: 7, zone: "top"},
        { count: 22, step: 8, zone: "top"},

        { count: 23, step: 0.5, zone: "bot"},
        { count: 23, step: 1, zone: "bot"},
        { count: 23, step: 2, zone: "bot"},
        { count: 23, step: 3, zone: "bot"},
        { count: 23, step: 4, zone: "bot"},
        { count: 23, step: 5, zone: "top"},
        { count: 23, step: 6, zone: "top"},
        { count: 23, step: 7, zone: "top"},
        { count: 23, step: 8, zone: "top"},

        { count: 24, step: 1, zone: "bot"},
        { count: 24, step: 2, zone: "bot"},
        { count: 24, step: 3, zone: "bot"},
        { count: 24, step: 4, zone: "bot"},
        { count: 24, step: 5, zone: "top"},
        { count: 24, step: 6, zone: "top"},
        { count: 24, step: 7, zone: "top"},
        { count: 24, step: 8, zone: "top"},

        { count: 25, step: 1, zone: "bot"},
        { count: 25, step: 1.4, zone: "bot"},
        { count: 25, step: 1.8, zone: "bot"},
        { count: 25, step: 2.2, zone: "top"},
        { count: 25, step: 2.6, zone: "top"},

        { count: 25, step: 3, zone: "bot"},
        { count: 25, step: 3.25, zone: "bot"},
        { count: 25, step: 3.5, zone: "bot"},
        { count: 25, step: 3.75, zone: "bot"},
        { count: 25, step: 4, zone: "top"},
        { count: 25, step: 4.25, zone: "top"},
        { count: 25, step: 4.5, zone: "top"},
        { count: 25, step: 4.75, zone: "top"},

        // count might be wrong here
        { count: 25, step: 5, zone: "bot"},
        { count: 25, step: 5.75, zone: "top"},
        { count: 25, step: 6.5, zone: "bot"},
        { count: 25, step: 7.25, zone: "top"},

        { count: 25, step: 8, zone: "bot"},
        { count: 25, step: 8.5, zone: "top"},

        { count: 26, step: 1, zone: "bot", slide: 2},
        { count: 26, step: 3, zone: "top"},
        { count: 26, step: 3.2, zone: "top"},
        { count: 26, step: 3.4, zone: "top"},
        { count: 26, step: 3.6, zone: "top"},
        { count: 26, step: 3.8, zone: "top"},
        { count: 26, step: 4, zone: "top"},
        { count: 26, step: 4.2, zone: "top"},
        { count: 26, step: 4.4, zone: "top"},
        { count: 26, step: 4.6, zone: "top"},
        { count: 26, step: 4.8, zone: "top"},
        { count: 26, step: 5, zone: "bot"},
        { count: 26, step: 5.25, zone: "bot"},
        { count: 26, step: 5.5, zone: "bot"},
        { count: 26, step: 5.75, zone: "bot"},
        { count: 26, step: 6, zone: "top"},
        { count: 26, step: 6.5, zone: "top"},
        { count: 26, step: 7, zone: "bot"},
        { count: 26, step: 7.5, zone: "bot"},
        { count: 26, step: 8, zone: "top"},
        { count: 26, step: 8.5, zone: "top"},

        { count: 27, step: 1, zone: "top", slide: 1},
        { count: 27, step: 2, zone: "bot"},
        { count: 27, step: 2.25, zone: "bot"},
        { count: 27, step: 2.5, zone: "bot"},
        { count: 27, step: 2.75, zone: "bot"},
        { count: 27, step: 3, zone: "bot"},
        { count: 27, step: 3.25, zone: "bot"},
        { count: 27, step: 3.5, zone: "bot"},
        { count: 27, step: 3.75, zone: "bot"},
        { count: 27, step: 4, zone: "bot"},
        { count: 27, step: 4.25, zone: "bot"},
        { count: 27, step: 4.5, zone: "bot"},
        { count: 27, step: 4.75, zone: "bot"},
        { count: 27, step: 5, zone: "top"},
        { count: 27, step: 5.33, zone: "top"},
        { count: 27, step: 5.66, zone: "top"},
        { count: 27, step: 6, zone: "bot"},
        { count: 27, step: 6.5, zone: "bot"},
        { count: 27, step: 7, zone: "top"},
        { count: 27, step: 7.5, zone: "top"},
        { count: 27, step: 8, zone: "bot"},
        { count: 27, step: 8.5, zone: "bot"},

        // likely wrong tempo here
        { count: 28, step: 1, zone: "bot", slide: 2.5},
        { count: 28, step: 2.5, zone: "top"},
        { count: 28, step: 2.75, zone: "top"},
        { count: 28, step: 3, zone: "top"},
        { count: 28, step: 3.5, zone: "top"},
        { count: 28, step: 3.75, zone: "top"},
        { count: 28, step: 4.25, zone: "top"},
        { count: 28, step: 4.5, zone: "top"},
        { count: 28, step: 4.75, zone: "top"},

        { count: 28, step: 5, zone: "bot"},
        { count: 28, step: 5.25, zone: "bot"},
        { count: 28, step: 5.5, zone: "bot"},
        { count: 28, step: 5.75, zone: "bot"},
        { count: 28, step: 6, zone: "top"},
        { count: 28, step: 6.5, zone: "top"},
        { count: 28, step: 7, zone: "bot"},
        { count: 28, step: 7.5, zone: "bot"},
        { count: 28, step: 8, zone: "top"},
        { count: 28, step: 8.5, zone: "top"},

        // most likely wrong tempo here
        { count: 29, step: 1, zone: "top", slide: 2.5},
        { count: 29, step: 2, zone: "bot"},
        { count: 29, step: 2.25, zone: "bot"},
        { count: 29, step: 2.5, zone: "bot"},
        { count: 29, step: 3, zone: "bot"},
        { count: 29, step: 3.25, zone: "bot"},
        { count: 29, step: 3.75, zone: "bot"},
        { count: 29, step: 4, zone: "bot"},
        { count: 29, step: 4.5, zone: "bot"},
        { count: 29, step: 4.75, zone: "bot"},
        { count: 29, step: 5, zone: "top"},
        { count: 29, step: 5.25, zone: "top"},
        { count: 29, step: 5.5, zone: "top"},
        { count: 29, step: 5.75, zone: "top"},
        { count: 29, step: 6, zone: "bot"},
        { count: 29, step: 6.5, zone: "bot"},
        { count: 29, step: 7, zone: "top"},
        { count: 29, step: 7.25, zone: "top"},
        { count: 29, step: 7.5, zone: "top"},
        { count: 29, step: 8, zone: "bot"},
        { count: 29, step: 8.25, zone: "bot"},
        { count: 29, step: 8.5, zone: "bot"},
        { count: 29, step: 8.75, zone: "bot"},

        { count: 30, step: 1, zone: "bot", slide: 1.5},
        { count: 30, step: 2, zone: "top"},
        { count: 30, step: 2.5, zone: "top"},
        { count: 30, step: 2.75, zone: "top"},
        { count: 30, step: 3, zone: "top"},
        { count: 30, step: 3.25, zone: "top"},
        { count: 30, step: 3.5, zone: "top"},
        { count: 30, step: 3.75, zone: "top"},
        { count: 30, step: 4, zone: "top"},
        { count: 30, step: 4.25, zone: "top"},
        { count: 30, step: 4.5, zone: "top"},
        { count: 30, step: 4.75, zone: "top"},
        { count: 30, step: 5, zone: "bot"},
        { count: 30, step: 5.25, zone: "bot"},
        { count: 30, step: 5.5, zone: "bot"},
        { count: 30, step: 5.75, zone: "bot"},
        { count: 30, step: 6, zone: "top"},
        { count: 30, step: 6.5, zone: "top"},
        { count: 30, step: 7, zone: "bot"},
        { count: 30, step: 7.5, zone: "bot"},
        { count: 30, step: 8, zone: "top"},
        { count: 30, step: 8.5, zone: "top"},

        { count: 31, step: 1, zone: "top", slide: 1},
        { count: 31, step: 2, zone: "bot"},
        { count: 31, step: 2.25, zone: "bot"},
        { count: 31, step: 2.5, zone: "bot"},
        { count: 31, step: 2.75, zone: "bot"},
        { count: 31, step: 3, zone: "bot"},
        { count: 31, step: 3.25, zone: "bot"},
        { count: 31, step: 3.5, zone: "bot"},
        { count: 31, step: 3.75, zone: "bot"},
        { count: 31, step: 4, zone: "bot"},
        { count: 31, step: 4.25, zone: "bot"},
        { count: 31, step: 4.5, zone: "bot"},
        { count: 31, step: 4.75, zone: "bot"},
        { count: 31, step: 5, zone: "top"},
        { count: 31, step: 5.25, zone: "top"},
        { count: 31, step: 5.5, zone: "top"},
        { count: 31, step: 6, zone: "bot"},
        { count: 31, step: 6.5, zone: "bot"},
        { count: 31, step: 7, zone: "top"},
        { count: 31, step: 7.5, zone: "top"},
        { count: 31, step: 8, zone: "bot"},
        { count: 31, step: 8.5, zone: "bot"},

        { count: 32, step: 1, zone: "bot", slide: 1.5},
        { count: 32, step: 2, zone: "top"},
        { count: 32, step: 2.5, zone: "top"},
        { count: 32, step: 2.75, zone: "top"},
        { count: 32, step: 3, zone: "top"},
        { count: 32, step: 3.5, zone: "top"},
        { count: 32, step: 3.75, zone: "top"},
        { count: 32, step: 4.25, zone: "top"},
        { count: 32, step: 4.5, zone: "top"},
        { count: 32, step: 4.75, zone: "top"},
        { count: 32, step: 5, zone: "bot"},
        { count: 32, step: 5.25, zone: "bot"},
        { count: 32, step: 5.5, zone: "bot"},
        { count: 32, step: 5.75, zone: "bot"},
        { count: 32, step: 6, zone: "top"},
        { count: 32, step: 6.5, zone: "top"},
        { count: 32, step: 7, zone: "bot"},
        { count: 32, step: 7.5, zone: "bot"},
        { count: 32, step: 8, zone: "top"},
        { count: 32, step: 8.5, zone: "top"},



        { count: 33, step: 1, zone: "top", slide: 1},
        { count: 33, step: 2, zone: "bot"},
        { count: 33, step: 2.25, zone: "bot"},
        { count: 33, step: 2.5, zone: "bot"},
        { count: 33, step: 3, zone: "bot"},
        { count: 33, step: 3.25, zone: "bot"},
        { count: 33, step: 3.75, zone: "bot"},
        { count: 33, step: 4, zone: "bot"},
        { count: 33, step: 4.5, zone: "bot"},
        { count: 33, step: 4.75, zone: "bot"},
        { count: 33, step: 5, zone: "top"},
        { count: 33, step: 5.25, zone: "top"},
        { count: 33, step: 5.5, zone: "top"},
        { count: 33, step: 5.75, zone: "top"},
        { count: 33, step: 6, zone: "bot"},
        { count: 33, step: 6.5, zone: "bot"},
        { count: 33, step: 7, zone: "top"},
        { count: 33, step: 7.25, zone: "top"},
        { count: 33, step: 7.5, zone: "top"},
        { count: 33, step: 8, zone: "bot"},
        { count: 33, step: 8.25, zone: "bot"},
        { count: 33, step: 8.33, zone: "bot"},
        { count: 33, step: 8.75, zone: "bot"},

        { count: 34, step: 1, zone: "top", slide: 1.5},
        { count: 34, step: 2, zone: "bot"},
        { count: 34, step: 2.5, zone: "bot"},
        { count: 34, step: 2.75, zone: "bot"},
        { count: 34, step: 3, zone: "top"},
        { count: 34, step: 3.25, zone: "top"},
        { count: 34, step: 3.5, zone: "top"},
        { count: 34, step: 3.75, zone: "top"},
        { count: 34, step: 4, zone: "bot"},
        { count: 34, step: 4.25, zone: "bot"},
        { count: 34, step: 4.5, zone: "bot"},
        { count: 34, step: 4.75, zone: "bot"},
        { count: 34, step: 5, zone: "top"},
        { count: 34, step: 5.25, zone: "top"},
        { count: 34, step: 5.5, zone: "top"},
        { count: 34, step: 5.75, zone: "top"},
        { count: 34, step: 6, zone: "bot"},
        { count: 34, step: 6.5, zone: "bot"},
        { count: 34, step: 7, zone: "top"},
        { count: 34, step: 7.5, zone: "bot"},
        { count: 34, step: 8, zone: "top"},
        { count: 34, step: 8.5, zone: "bot"},

        { count: 35, step: 1, zone: "top"},
        { count: 35, step: 1, zone: "bot", slide: 1},
        { count: 35, step: 2, zone: "top"},
        { count: 35, step: 2.25, zone: "top"},
        { count: 35, step: 2.5, zone: "top"},
        { count: 35, step: 2.75, zone: "top"},
        { count: 35, step: 3, zone: "bot"},
        { count: 35, step: 3.25, zone: "bot"},
        { count: 35, step: 3.5, zone: "bot"},
        { count: 35, step: 3.75, zone: "bot"},
        { count: 35, step: 4, zone: "top"},
        { count: 35, step: 4.25, zone: "top"},
        { count: 35, step: 4.5, zone: "top"},
        { count: 35, step: 4.75, zone: "top"},
        { count: 35, step: 5, zone: "bot"},
        { count: 35, step: 5.25, zone: "bot"},
        { count: 35, step: 5.5, zone: "bot"},
        { count: 35, step: 6, zone: "top"},
        { count: 35, step: 6.5, zone: "top"},
        { count: 35, step: 7, zone: "bot"},
        { count: 35, step: 7.5, zone: "top"},
        { count: 35, step: 8, zone: "bot"},
        { count: 35, step: 8.5, zone: "top"},

        { count: 36, step: 1, zone: "top", slide: 1.5},
        { count: 36, step: 1, zone: "bot"},
        { count: 36, step: 2, zone: "bot"},
        { count: 36, step: 2.5, zone: "bot"},
        { count: 36, step: 2.75, zone: "bot"},
        { count: 36, step: 3, zone: "top"},
        { count: 36, step: 3.5, zone: "top"},
        { count: 36, step: 3.75, zone: "top"},
        { count: 36, step: 4.25, zone: "bot"},
        { count: 36, step: 4.5, zone: "bot"},
        { count: 36, step: 4.75, zone: "bot"},
        { count: 36, step: 5, zone: "top"},
        { count: 36, step: 5.25, zone: "top"},
        { count: 36, step: 5.5, zone: "top"},
        { count: 36, step: 5.75, zone: "top"},
        { count: 36, step: 6, zone: "bot"},
        { count: 36, step: 6.5, zone: "bot"},
        { count: 36, step: 7, zone: "top"},
        { count: 36, step: 7.5, zone: "bot"},
        { count: 36, step: 8, zone: "top"},
        { count: 36, step: 8.5, zone: "bot"},

        { count: 37, step: 1, zone: "top"},
        { count: 37, step: 1, zone: "bot", slide: 1},
        { count: 37, step: 2, zone: "top"},
        { count: 37, step: 2.25, zone: "top"},
        { count: 37, step: 2.5, zone: "top"},
        { count: 37, step: 2.75, zone: "top"},
        { count: 37, step: 3, zone: "bot"},
        { count: 37, step: 3.25, zone: "bot"},
        { count: 37, step: 3.5, zone: "bot"},
        { count: 37, step: 3.75, zone: "bot"},

        { count: 37, step: 4, zone: "top"},
        { count: 37, step: 4.25, zone: "top"},
        { count: 37, step: 4.5, zone: "top"},
        { count: 37, step: 4.75, zone: "top"},

        { count: 37, step: 5, zone: "bot"},
        { count: 37, step: 5.25, zone: "bot"},
        { count: 37, step: 5.5, zone: "bot"},
        { count: 37, step: 5.75, zone: "bot"},

        { count: 37, step: 6, zone: "top"},
        { count: 37, step: 6.25, zone: "top"},
        { count: 37, step: 6.5, zone: "bot"},
        { count: 37, step: 6.75, zone: "bot"},

        { count: 37, step: 7, zone: "top"},
        { count: 37, step: 7.25, zone: "top"},
        { count: 37, step: 7.5, zone: "bot"},
        { count: 37, step: 7.75, zone: "bot"},

        { count: 37, step: 8, zone: "top"},
        { count: 37, step: 8.25, zone: "top"},
        { count: 37, step: 8.5, zone: "bot"},
        { count: 37, step: 8.75, zone: "bot"},
    ]
};

// example for adding slider
// { count: 1, step: 1, zone: "bot", slide: 1},
// 1111212121212121212121212121212121212
// 37 eight counts
// 0:09-1:53, 104 seconds
// 2.8108 seconds per eight count
// travel 3000 in 2.8108, is 1067.31 px/second
// 60fps, 17.7884615384615 pixels per frame movement
// 120 fps, divide by 2

export default brainPower;