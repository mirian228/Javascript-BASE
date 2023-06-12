class Test {
  static a = 10;
  b = 20;

  static m1() {
    console.log("This is m1 static method....");
  }

  m2() {
    console.log("This is m2 non-static method....");
  }
}

// 1) we can directly access static variables and methods using classname
console.log(Test.a);
console.log(Test.b); // We can't access non static variable using class name
Test.m1();
// Test.m2(); // We can't access non-static method using class name

// 2) we can access non static variables & methods using object
let t = new Test();
console.log(t.b);
t.m2();
