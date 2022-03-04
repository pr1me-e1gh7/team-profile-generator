// Fetches and applies unique data to Engineer

const Employee = require("./Employee")
class expEngineer extends Employee {
    constructor(entryENname = "", entryENid = "", entryENemail = "", entryENgithub = "") {
        super(entryENname, entryENid, entryENemail)
        this.entryENgithub = entryENgithub;
    }
    fetchGithub() {
        return `https://github.com/${this.entryENgithub}/`
    }
    fetchRole() {
        return 'Engineer'
    }
}

module.exports = expEngineer;