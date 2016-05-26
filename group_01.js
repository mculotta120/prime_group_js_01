var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];
var newArray = [];

var annualSti = function (individual){

  // console.log(individual[0], individual[1]);

  // get name and push name to new array
  newArray.push(individual[0]);

  // figure out the percentage of STI the employee is to receive
  switch (individual[3]) {
    case 1:
    case 2:
      bonus = 0;
      break;
    case 3:
      bonus = 0.04;
      break;
    case 4:
      bonus = 0.06;
      break;
    case 5:
      bonus = 0.10;
      break;

    default:
      bonus = 0;
    }
    newArray.push(bonus);

    // figure out adjusted annual compensation (base annual + STI)
    var adjustedAnnual = (Number(individual[2]) + (individual[2]*bonus));
    newArray.push(adjustedAnnual);

};

for (i = 0; i < employees.length; i++) {
  annualSti(employees[i]);
}

console.log(newArray);

// var annualSti = function(rating) {
//   var bonus;
//
//   for(i = 0; i < employees.length; i++) {
//     if (rating <=2){
//       bonus = 0;
//     }else if(rating == 3){
//       bonus = 4;
//     }else if(rating ==4){
//       bonus = 6;
//     } else if( rating == 5){
//       bonus = 10;
//     }
//
//     }
//
//   };
// console.log(annualSti());
// var annualSti = function(rating) {
//   rating = employees[0][3];
//   var bonus;
//
//   for(i = 0; i <= 4; i++) {
//
//     switch (i) {
//       case 1:
//       case 2:
//         bonus = 0;
//         break;
//       case 3:
//         bonus = 4;
//         break;
//       case 4:
//         bonus = 6;
//         break;
//       case 5:
//         bonus = 10;
//         break;
//
//       default:
//         bonus = 0;
//     }
//   }
//
// };
