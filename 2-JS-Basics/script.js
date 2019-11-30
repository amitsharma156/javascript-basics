/* variables
    declaration
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
job = 'teacher';
console.log(job);

// Variables naming rules
var function =23;
*/
/********************
 variable mutation  and type Coercion */
//  var firstName ='John';
//  var age =28 ;

//  //type coerction
//  console.log( age+ ' ' + firstName);

//  var job, isMarried;

//  job ='teacher';
//  isMarried = false;

//  console.log(firstName + ' is a  ' +age+' years old '+ job + '. Is he married : '+ isMarried );

// // Type Mutation

// age = 'twenty eight';
// job = 'driver';
// middleName = 'steve'
// alert(firstName ++' '+ middleName+ ' is a  ' +age+' years old '+ job + '. Is he married : '+ isMarried );

// var lastName = prompt('What is his last name');
// console.log(firstName+ ' ' +lastName);

/* **********BAsic Operators ***************/

// var year, yearJohn, yearMark, ageJohn, ageMark;
// ageJohn =28;
// ageMark = 33;
// now = 2018;
// yearJohn = now-ageJohn;
// yearMark = now-ageMark;

// console.log(yearJohn);
// console.log(yearMark);
// console.log(now+2);
// console.log(now*2);
// console.log(now/2);

// //Logical operators

// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// // typeof operator

// console.log(typeof(johnOlder));
// console.log(typeof ageJohn);

// console.log(typeof "ageJohn");

/********* Operator precedence **************/

// var now = 2018 ;
// var yearJohn = 1989;
// var fullAge = 18;
// var isFullAge = now - yearJohn >= fullAge

// console.log(isFullAge);
// var ageJohn = now-1989;
// var ageMark =  35;
// var average = (ageJohn + ageMark)/2 ;
// console.log(average);

// //multiple assignments

// var x,y;

// x =y = (3+5) *4 -6 ;
// console.log(x,y);

// //More Operators

// x= x*2;
// console.log(x);

// x += 10;
// console.log(x);

// x++;
// console.log(x);

/*********Assignment************/

//height in meters and mass in kg
// var bmiJohn, bmiMark, heightJohn, massJohn, heightMark, massMark, compareBmi;

// massJohn = 80;
// heightJohn = 3;
// massMark =90;
// heightMark = 3; 
// bmiJohn = massJohn / (heightJohn * heightJohn);
// bmiMark = massMark / (heightMark * heightMark);

// compareBmi = bmiMark > bmiJohn;
// console.log(bmiMark , bmiJohn);
// console.log('Is Mark BMI higher than John bmi : ' + compareBmi)

/*************If-else statements*************/

// var firstName = 'John';
// var civilStatus = 'single';

// if(civilStatus === 'married'){
//     console.log(firstName + ' is married');
// }else{
//     console.log(firstName + ' marry soon');
// }

// var isMarried = false
// if(isMarried===true){
//     console.log(firstName + ' is married');
// }else{
//     console.log(firstName + ' marry soon');
// }

// //height in meters and mass in kg
// var bmiJohn, bmiMark, heightJohn, massJohn, heightMark, massMark, compareBmi;

// massJohn = 100;
// heightJohn = 3;
// massMark =90;
// heightMark = 3; 
// bmiJohn = massJohn / (heightJohn * heightJohn);
// bmiMark = massMark / (heightMark * heightMark);

// if(bmiMark>bmiJohn){
//     console.log('Mark\'s bmi is higher than John\'s');
// }
// else{
//     console.log('John\'s Bmi is higher than Mark\'s ');
// }


/********** Boolean Logic *************/

// var firstName = 'John';
// var age = 20;

// if(age<13){
//     console.log(firstName + ' is a boy');
// }else if(age>=13 && age <20){
//     console.log(firstName +' is a teenager');
// }
// else if(age>=20 && age<30){
//     console.log(firstName + ' is a man');
// }
// else{
//     console.log(firstName + 'old man');
// }


/********** ternary opertors *************/

// var firstName = 'John';
// var age = 10;

// var drink = age>=18 ? 'beer' :'juice';
// age >=18 ? console.log(firstName + ' drinks '+ drink): console.log(firstName + ' drinks ' +drink);



// /********** switch statement *************/
// var job = 'instructor';
// switch(job){
//     case 'teacher' :
//     case 'instructor':
//         console.log(firstName + ' teaches code');
//         break;
//     case 'driver' :
//         console.log(firstName + ' drives uber');
//         break;
//     case 'designer'  :
//         console.log(firstName + ' designs');       
//         break;
//     default:
//         console.log(firstName + ' does something else');

