import Employee from "./employee.js";

class Engineer extends Employee {
    constructor({name, id, email, github}){
        super({name, id, email})
        this.github = github;
    }

    getGithub() {

    }

    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer;