// let mycar = prompt('Do you want to see my car at the bottom compared to these other beauties?');

// let picURL = "https://www.kbb.com/wp-content/uploads/make/acura/tlx/2018/tlx-kbb/01-2018-Acura-TLX-Exterior-KBB.jpg?w=768"

// if(mycar.toLowerCase() == "yes"){
// document.write('<img src="' + picURL + '">')
// }

function anotherPictureQuestion(){
    let anotherPicture = prompt('Do you want to see my car at the bottom of this page?');
    let picURL = "https://www.kbb.com/wp-content/uploads/make/acura/tlx/2018/tlx-kbb/01-2018-Acura-TLX-Exterior-KBB.jpg?w=768"
    
    if(anotherPicture.toLowerCase() == "yes"){

        document.write('<img src="' + picURL + '">')
    }
}

anotherPictureQuestion();