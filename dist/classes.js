"use strict";
let Department = (() => {
    class Department {
        constructor(id, name) {
            this.id = id;
            this.name = name;
            this.employees = [];
            console.log(Department.fiscalYear);
        }
        static createEmployee(name) {
            return {
                name: name,
            };
        }
        addEmployees(employee) {
            this.employees.push(employee);
        }
        printEmployeeInformation() {
            console.log(this.employees.length);
            console.log(this.employees);
        }
    }
    Department.fiscalYear = 2021;
    return Department;
})();
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
        this.admins = admins;
    }
    describe() {
        console.log('IT DEPARTMENT ', this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    describe() {
        console.log('Accounting departament - id:', this.id);
    }
    get mostRecentReport() {
        if (this.lastReport)
            return this.lastReport;
        throw new Error('No report found, sorry');
    }
    set mostRecentReport(value) {
        if (!value)
            throw new Error('Pass a correct value');
        this.addReport(value);
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment(21, []);
        return this.instance;
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(`Reports${this.reports}`);
    }
    addEmployees(employee) {
        if (employee === 'Glen')
            this.employees.push(employee);
    }
}
const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);
const acc = AccountingDepartment.getInstance();
const acc2 = AccountingDepartment.getInstance();
console.log(acc, acc2);
acc.mostRecentReport = 'this is it';
acc.describe();
acc.addEmployees('Glenda');
acc.addEmployees('Carmen');
acc.addEmployees('Glen');
acc.addReport('Something went wrong');
console.log(acc.mostRecentReport);
console.log(acc);
acc.describe();
//# sourceMappingURL=classes.js.map