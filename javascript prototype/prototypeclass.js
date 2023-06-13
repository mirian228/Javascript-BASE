class Employee {
  constructor(eid, ename) {
    this.eid = eid;
    this.ename = ename;
  }



}

Employee.prototype.salary = 50000;
Employee.prototype.display = function() {
    console.log(this.eid, this.ename, this.salary);
}
employee1 = new Employee(1, "John");

console.log(employee1.salary);

employee2 = new Employee(2, "Scott");
console.log(employee2.eid,employee2.ename, employee2.salary)

employee2.display();