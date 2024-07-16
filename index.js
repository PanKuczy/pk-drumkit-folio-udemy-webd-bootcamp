//VARIABLES
var keyLog = "";
var allButtonsList = document.querySelectorAll(".drum");
var allButtonsClasses = ["w", "a", "s", "d", "j", "k", "l"];
var allInstrumentsNames = ["crash","kick","snare","tom1","tom2","tom3","tom4"];

//BUTTON IMAGES
for (i=0; i<7; i++){

    document.getElementsByClassName(allButtonsClasses[i])[0].style.backgroundImage = "url(./images/"+ allInstrumentsNames[i] + ".png)";
}

for (i=0; i<allButtonsList.length; i++){
    allButtonsList[i].addEventListener("click", clickHandle);
}

//CLICK HANDLE FUNCTION
 function clickHandle(){
    var buttonInnerHTML = this.innerHTML;
    for (i=0; i<7; i++){
    switch (buttonInnerHTML) {
 
        case allButtonsClasses[i]: 
            var audioCurrent = new Audio("./sounds/"+allInstrumentsNames[i]+".mp3");
            audioCurrent.play();
            buttonAnimation(allButtonsClasses[i]);
            console.log(this.innerText + " was clicked");
            break;
    
        default:
            break;
        }
    }

 }

 //KEYBOARD HANDLE FUNCTION
 function keyboardHandle(){

    for (i=0; i<7; i++){
    switch (keyLog) {
 
        case allButtonsClasses[i]: 
            var audioCurrent = new Audio("./sounds/"+allInstrumentsNames[i]+".mp3");
            audioCurrent.play();
            buttonAnimation(keyLog);
            console.log(keyLog + " was pressed")
            break;
    
        default:
            break;
        }
    }

 }    

function buttonAnimation (CurrentKey){
    var currentButton = document.getElementsByClassName(CurrentKey)[0];
    currentButton.classList.add("pressed");
    setTimeout(function(){currentButton.classList.remove("pressed");},200);
}

document.addEventListener("keydown", function (event){
    keyLog = event.key;
    keyboardHandle();
});