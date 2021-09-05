const areaButton = document.querySelector("#button-area");
const sideInputs = document.querySelectorAll(".area-input");
const showMessage = document.querySelector("#show-message");

function calculateArea( side1 , side2){
        const counter = 0.5 * side1 * side2 ;
        return counter; 
}

function calculateAreaOfTriangle(){
    const a = Number(sideInputs[0].value);
    const b = Number(sideInputs[1].value);
    if(a > 0 && b > 0)
    {
        const areaOfTri = calculateArea(a,b)
        // const resultFinal = Math.sqrt(sumOfSidesSq);
        showMessage.innerText ="The area of triangle is : " +  areaOfTri ;
       
    }else{
        showMessage.innerText ="Please, Enter valid inputs";
    }
}

areaButton.addEventListener("click" , calculateAreaOfTriangle);