const Employee = require("../utils/Employee")

describe("Initialization", () => {
    it("should be instance of Employee", () => {
        const employee = new Employee ("Joe", 55, "joe@shmoe.com");
        expect(employee).toBeInstanceOf(Employee)
    });

    it("should display the correct name", () => {
        const employee = new Employee ("Joe", 55, "joe@shmoe.com");
        const expected = "Joe";
        expect(employee.getName()).toBe(expected);
    });
    
    it("should display the correct ID number", () => {
        const employee = new Employee ("Joe", 55, "joe@shmoe.com");
        const expected = 55;
        expect(employee.getId()).toBe(expected);
    });
    
    it("should display the correct email address", () => {
        const employee = new Employee ("Joe", 55, "joe@shmoe.com");
        const expected = "joe@shmoe.com";
        expect(employee.getEmail()).toBe(expected);
    });
    
    it("should display role as `Employee`", () => {
        const employee = new Employee ("Joe", 55, "joe@shmoe.com");
        const expected = "Employee";
        expect(employee.getRole()).toBe(expected);
    });

})
