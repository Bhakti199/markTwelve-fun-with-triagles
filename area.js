const areaButton = document.querySelector("#button-area");
const sideInputs = document.querySelectorAll(".area-input");
const showMessage = document.querySelector("#show-message");
// let counter = 0;
const calculateArea = ( side1 , side2) =>  counter = 0.5 * side1 * side2 ;


const calculateAreaOfTriangle = () => {
    const a = Number(sideInputs[0].value);
    const b = Number(sideInputs[1].value); 
    
    if(a > 0 && b > 0)
    {
       showMessage.innerText =`The area of triangle is :  ${(calculateArea(a,b)).toFixed(2)}` ;  
    }else{
        showMessage.innerText ="Please, Enter valid inputs";
    }
}

areaButton.addEventListener("click" , calculateAreaOfTriangle);