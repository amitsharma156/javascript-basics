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

var firstName = 'John';
var age = 20;

if(age<13){
    console.log(firstName + ' is a boy');
}else if(age>=13 && age <20){
    console.log(firstName +' is a teenager');
}
else if(age>=20 && age<30){
    console.log(firstName + ' is a man');
}
else{
    console.log(firstName + 'old man');
}
















































































































