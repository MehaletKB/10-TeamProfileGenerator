const Manager = require("../utils/Manager")

describe("Initialization", () => {
    it("should be instance of Manager", () => {
        const manager = new Manager ("Joe", 55, "joe@shmoe.com", "111-222-3333");
        expect(manager).toBeInstanceOf(Manager)
    });

    it("should display the correct Github name", () => {
        const manager = new Manager ("Joe", 55, "joe@shmoe.com", "111-222-3333");
        const expected = "111-222-3333";
        expect(manager.officeNum).toBe(expected);
    });

    it("should display role as `Manager`", () => {
        const manager = new Manager ("Joe", 55, "joe@shmoe.com", "111-222-3333");
        const expected = "Manager";
        expect(manager.getRole()).toBe(expected)
    })
})