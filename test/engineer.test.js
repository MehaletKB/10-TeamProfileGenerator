const Employee = require("../utils/Employee")

describe("Initialization", () => {
    it("should be instance of Employee", () => {
        const engineer = new Employee ({name: "Joe", id: 55, email: "joe@shmoe.com"})

        expect(engineer).toBeInstanceOf(Employee)
    });

    it("should have a name property", () => {
        const engineer = new Employee ("Joe", 55, "joe@shmoe.com")

        expect("name" in engineer).toEqual(true)
    })
})
