//Drum button Number
var numOfDrumBtn = document.querySelectorAll(".drum").length;

// ######## Taknig Input through Screen button Clicked ########## //
//Loop Condition for the Click recieved
for(let i=0; i<numOfDrumBtn; i++){

    //Assiging the buttons to the Sounds:
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    btnAnimation(buttonInnerHTML);


    });
}

// ########## Assiging Keyboards key ########## //
//Take Action acord the Key Pressed
document.addEventListener("keydown", function (event){
 makeSound(event.key);
 btnAnimation(event.key);
})


//Function for checking which button is Pressed/Clicked in the Keyboard/Screen.
function makeSound(key){
  switch (key) {
    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick.mp3");
      kick.play();
      break;
    default:console.log(buttonInnerHTML);

    }
}


// #### Button Animation ######### //
function btnAnimation(currentKey){
  var activeBtn = document.querySelector("."+currentKey);
  activeBtn.classList.toggle("pressed");
  setTimeout(function(){
    activeBtn.classList.toggle("pressed");
  }, 150)
}
