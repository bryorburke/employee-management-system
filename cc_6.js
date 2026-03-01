 // Employee Base Class
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `Employee: ${this.name}, Department: ${this.department}`;
    }
}

// Manager Subclass
class Manager extends Employee {
    constructor(name, department, teamSize) {
        // Use super() to call the parent constructor
        super(name, department);
        this.teamSize = teamSize;
    }

    // Overriding the describe method
    describe() {
        return `Manager: ${this.name}, Department: ${this.department}, Team Size: ${this.teamSize}`;
    }
}

// Company Class
class Company {
    constructor() {
        this.employees = []; // Array to store employee/manager instances
    }

    // Method to add an employee
    addEmployee(employee) {
        this.employees.push(employee);
    }

    // Method to log descriptions of all employees
    listEmployees() {
        console.log("Company Employee List");
        this.employees.forEach(emp => {
            console.log(emp.describe());
        });
    }
}

// Instantiate Objects and Test Functionality

// Create a new Company instance
const myCompany = new Company();

// Create sample Employees
const emp1 = new Employee("Fred Burger", "Marketing");
const emp2 = new Employee("Sebastian Man", "Human Resources");

// Create sample Managers
const mgr1 = new Manager("Chuckie McManman", "Engineering", 12);
const mgr2 = new Manager("Silly Guy-Litman", "Operations", 5);

// Add them to the company
myCompany.addEmployee(emp1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(mgr1);
myCompany.addEmployee(mgr2);

// List all employees in the console
myCompany.listEmployees();