// }

// age =10;
// switch(true){
//     case age<13 :
//         console.log(firstName + ' is a boy');
//          break;
//     case age>=13 && age <20:
//         console.log(firstName +' is a teenager');
//          break;
//     case age>=20 && age<30:
//         console.log(firstName + ' is a man');
//      default:   
//      console.log(firstName + ' old man');
// }



/************Truthy and falsy value and equality************/


// var height;

// var height = 23;
// if(height || height === 0){
//     console.log('Variable is defined');
// }
// else{
//     console.log('variable is not being defined');
// }

// if(height == '23'){
//     console.log('javascript does coercion')
// }

/******* Assignment 2 ********/

// var scoreJohn, scoreMark, scoreMary;

// scoreJohn = (89+120+103)/3;
// scoreMark = (116+94+123)/3;
// scoreMary = (97+134+102)/3;

// if(scoreJohn>scoreMark && scoreJohn>scoreMary){
//     console.log('winner is John team and average score : ' + scoreJohn);
// }
// else if(scoreMark > scoreJohn && scoreMark>scoreMary){
//     console.log('winner is Mark team and average score : ' + scoreMark);
// }
// else if(scoreMary>scoreJohn && scoreMary > scoreMark){
//     console.log('winner is Mary team and average score : ' + scoreMary);
// }
// else {
//     console.log('there is a tie');
// }

// /*********  Functions   ************/

// function calculateAge(birthYear){
//     return 2018-birthYear;
// }
// var ageJohn = calculateAge(1988);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);
// console.log(ageJohn , ageMike, ageJane);

// function yearsUntilRetirement(year, firstName){
//     var age = calculateAge(year);
//     var retirement = 65-age;
//     if(retirement>0){
//     console.log(firstName + ' retires in ' + retirement + ' years');
//     }
//     else{
//         console.log('already retired');
//     }
// }
// yearsUntilRetirement(1990,'John');
// yearsUntilRetirement(1948,'Mike');
// yearsUntilRetirement(1969,'Jane');



// /*********  Function Statement and expressions  ************/


// var whatDoYouDo = function(job, firstName){
//     switch(job){
//         case 'teacher':
//             return firstName + ' teaches code';
//         case 'driver' :
//            return firstName + ' drives in uber';    
//         case 'designer' :
//             return firstName + ' design websites';
//         default :
//         return firstName + ' does something else';
//     }
// }

// console.log(whatDoYouDo('teacher','John'));
// console.log(whatDoYouDo('driver','Mike'));
// console.log(whatDoYouDo('designer','Jane'));


/******** Arrays  ***********/
//Initialize array
// var names = ['John','Mark','Jane'];
// var years = new Array(1990,1969,1948);

// console.log(names);
// console.log(names.length);

// //Mutate data
// names[1] = 'Ben';
// console.log(names);

// names[names.length]= 'Mary';
// console.log(names);

// //different data types

// var john = ['John','Smith',1990,'designer'];

// john.push('blue');
// console.log(john);

// john.unshift('Mr.');
// console.log(john);

// john.pop();
// console.log(john);

// john.shift();
// console.log(john);
// console.log(john.indexOf(1990));

// var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' :'John is a designer';
// console.log(isDesigner);

/*************   Assignment 3   ***************/


var tipJohn=[], paidJohn=[],tip,paidBill;

var tipCal = function(billAmount){
    if(billAmount<50){
        tip = 0.2*billAmount;
        billPaid(billAmount,tip);
        finalAmount(tip,paidBill);
        return tip;
    }
    else if(billAmount>=50 && billAmount<=200){
        tip = 0.15*billAmount;
        billPaid(billAmount,tip);
        finalAmount(tip,paidBill);
        return tip;
    }
    else if(billAmount>200){
        tip = 0.1*billAmount;
        billPaid(billAmount,tip);
        finalAmount(tip,paidBill);
        return tip;
    }
}
var billPaid = function(billAmount,tip){
    return paidBill = billAmount+tip;
}

var finalAmount= function(tip,billPaid){
    paidJohn.push(billPaid);
    tipJohn.push(tip)
}
tipCal(124);
tipCal(48);
tipCal(268);

console.log(paidJohn);
console.log(tipJohn);






















































































































































































