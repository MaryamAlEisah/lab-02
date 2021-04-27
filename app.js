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






