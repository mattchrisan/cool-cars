// let username = prompt('Driver 1 Please Enter Your Name!');

// console.log(username);

//End of Javascript Edit1

// function askUserQuestion(){
//     let userNameInside = prompt('Driver 1 Please Enter Your Name!');

//     if(userNameInside == 'Matt'){
//         document.write('Welcome Racing Prodigy ' + userNameInside)
//     } else {
//         document.write('Welcome ' + userNameInside)
//     }
//     return userNameInside;

// }

// let usserNameOutside = askUserQuestion();
// console.log(usserNameOutside);

//End of Javascipt Edit 2

function askUserQuestion(){
    let userNameInside = prompt('Driver 1 Please Enter Your Name!');
    if(userNameInside == 'Matt'){
        document.write('Welcome Racing Prodigy ' + userNameInside)
    } else {
        document.write('Welcome ' + userNameInside)
    }
}

function secretMessage(){
    let userAnswer = prompt('Do you like cool cars? (yes or no)')
    if (userAnswer.toUpperCase() == "YES"){
        document.write('Then take a look at these sweet rides below')
    }
    console.log(userAnswer);
}

function anotherPictureQuestion(){
    let anotherPicture = prompt('Do you want to see my car at the bottom of this page?');
    let picURL = "https://www.kbb.com/wp-content/uploads/make/acura/tlx/2018/tlx-kbb/01-2018-Acura-TLX-Exterior-KBB.jpg?w=768"
    if(anotherPicture.toLowerCase() == "yes"){
        document.write('<img src="' + picURL + '">')
    }
}

//Create a user guessing game
//Get an input from the user
//Loop of some kind
//Conditions for the Loop
//Range of the Answer
//Correct Answer 


function guessingGame(){
    let userAnswer = prompt('Enter a Number 1-100');
    let correctAnswer = 21; // may come back and get a random number
    let attemps = 3;

    for(let i = 1; i < attemps; i++){
        while(userAnswer < 1 || userAnswer > 100){
            userAnswer = prompt('Please Try Again! A number 1-100');
        }
        if(userAnswer == correctAnswer){
            alert('Congratulations!  Your the next contestant on the Price Is Right!');
            document.write("Winner");
            break;
        } else if (userAnswer > correctAnswer){
            userAnswer = prompt('Ah Ah Ah, you didnt guess the magic number!  Too high try again!');
        } else if (userAnswer < correctAnswer){
            userAnswer = prompt('Ah Ah Ah, you didnt guess the magic number!  Too low try again!');
        }
        if(i == 2){
            alert('The correct answer was ' + correctAnswer);
            document.write("Sorry Try Again Next Time");
        }
    }
}

function carRating(){
    let userAnswer = prompt('Enter a number 1-5');
    for(let i = 0; i <= parseInt(userAnswer); i++){
        let picURL = "https://www.kbb.com/wp-content/uploads/make/acura/tlx/2018/tlx-kbb/01-2018-Acura-TLX-Exterior-KBB.jpg?w=768"
        document.write('<img src="' + picURL + '">')
        console.log('Times run: '+ i + ' expected total : ' + userAnswer);
    }
}