const calculateBtn = document.querySelector("#button-calculate");
const sideInputs = document.querySelectorAll(".side-input");
const messageDisplay = document.querySelector("#show-message");
let counter = 0 ;
const sumOfSquareOfSides = (side1 , side2) =>  counter = side1 * side1 + side2 * side2 ;

const calculateHypotenuse = () => {
    const a = Number(sideInputs[0].value);
    const b = Number(sideInputs[1].value);
    if(a > 0 && b > 0)
    {
        const sumOfSidesSq = sumOfSquareOfSides(Number(sideInputs[0].value), Number(sideInputs[1].value));
        messageDisplay.innerText =`The value of Hypotenuse B is :  + ${(Math.sqrt(sumOfSidesSq)).toFixed(2)}`;
    
    }else{
        messageDisplay.innerText ="Please, Enter valid inputs";
    }
}

calculateBtn.addEventListener("click" , calculateHypotenuse);