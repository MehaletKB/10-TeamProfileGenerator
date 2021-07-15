const Employee = require("../utils/employee")

describe("Initialization", () => {
    it("should be instance of Employee", () => {
        const engineer = new Employee ({name: "Joe", id: 55, email: "joe@shmoe.com"})

        expect(engineer).toBeInstanceOf(Employee)
    })
})