///////// Page Offre, creation of interactive cards //////////

// Declaration of all global variables

let card            = document.querySelector(".card");
let buttonForward   = document.querySelector(".btn-fwd");
let buttonBack      = document.querySelector(".btn-back");
let card1           = document.getElementById("card1");
let card2           = document.getElementById("card2");;
let card3           = document.getElementById("card3");;
let cardDisplay;
let y=0;

// Array with cards

const cardsArray = [card1, card2, card3];

// Loop for running the array cardsArray, setting up the index of displayed card if the card contains a class "visible"

for(i = 0; i < cardsArray.length; i++){
    if(cardsArray[i].classList.contains("visible")){
        cardDisplay = i;
    }
}

// Function permitting switching the cards by clicking the button Forward. Once clicked, assign the class "visible" to the card that we want to display and at the same time assign the class "invisible" to the curently displayed card

function displayOfferCardsForward(){
    console.log("Button forward click");

    cardsArray[cardDisplay].classList.add("invisible");
    cardsArray[cardDisplay].classList.remove("visible");

    if(cardDisplay == cardsArray.length-1){
        cardDisplay = -1;
    }
    cardDisplay ++;

    cardsArray[cardDisplay].classList.add("visible");
    cardsArray[cardDisplay].classList.remove("invisible");
}

// The inverse of the previous function. The same method working in the back by clicking the button Back


function displayOfferCardsBack() {
    console.log("Button back click");

    cardsArray[cardDisplay].classList.add("invisible");
    cardsArray[cardDisplay].classList.remove("visible");

    if(cardDisplay == 0){
        cardDisplay = cardsArray.length;
    }
    
    cardDisplay --;
    
    cardsArray[cardDisplay].classList.add("visible");
    cardsArray[cardDisplay].classList.remove("invisible");
}

// Event listeners for the buttons Forward and Back

buttonForward.addEventListener("click", displayOfferCardsForward);
buttonBack.addEventListener("click", displayOfferCardsBack);


