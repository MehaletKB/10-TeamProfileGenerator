const Intern = require("../utils/Intern")

describe("Initialization", () => {
    it("should be instance of Intern", () => {
        const intern = new Intern ("Joe", 55, "joe@shmoe.com", "Ilvermorny");
        expect(intern).toBeInstanceOf(Intern)
    });

    it("should display the correct school name", () => {
        const intern = new Intern ("Joe", 55, "joe@shmoe.com", "Ilvermorny");
        const expected = "Ilvermorny";
        expect(intern.getSchool()).toBe(expected)
    });

    it("should display the role as `Intern`", () => {
        const intern = new Intern ("Joe", 55, "joe@shmoe.com", "Ilvermorny");
        const expected = "Intern";
        expect(intern.getRole()).toBe(expected)
    })
})