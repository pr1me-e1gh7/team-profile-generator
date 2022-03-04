// Fetches and combines data from all roles

class expEmployee {
    constructor(name = "", id = "", email = "") {
        this.dataName = name;
        this.dataID = id;
        this.dataEmail = email;
    }
    fetchName() {
        return `${this.dataName}`;
    }
    fetchID() {
        return `${this.dataID}`;
    }
    fetchEmail() {
        return `${this.dataEmail}`;
    }
    fetchRole() {
        return 'Employee';
    }
}

module.exports = expEmployee;