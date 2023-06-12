let employee = 
{
  name: "Scott",
  empid: 1023,
  job: "Engineer",
  basicsal: 50000,

  bonus: function calculateBonus() {
    return (this.basicsal)*10/100;
  }


};

console.log(employee.name);
console.log(employee.bonus());