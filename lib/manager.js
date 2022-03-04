// Fetches and applies unique data to Manager

const Employee = require("./Employee")
class expManager extends Employee {
    constructor(entryMAname = "", entryMAid = "", entryMAemail = "", entryMAoffice = "") {
        super(entryMAname, entryMAid, entryMAemail);
        this.entryMAoffice = entryMAoffice;
    }
    fetchOffice() {
        return `Office#: ${this.entryMAoffice}`;
    }
    fetchRole() {
        return 'Project Manager'
    }
}

module.exports = expManager;