const generatedPage = require('../src/htmlTemplate');
const inquirer = require("inquirer");
const fs = require("fs")
const roleEngineer = require("./engineer");
const roleIntern = require("./intern");
const roleManager = require("./manager");

// Exported Terminal Questions
class expQuestions {
    constructor() {
        this.roster = [];}
    // Manager Questions
    newroleMA() {
        inquirer
            .prompt([
                // Manager Name
                {
                    name: "entryMAname", type: "text", message: "Please enter your Team Manager's NAME: "
                },
                // Manager ID
                {
                    name: "entryMAid", type: "text", message: "Please enter your Team Manager's ID: "
                },
                // Manager Email
                {
                    name: "entryMAemail", type: "text", message: "Please enter your Team Manager's EMAIL: "
                },
                // Manager Office Number
                {
                    name: "entryMAoffice", type: "text", message: "Please enter your Team Manager's OFFICE NUMBER: "
                }
            ])
            .then(({ entryMAname, entryMAid, entryMAemail, entryMAoffice }) => {
                this.roster.push(new roleManager(entryMAname, entryMAid, entryMAemail, entryMAoffice));
                this.addMember();
            })}
    // Add Member or Complete profile
    addMember() {
        inquirer
            .prompt(
                {
                    name: 'confirmGen', type: 'list', message: 'Add a member to the team?', choices: ['+ Engineer', '+ Intern', 'Generate team profile']
                })
            .then((data) => {
                if (data.confirmGen === '+ Engineer') {
                    this.newroleEN();
                } else if (data.confirmGen === '+ Intern') {
                    this.newroleIN();
                } else {
                    this.writeFile()
                }
            })}
    // Intern Questions
    newroleIN() {
        inquirer
            .prompt([
                // Intern Name
                {
                    name: "entryINname", type: "text", message: "Please enter your Intern's NAME: "
                },
                // Intern ID
                {
                    name: "entryINid", type: "text", message: "Please enter your Intern's ID: "
                },
                // Intern Email
                {
                    name: "entryINemail", type: "text", message: "Please enter your Intern's EMAIL: "
                },
                // Intern School
                {
                    name: "entryINschool", type: "text", message: "Please enter your Intern's SCHOOL: "
                }
            ])
            .then(({ entryINname, entryINid, entryINemail, entryINschool }) => {
                this.roster.push(new roleIntern(entryINname, entryINid, entryINemail, entryINschool));
                this.addMember();
            })}
    // Engineer Questions
    newroleEN() {
        inquirer
            .prompt([
                // Engineer Name
                {
                    name: "entryENname", type: "text", message: "Please enter the Engineers NAME: "
                },
                // Engineer ID
                {
                    name: "entryENid", type: "text", message: "Please enter the Engineers ID: "
                },
                // Engineer Email
                {
                    name: "entryENemail", type: "text", message: "Please enter the Engineers EMAIL: "
                },
                // Engineer Github
                {
                    name: "entryENgithub", type: "text", message: "Please enter the Engineers GITHUB USERNAME: "
                }])
            .then(({ entryENname, entryENid, entryENemail, entryENgithub }) => {
                this.roster.push(new roleEngineer(entryENname, entryENid, entryENemail, entryENgithub));
                this.addMember();
            })}
    // Creates Index.html
    writeFile() {
        fs.writeFile('./dist/index.html', generatedPage(this.roster),(err)=>{
            if(err){
                console.log(err)
            }
            // Completion prompt
            console.log("Got that roster for ya boss, done lickety-split!");
        });}}
module.exports = expQuestions;