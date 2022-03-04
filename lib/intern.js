// Fetches and applies unique data to Intern

const Employee = require("./Employee")
class expIntern extends Employee {
    constructor(entryINname = "", entryINid = "", entryINemail = "", entryINschool = "") {
        super(entryINname, entryINid, entryINemail);
        this.entryINschool = entryINschool;
    }
    fetchSchool() {
        return `University: ${this.entryINschool}`;
    }
    fetchRole() {
        return 'Intern'
    }
}

module.exports = expIntern;