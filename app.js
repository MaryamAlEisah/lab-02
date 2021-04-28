'use strict';

let userName = prompt('Hi, Could you please enter your name');
console.log(userName);

alert(userName + 'Welcome to my page');


 // I will ask user 5 yes/no Q


let q1=prompt('Do I have a car?');
switch(q1.toLowerCase()){
  case 'yes': 
  case 'y':
    alert('no I do not have one');
    console.log('yes I have one');
    break;
    case 'no':
    case 'n':
    alert('you are correct');
    console.log('no I have not');
break;
    default:
      console.log('please ask me again');
      alert('please enter yes or no');
 
}

let q2=prompt('Do I like pasta ?');
switch(q1.toLowerCase()){
  case 'yes': 
  case 'y' :
    alert(' no I dont like it');
    console.log('yes I like it');
    break;
    case 'no': 
    case 'n':
    alert('you are correct');
    console.log('no I do not like it');
break;
    default:
      console.log('please ask me again');
      alert('please enter yes or no');
 
}


let q3=prompt('Do I like reading newspaper?');
switch(q1.toLowerCase()){
  case 'yes': 
  case 'y':
   alert('no I do not');
   console.log('yes I like reading newspaper');
    break;
    case 'no': 
    case 'n' :
    alert('you are correct');
    console.log('no I do not like reading newspaper');
    default:
      console.log('please ask me again');
      alert('enter yes or no');
 
}


let q4=prompt('Do I like cooking ?');
switch(q1.toLowerCase()){
  case 'yes': 
  case 'y' :
    alert('no I do not');
    console.log('yes I do');
    break;
    case 'no': 
    case 'n':
    alert('you are correct');
    console.log('no I do not ');

    default:
      console.log('please ask me again');
      alert('enter yes or no');
 
}

let q5=prompt('Do you think I like drawing?');
switch(q1.toLowerCase()){
  case 'yes': 
  case 'y':
   alert('no I do not');
   console.log('yes I do');
    break;
    case 'no': 
    case 'n':
    alert('you are correct ');
    console.log('no I do not');
    default:
      console.log('please ask me again');
      alert('please enter yes or no');
 
}

// Q6

let q6=prompt('Could you guess my age in years, you have four opportunities? ');

let myAge = 35 ;

for (let i = 0; i < 4 ; i++){
console.log(i);
 
  if (i > 35) {
  alert('Its too high, you should try again!');
  console.log(i);
  continue;}
  

  if (i < 35) { 
alert('Its too low, you should try again!');
console.log(i);

 continue; }

 if (i == 35) {
  alert('Great, its correct');  
break;
  }
}


//Q7

let q7 = prompt('Could you guess my favorite color, you have six opportunities?');


let favCol = ['red', 'green', 'blue', 'purple', 'yellow'];
console.log(i);
for (let i = 0; i < 6; i++);{
  console.log(favCol[i]);

}

for (let i = 0; i <= favCol.length; i++){
  if (favCol.tolocalelowerCase === favCol[i]){

  }
  alert('yes you are correct');
  break;
} 
else {
  alert('you are wrong , try again!');
}

alert(' my my favorite color are : red,green,blue,purple,yellow');
