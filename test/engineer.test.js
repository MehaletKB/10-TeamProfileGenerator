const Engineer = require("../utils/Engineer")

describe("Initialization", () => {
    it("should be instance of Engineer", () => {
        const engineer = new Engineer ("Joe", 55, "joe@shmoe.com", "joeBshmoein21");
        expect(engineer).toBeInstanceOf(Engineer)
    });

    it("should display the correct Github name", () => {
        const engineer = new Engineer ("Joe", 55, "joe@shmoe.com", "joeBshmoein21");
        const expected = "joeBshmoein21";
        expect(engineer.getGithub()).toBe(expected);
    });

    it("should display role as `Engineer` ", () => {
        const engineer = new Engineer ("Joe", 55, "joe@shmoe.com", "joeBshmoein21");
        const expected = "Engineer";
        expect(engineer.getRole()).toBe(expected);
    });
})
