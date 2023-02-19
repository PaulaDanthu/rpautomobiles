//////// Page Vendus, a carousel of cards with photos //////////

// Declaration of all global variables

let buttonForwardCars   = document.querySelector(".btn-fwd-cars");
let buttonBackCars      = document.querySelector(".btn-back-cars");
let carCardDisplay;

// Creating an array
let carCard1            = document.querySelector(".car-card1");
let carCard2            = document.querySelector(".car-card2");
let carCard3            = document.querySelector(".car-card3");
let carCard4            = document.querySelector(".car-card4");
let carCard5            = document.querySelector(".car-card5");
let carCard6            = document.querySelector(".car-card6");
let carCard7            = document.querySelector(".car-card7");
let carCard8            = document.querySelector(".car-card8");
let carCard9            = document.querySelector(".car-card9");
let carCard10           = document.querySelector(".car-card10");
let carCard11           = document.querySelector(".car-card11");
let carCard12           = document.querySelector(".car-card12");
let carCard13           = document.querySelector(".car-card13");
let carCard14           = document.querySelector(".car-card14");
// let carCard15           = document.querySelector(".car-card15");
// let carCard16           = document.querySelector(".car-card16");
// let carCard17           = document.querySelector(".car-card17");
// let carCard18           = document.querySelector(".car-card18");
// let carCard19           = document.querySelector(".car-card19");
// let carCard20           = document.querySelector(".car-card20");
// let carCard21           = document.querySelector(".car-card21");
// let carCard22           = document.querySelector(".car-card22");
// let carCard23           = document.querySelector(".car-card23");
// let carCard24           = document.querySelector(".car-card24");
// let carCard25           = document.querySelector(".car-card25");
// let carCard26           = document.querySelector(".car-card26");
// let carCard27           = document.querySelector(".car-card27");
// let carCard28           = document.querySelector(".car-card28");
// let carCard29           = document.querySelector(".car-card29");
// let carCard30           = document.querySelector(".car-card30");
// let carCard31           = document.querySelector(".car-card31");
// let carCard32           = document.querySelector(".car-card32");
// let carCard33           = document.querySelector(".car-card33");
// let carCard34           = document.querySelector(".car-card34");
// let carCard35           = document.querySelector(".car-card35");
// let carCard36           = document.querySelector(".car-card36");
// let carCard37           = document.querySelector(".car-card37");
// let carCard38           = document.querySelector(".car-card38");


const carCardsArray     = [carCard1, carCard2, carCard3, carCard4, carCard5, carCard6, carCard7, carCard8, carCard9, carCard10, carCard11, carCard12, carCard13, carCard14];

// Loop for running the array cardsArray, setting up the index of displayed card if the card contains a class "visible"

for(i = 0; i < carCardsArray.length; i++){
    if(carCardsArray[i].classList.contains("visible")){
        carCardDisplay = i;
    }
}

// Function permitting switching the cards by clicking the button Forward. Once clicked, assign the class "visible" to the card that we want to display and at the same time assign the class "invisible" to the curently displayed card

function displayCarCardsForward(){

    carCardsArray[carCardDisplay].classList.add("invisible");
    carCardsArray[carCardDisplay].classList.remove("visible");

    if(carCardDisplay == carCardsArray.length-1){
        carCardDisplay = -1;
    }
    carCardDisplay ++;

    carCardsArray[carCardDisplay].classList.add("visible");
    carCardsArray[carCardDisplay].classList.remove("invisible");
    
}

// The inverse of the previous function. The same method working in the back by clicking the button Back

function displayCarCardsBack() {

    carCardsArray[carCardDisplay].classList.add("invisible");
    carCardsArray[carCardDisplay].classList.remove("visible");

    if(carCardDisplay == 0){
        carCardDisplay = carCardsArray.length;
    }
    
    carCardDisplay --;
    
    carCardsArray[carCardDisplay].classList.add("visible");
    carCardsArray[carCardDisplay].classList.remove("invisible");
}

// Time interval permits to run the diaporama automatically 

let timer = setInterval(displayCarCardsForward, 3000);

// Event listeners for the buttons Forward and Back

//buttonForwardCars.addEventListener("click", displayCarCardsForward);
//buttonBackCars.addEventListener("click", displayCarCardsBack);
