//=================Create a "ARROW Function" using "SWITCH CASE" for the above =================

// const areaCal2 = (type, value1, value2) => {

//       let shape;
//       let area;
//       switch(type){
//         case 'r' :
//         shape = 'Rectangle';
//         area = value1 * value2;
//         break;

//         case 's' :
//         shape = 'Square';
//         area = value1 * value1;
//         break;

//         case 't' :
//         shape = 'Triangle';
//         area = .5 * value1 * value2;
//         break;

//       } 

//       console.log( `The area of ${shape} is ${area}`);
// }

// areaCal2('s',20);

//===================Create a "ARROW FUNCTION" that will return==============================
//===================Children, Teenagers, Young, Old people from the age=====================

// let name = prompt('Name');
// let age = prompt('Age');

// const ageCal = (age) => {

//   let people;
//   if(age >= 0 && age < 12){
//     people = 'Children';
//   }else if(age >= 12 && age < 18){
//     people = 'Teenagers';
//   }else if(age >= 18 && age < 40){
//     people = 'Young people';
//   }else if(age >= 40){
//     people = 'Old people';
//   }
//   return people;
// }

// console.log(`Hi ${name}, You are ${ageCal(age)}`);

//===============Using "ARROW FUNCTION" creat GPA, GRADE for result publishing==============

//   let bn = prompt('Bangla');
//   let en = prompt('English');
//   let math = prompt('Math');
//   let rel = prompt('Religion');
//   let sci = prompt('Science');

//   const myGpa = (marks) =>{

//     let gpa;
//     if(marks >= 0 && marks < 33){
//       gpa = 0;
//     }else if(marks >= 33 && marks < 40){
//       gpa = 1;
//     }else if(marks >= 40 && marks < 50){
//       gpa = 2;
//     }else if(marks >= 50 && marks < 60){
//       gpa = 3;
//     }else if(marks >= 60 && marks < 70){
//       gpa = 3.5;
//     }else if(marks >= 70 && marks < 80){
//       gpa = 4;
//     }else if(marks >= 80 && marks <= 100){
//       gpa = 5;
//     }

//     return gpa
// }


// const myGrade = (marks) => {

//   let grade;
//   if(marks >= 0 && marks < 33){
//     grade = 'F';
//   }else if(marks >= 33 && marks < 40){
//     grade = 'D';
//   }else if(marks >= 40 && marks < 50){
//     grade = 'C';
//   }else if(marks >= 50 && marks < 60){
//     grade = 'B';
//   }else if(marks >= 60 && marks < 70){
//     grade = 'A-';
//   }else if(marks >= 70 && marks < 80){
//     grade = 'A';
//   }else if(marks >= 80 && marks <= 100){
//     grade = 'A+';
//   }

//   return grade
// }

// console.log(`
//   Subjuct   Marsk     GPA           Grade
//   Bangla    ${bn}     ${myGpa(bn)}  ${myGrade(bn)}
//   English   ${en}     ${myGpa(en)}  ${myGrade(en)}
//   Math      ${math}   ${myGpa(math)}  ${myGrade(math)}
//   Religion  ${rel}    ${myGpa(rel)}  ${myGrade(rel)}
//   Sccience  ${sci}    ${myGpa(sci)}  ${myGrade(sci)}


// `)


//==================Using "ARROW FUNCTION" Create an age calculator===================


// const ageCal = (name, year) => {

//   let age = 2022 - year;
//   console.log( `Hi ${name}, you age is ${age} years`)
// }

// ageCal('Jon', 2000);



//====================Using "ARROW FUNCTION" Create a BMI function for health==============

// let weight = prompt('Weight');
// let height = prompt('Height');

// const myBMI = (wei, hei) => {

//     let bmi = weight / (height * height);

//     let bmass;
//     if(bmi < 18.5){
//         bmass = 'Underweight';
//     }else if(bmi >= 18.5 && bmi <= 24.9){
//         bmass = 'Normal';
//     }else if(bmi >= 25 && bmi <= 29.9){
//         bmass = 'Overweight';
//     }else if(bmi >= 30){
//         bmass = 'Very Overweight';
//     }

//     console.log(bmass);
// }

// myBMI(weight, height);


//======================Using "ARROW FUNCTION and SWITCH CASE" Create a currency converter===========
//======================from taka to USD, CAD, POUND, EURO etc=======================================


// const currencyConverter = (amount,currency) => {
    
//       let rate;
      
//       switch(currency){
  
//           case 'usd' :
//               rate = 86;
//               break;
  
//           case 'cad' :
//               rate = 65;
//               break;
  
//           case 'euro' :
//               rate = 93;
//               break;
          
//           case 'pound' :
//               rate = 112;
//               break;
  
//       }
//           let bdt = amount * rate;
//           return bdt;     
//   }
  
//   console.log(currencyConverter(200,'usd'));