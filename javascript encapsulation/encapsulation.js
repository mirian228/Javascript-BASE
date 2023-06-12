class Student {
  constuctor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getMarks() {
    return this.marks;
  }

  setMarks(marks) {
    this.marks = marks;
  }
}

let student = new Student();

student.setName("Mirian");
student.setMarks("A");
console.log(student.getName());
console.log(student.getMarks());
