'use strict';

let userName=prompt('Hello there, what is your name plz?');
let starGame=confirm('So can we start our guessing game ? ' + ' ' + userName);
if (starGame === true){
  alert('Let\'s gooo');
}else {
  alert('Why!! you can try it '); }

alert ('remember thats yes or no question ');


let questionOne=prompt('Do you think I\'m 25 years old ? ');
console.log(questionOne);
switch(questionOne.toLowerCase()){
case 'yes':
case 'y':
  alert('Thats right I\'m 25 years old');
  break;
case 'no':
case 'n':
  alert('false, what do you think' );
  break;
default:
  break;
}


let questionTwo=prompt('Am I a person who practice handicrafts? ');
console.log(questionTwo);
switch(questionTwo.toLowerCase()){
case 'yes':
case 'y':
  alert('of course, i love handicrafts ');
  break;
case 'no':
case 'n':
  alert('un correct answer');
  break;
default:
  break;
}


let questionThree=prompt('Am I Jordanian ?');
console.log(questionThree);
switch(questionThree.toLowerCase()){
case 'yes':
case 'y':
  alert('Yes , Iam');
  break;
case 'no':
case 'n':
  alert('un correct');
  break;
default:
  break;
}

let questionFour=prompt('Am I a vegetarian person?');
console.log(questionFour);
switch(questionFour.toLowerCase()){
case 'yes':
case 'y':
  alert('Thats not correct, i can eat everything ');
  break;
case 'no':
case 'n':
  alert('correct answer');
  break;
default:
  break;
}


let questionFive=prompt('do I have a bachelors degree in law ? ');
console.log(questionFive);
switch(questionFive.toLowerCase()){
case 'yes':
case 'y':
  alert('False , I have a bachelors degree in computer science');
  break;
case 'no':
case 'n':
  alert('Correct I studied computer science not low');
  break;
default:
  break;
}

alert('Welcome to my website '+userName);


let attempts=4;
let userInput=prompt('try to guess the number between 1 and 20');
while(attempts){
  if (userInput==='13'){
    alert('correct answer!');
    break;
  } else if(userInput<13){
    alert('Too Low');
  } else if(userInput>13){
    alert('Too High try again');
  }
  attempts-=1;
  if (!attempts){
    alert('No attempts remain, the correct num  is 13');
    break;
  }
  userInput=prompt('please try again you have : '+attempts+' remaining!');
}





let galaxyName =['milky way' , 'eye of sauron' , 'black eye galaxy' , 'sunflower galaxy' , 'mice galaxies' , 'antennae galaxies'];
let input=0;
let questionSeven =prompt('Guess one of popular galaxy?');
guessLoop: while(input<6) {
  for (let i = 0; i < galaxyName.length; i++) {
    if (questionSeven === galaxyName[i]) {
      alert('greet you have good knowledge');
      break guessLoop;
    } else if(input!==6){
      questionSeven=prompt('Try again!');
      input++;
    }
  }
}
for (let i = 0; i < galaxyName.length; i++) {
document.write(galaxyName[i]+ ' - ');
}
