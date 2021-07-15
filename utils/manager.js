import Employee from "./employee.js";

class Manager extends Employee {
    constructor({name, id, email, officeNum}){
        super({name, id, email})
        this.officeNum = officeNum;
    }

    getRole() {
        return "Manager"
    }
}