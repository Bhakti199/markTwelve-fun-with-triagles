const calculateBtn = document.querySelector("#button-calculate");
const sideInputs = document.querySelectorAll(".side-input");
const messageDisplay = document.querySelector("#show-message");

function sumOfSquareOfSides( side1 , side2){
        const counter = side1 * side1 + side2 * side2 ;
        return counter; 
}

function calculateHypotenuse(){
    const a = Number(sideInputs[0].value);
    const b = Number(sideInputs[1].value);
    if(a > 0 && b > 0)
    {
        const sumOfSidesSq = sumOfSquareOfSides(Number(sideInputs[0].value), Number(sideInputs[1].value));
        const resultFinal = Math.sqrt(sumOfSidesSq);
        messageDisplay.innerText ="The value of Hypotenuse B is : " +  resultFinal.toFixed(2);
       
    }else{
        messageDisplay.innerText ="Please, Enter valid inputs";
    }
}

calculateBtn.addEventListener("click" , calculateHypotenuse);