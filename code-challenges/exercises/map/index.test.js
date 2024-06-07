const {
    doubleNumbers,
    stringItUp,
    capitalizeNames,
    namesOnly,
    makeStrings,
    readyToPutInTheDOM
} = require("./index")

describe("Array Mapping", () => {
    
    describe("Double Numbers function", () => {
        test("returns array with numbers doubled", () => {
            expect(doubleNumbers([2, 5, 100])).toEqual([4, 10, 200]);
        })
    });

    describe("String it Up function", () => {
        test("returns array with numbers as strings", () => {
            expect(stringItUp([2, 5, 100])).toEqual(["2", "5", "100"]);
        })
    });

    describe("Capitalize Names function", () => {
        test("returns array with capitalized names", () => {
            expect(capitalizeNames(["john", "JANE", "sMiTh"])).toEqual(["John", "Jane", "Smith"]);
        })
    });

    describe("Names Only function", () => {
        test("returns array of names from objects", () => {
            const people = [
                { name: "John", age: 25 },
                { name: "Sarah", age: 32 },
                { name: "Kevin", age: 17 },
                { name: "Anna", age: 15 }
            ];
            expect(namesOnly(people)).toEqual(["John", "Sarah", "Kevin", "Anna"]);
        })
    });

    describe("Make Strings function", () => {
        test("returns array of strings indicating if they can go to The Matrix", () => {
            const people = [
                { name: "John", age: 25 },
                { name: "Sarah", age: 32 },
                { name: "Kevin", age: 17 },
                { name: "Anna", age: 15 }
            ];
            const expected = [
                "John can go to The Matrix",
                "Sarah can go to The Matrix",
                "Kevin is under age!!",
                "Anna is under age!!"
            ];
            expect(makeStrings(people)).toEqual(expected);
        })
    });

    describe("Ready to put in the DOM function", () => {
        test("returns array of strings with names in h1s and ages in h2s", () => {
            const people = [
                { name: "John", age: 25 },
                { name: "Sarah", age: 32 },
                { name: "Kevin", age: 17 },
                { name: "Anna", age: 15 }
            ];
            const expected = [
                "<h1>John</h1><h2>25</h2>",
                "<h1>Sarah</h1><h2>32</h2>",
                "<h1>Kevin</h1><h2>17</h2>",
                "<h1>Anna</h1><h2>15</h2>"
            ];
            expect(readyToPutInTheDOM(people)).toEqual(expected);
        })
    });

});
