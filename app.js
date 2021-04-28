 'use strict';

 let userName = prompt('Hi, Could you please enter your name');
console.log(userName);

alert(userName + 'Welcome to my page');


  // I will ask user 5 yes/no Q

 let totalCorrectAnswers=0;
let q1=prompt('Do I have a car?');
switch(q1.toLowerCase()){
  case 'yes': 
  case 'y':
    alert('no I do not have one');
    console.log('no I dont have any');
      break;
    case 'no':
    case 'n':
    alert('you are correct');
    console.log('no I have not');
    totalCorrectAnswers++;
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
    totalCorrectAnswers++;
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
    totalCorrectAnswers++;
    break;
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
    totalCorrectAnswers++;
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
   totalCorrectAnswers++;
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
let question="Could you guess my age in years, you have four opportunities? ";
let q6=prompt(question);

let myAge = 35 ;
let status=false;
for (let i = 0; i < 3 ; i++){
 
 
  if (q6 > 35 || q6 < 30) {
  alert('Its too far, you should try again!');
  console.log(i);
   }
  

  else if (  q6 >= 30 && q6 < 35) { 
alert('Its too close, you should try again!');
console.log(i);

   }

 else if (q6 == 35)
  {
  alert('Great, its correct'); 
  totalCorrectAnswers++;
   status=true;
break;
  }
  q6=prompt(question);
}
if(!status)
alert("sorry you have took out you attempts , my age was 35")

//Q7
 
let top10=['red','white','blue'];
let favMovie;

let quesition="which of the next colors were the author's favorite \n,"+
"(you have to guess 1 movie each attemp) \n"+
  "-red \n"+
  "-purple \n"+
  "-white \n"+
  "-blue \n"+
  "-orange \n"+
  "-green \n"+
  "-black \n"+
  "-yellow"
favMovie=prompt(quesition);
                     let answerState=false;
                     let correctAnswer=0;
                     let gussing=0;
                     let indexNo=-1;

       while(gussing < 5  && correctAnswer !=2)
       {
         for(var j = 0 ; j<top10.length;j++)
         {
           if(favMovie.toLowerCase()==top10[j])
           {              
              answerState=true;
              indexNo=j;
            break;
             }
            else{
              answerState=false
             
            }
          
         }
         if(answerState)
         {
           alert(top10[j]+" is a correct answer");
           console.log(j)
           correctAnswer++;
           
           alert(3-correctAnswer+" left to guess")
         }
         else{
           alert(favMovie+" is a wrong answer")
           alert(5-gussing+" attempts left to guess");
           
         }
         gussing++;
        
         favMovie=prompt(quesition);
        
       }
       totalCorrectAnswers+=correctAnswer+1;
       

        if(gussing>2)
        {
        
       alert(" you have completed all your attemps , hard luck")
        }
       else
       alert("Good Job you have gussed all the correctly correctly")

       alert(userName +" your total points are "+ totalCorrectAnswers+"\n"
       +"hope we can see you in another game")
