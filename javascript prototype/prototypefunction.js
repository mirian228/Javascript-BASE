function Student() {
  this.name = "John";
  this.gender = "Male";
}

Student.prototype.age=35;

stu1 = new Student();
console.log(stu1.name);
console.log(stu1.gender);

console.log(stu1.age);

stu2 = new Student();
console.log(stu2.age);
