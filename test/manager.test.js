const Employee = require("../utils/employee")

describe("Initialization", () => {
    it("should be instance of Employee", () => {
        const manager = new Employee ({name: "Joe", id: 55, email: "joe@shmoe.com"})

        expect(manager).toBeInstanceOf(Employee)
    })
})