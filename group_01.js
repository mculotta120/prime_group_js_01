var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

var annualSti = function() {

  for (var i = 0; i < employees.length; i++) {
//picking apart array to adjust
    var empName = employees[i][0];
    var empNumber = employees[i][1];
    var salary = Number(employees[i][2]);
    var rating = employees[i][3];
    var adjustedAnnual = 0;
    var bonus = 0;
    var totalBonus = 0;
 //gets 15yr bonus eligible employees
   if (empNumber.length == 4) {
      bonus += 0.05;
    }
//decreases bonus based on salary
    if(salary >= 65000){
      bonus -= 0.01;
    }
//determines bonus based on rating
    switch (rating) {
      case 3:
        bonus += 0.04;
        break;
      case 4:
        bonus += 0.06;
        break;
      case 5:
        bonus += 0.1;
        break;
      default:
      bonus = 0;
    }
//caps bonus at 13%
    if (bonus > 0.13){
      bonus = 0.13;
    }
//sums salary and bonus
    adjustedAnnual = Math.round(salary) + (salary * bonus);
//sums bonus
    totalBonus = Math.round(salary * bonus);
//new array
    var afterBonus = [empName, bonus, adjustedAnnual, totalBonus];

    console.log(afterBonus);

  }
};
//iterates over employees array
annualSti(employees);
