"use strict";

var assert = require("assert");
var lint = require("mocha-eslint");
var tasks = require("../task/10-katas-1-tasks");
it.optional = require("../extensions/it-optional");

describe("10-katas-1-tasks", function () {
  it.optional("createCompassPoints should return the 32 compass points", () => {
    var expected = [
      { abbreviation: "N", azimuth: 0.0 },
      { abbreviation: "NbE", azimuth: 11.25 },
      { abbreviation: "NNE", azimuth: 22.5 },
      { abbreviation: "NEbN", azimuth: 33.75 },

      { abbreviation: "NE", azimuth: 45.0 },
      { abbreviation: "NEbE", azimuth: 56.25 },
      { abbreviation: "ENE", azimuth: 67.5 },
      { abbreviation: "EbN", azimuth: 78.75 },

      { abbreviation: "E", azimuth: 90.0 },
      { abbreviation: "EbS", azimuth: 101.25 },
      { abbreviation: "ESE", azimuth: 112.5 },
      { abbreviation: "SEbE", azimuth: 123.75 },

      { abbreviation: "SE", azimuth: 135.0 },
      { abbreviation: "SEbS", azimuth: 146.25 },
      { abbreviation: "SSE", azimuth: 157.5 },
      { abbreviation: "SbE", azimuth: 168.75 },

      { abbreviation: "S", azimuth: 180.0 },
      { abbreviation: "SbW", azimuth: 191.25 },
      { abbreviation: "SSW", azimuth: 202.5 },
      { abbreviation: "SWbS", azimuth: 213.75 },

      { abbreviation: "SW", azimuth: 225.0 },
      { abbreviation: "SWbW", azimuth: 236.25 },
      { abbreviation: "WSW", azimuth: 247.5 },
      { abbreviation: "WbS", azimuth: 258.75 },

      { abbreviation: "W", azimuth: 270.0 },
      { abbreviation: "WbN", azimuth: 281.25 },
      { abbreviation: "WNW", azimuth: 292.5 },
      { abbreviation: "NWbW", azimuth: 303.75 },

      { abbreviation: "NW", azimuth: 315.0 },
      { abbreviation: "NWbN", azimuth: 326.25 },
      { abbreviation: "NNW", azimuth: 337.5 },
      { abbreviation: "NbW", azimuth: 348.75 },
    ];

    assert.deepEqual(tasks.createCompassPoints(), expected);
  });

  it.optional(
    "expandBraces should expand the braces from pattern string",
    () => {
      [
        {
          str: "~/{Downloads,Pictures}/*.{jpg,gif,png}",
          result: [
            "~/Downloads/*.gif",
            "~/Downloads/*.jpg",
            "~/Downloads/*.png",
            "~/Pictures/*.gif",
            "~/Pictures/*.jpg",
            "~/Pictures/*.png",
          ],
        },
        {
          str: "It{{em,alic}iz,erat}e{d,}, please.",
          result: [
            "Italicize, please.",
            "Italicized, please.",
            "Itemize, please.",
            "Itemized, please.",
            "Iterate, please.",
            "Iterated, please.",
          ],
        },
        {
          str: "thumbnail.{png,jp{e,}g}",
          result: ["thumbnail.jpeg", "thumbnail.jpg", "thumbnail.png"],
        },
        {
          str: "nothing to do",
          result: ["nothing to do"],
        },
      ].forEach((data) => {
        var actual = Array.from(tasks.expandBraces(data.str));
        actual.sort();
        assert.deepEqual(
          actual,
          data.result,
          `'${data.str}' have not expanded correctly:`
        );
      });
    }
  );

  it.optional(
    "getZigZagMatrix should create a square matrix with zigzag path",
    () => {
      [
        [[0]],
        [
          [0, 1],
          [2, 3],
        ],
        [
          [0, 1, 5],
          [2, 4, 6],
          [3, 7, 8],
        ],
        [
          [0, 1, 5, 6],
          [2, 4, 7, 12],
          [3, 8, 11, 13],
          [9, 10, 14, 15],
        ],
        [
          [0, 1, 5, 6, 14],
          [2, 4, 7, 13, 15],
          [3, 8, 12, 16, 21],
          [9, 11, 17, 20, 22],
          [10, 18, 19, 23, 24],
        ],
        [
          [0, 1, 5, 6, 14, 15],
          [2, 4, 7, 13, 16, 25],
          [3, 8, 12, 17, 24, 26],
          [9, 11, 18, 23, 27, 32],
          [10, 19, 22, 28, 31, 33],
          [20, 21, 29, 30, 34, 35],
        ],
        [
          [0, 1, 5, 6, 14, 15, 27],
          [2, 4, 7, 13, 16, 26, 28],
          [3, 8, 12, 17, 25, 29, 38],
          [9, 11, 18, 24, 30, 37, 39],
          [10, 19, 23, 31, 36, 40, 45],
          [20, 22, 32, 35, 41, 44, 46],
          [21, 33, 34, 42, 43, 47, 48],
        ],
      ].forEach((data) => {
        var actual = tasks.getZigZagMatrix(data.length);
        assert.deepEqual(
          actual,
          data,
          `Zigzag matrix of ${data.length} size has not been produced correctly:`
        );
      });
    }
  );

  it.optional(
    "canDominoesMakeRow should answer if specified subset of dominoes can be arranged in a row",
    () => {
      [
        [
          [0, 1],
          [1, 1],
        ],
        [
          [1, 3],
          [2, 3],
          [1, 4],
          [2, 4],
          [1, 5],
          [2, 5],
        ],
        [
          [1, 1],
          [1, 2],
          [2, 3],
          [2, 5],
          [2, 6],
          [3, 6],
          [5, 6],
          [6, 6],
        ],
        [
          [1, 2],
          [2, 1],
          [2, 2],
        ],
      ].forEach((data) => {
        var actual = tasks.canDominoesMakeRow(data);
        assert.equal(
          actual,
          true,
          `[${data.join("],[")}] can be arrangement in a row`
        );
      });

      [
        [
          [0, 1],
          [2, 3],
        ],
        [
          [1, 1],
          [2, 2],
          [1, 5],
          [5, 6],
          [6, 3],
        ],
        [
          [0, 0],
          [0, 1],
          [0, 2],
          [0, 3],
          [1, 1],
          [1, 2],
          [1, 3],
          [2, 2],
          [2, 3],
          [3, 3],
        ],
      ].forEach((data) => {
        var actual = tasks.canDominoesMakeRow(data);
        assert.equal(
          actual,
          false,
          `[${data.join("],[")}] can't be arrangement in a row`
        );
      });
    }
  );

  it.optional(
    "extractRanges should return string expression of ordered list of integers",
    () => {
      [
        {
          nums: [0, 1, 2, 3, 4, 5],
          result: "0-5",
        },
        {
          nums: [1, 4, 5],
          result: "1,4,5",
        },
        {
          nums: [0, 1, 2, 5, 7, 8, 9],
          result: "0-2,5,7-9",
        },
        {
          nums: [1, 2, 4, 5],
          result: "1,2,4,5",
        },
        {
          nums: [
            0,
            1,
            2,
            4,
            6,
            7,
            8,
            11,
            12,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            27,
            28,
            29,
            30,
            31,
            32,
            33,
            35,
            36,
            37,
            38,
            39,
          ],
          result: "0-2,4,6-8,11,12,14-25,27-33,35-39",
        },
      ].forEach((data) => {
        var actual = tasks.extractRanges(data.nums);
        assert.equal(
          actual,
          data.result,
          `[${data.nums}] have not expanded correctly:`
        );
      });
    }
  );

  var paths = ["task/10-katas-1-tasks.js"];

  var options = {
    formatter: "compact", // Defaults to `stylish`
    alwaysWarn: false, // Defaults to `true`, always show warnings
    timeout: 5000, // Defaults to the global mocha `timeout` option
    slow: 1000, // Defaults to the global mocha `slow` option
    strict: true, // Defaults to `false`, only notify the warnings
    contextName: "eslint", // Defaults to `eslint`, but can be any string
  };

  lint(paths, options);
});
