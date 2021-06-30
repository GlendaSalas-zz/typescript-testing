abstract class Department {
    static fiscalYear = 2021;
    protected employees: string[] = [];

    constructor(protected readonly id: number, public name: string) {
        console.log(Department.fiscalYear);
    }

    static createEmployee(name: string){
        return {
            name: name,
        }
    }

    abstract describe (this: Department): void;

    addEmployees(employee: string){
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    constructor(id: number, public admins: string[]){
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT DEPARTMENT ', this.id)
    }
}
class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    describe(){
        console.log('Accounting departament - id:', this.id);
    }

    get mostRecentReport() {
        if(this.lastReport) return this.lastReport;
        throw new Error('No report found, sorry');
    }

    set mostRecentReport(value: string){
        if(!value) throw new Error('Pass a correct value');
        this.addReport(value);
    }

    private constructor(id: number, public reports: string[]){
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance(){
        if (AccountingDepartment.instance){
            return this.instance;
        }
        this.instance = new AccountingDepartment(21, []);
        return this.instance;
    }
    addReport(text: string){
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports(){
        console.log(`Reports${this.reports}`)
    }
    addEmployees(employee: string){
        if(employee === 'Glen') this.employees.push(employee)
    }
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

// const acc = new AccountingDepartment(23, []);
const acc = AccountingDepartment.getInstance();
const acc2 = AccountingDepartment.getInstance();

console.log(acc, acc2);
acc.mostRecentReport = 'this is it';
acc.describe();
acc.addEmployees('Glenda')
acc.addEmployees('Carmen')

acc.addEmployees('Glen')
acc.addReport('Something went wrong')
console.log(acc.mostRecentReport)
console.log(acc)
acc.describe();