// Exercise for V School, Lawrence "Menoko OG" Jefferson II, Date: 1-9-24

const employees = []

class Employee{ 
    constructor(name, jobTitle , salary, status = "Full Time" ){
        this.name = name
        this.jobTitle = jobTitle
        this.salary = salary
        this.status = status
        this.printEmployeeForm = e => {
            return `Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: $${this.salary} /hour, Status: ${this.status}`
        }
        this.addEmployee = e =>{
            employees.push(this.printEmployeeForm())
        }
    }
       
}
let employee1 = new Employee("Lex Luther", "Bad Wizrard", "3000")
let employee2 = new Employee("Super Man", "Hero", "5000000", "Part-Time" )
let employee3 = new Employee("Menoko OG", "Awesome Developer", "0", "Contract")

console.log(employee1.printEmployeeForm())
console.log(employee3.printEmployeeForm())
console.log(employee2.printEmployeeForm())
employee1.addEmployee()
employee2.addEmployee()
employee3.addEmployee()

console.log(employees)

