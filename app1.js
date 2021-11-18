// let username = prompt('Driver 1 Please Enter Your Name!');

// console.log(username);

function askUserQuestion(){
    let userNameInside = prompt('Driver 1 Please Enter Your Name!');

    if(userNameInside == 'Matt'){
        document.write('Welcome Racing Prodigy ' + userNameInside)
    } else {
        document.write('Welcome ' + userNameInside)
    }
    return userNameInside;

}

let usserNameOutside = askUserQuestion();
console.log(usserNameOutside);