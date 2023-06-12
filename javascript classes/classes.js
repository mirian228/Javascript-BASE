class Student {
  constructor(sid, sname, grade) {
    this.sid = sid;
    this.sname = sname;
    this.grade = grade;
  }

  display() {
    console.log(this.sid, this.sname, this.grade);
  }
}



let student = new Student(101, "John", "A");

student.display();
