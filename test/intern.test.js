const Employee = require("../utils/Employee")

describe("Initialization", () => {
    it("should be instance of Employee", () => {
        const intern = new Employee ({name: "Joe", id: 55, email: "joe@shmoe.com"})

        expect(intern).toBeInstanceOf(Employee)
    })
})