const anglesEntered =document.querySelectorAll("#angle-input");
const checkButton = document.querySelector("#check-button");
const displayMessage = document.querySelector("#show-message");

const isTriangleOrNot = () =>{
  
    if(Number(anglesEntered[0].value) > 0 && Number(anglesEntered[1].value) > 0 && Number(anglesEntered[2].value) >0)
{       const resultSum = calculateSumOfAnglesOfTriangle(Number(anglesEntered[0].value) , Number(anglesEntered[1].value), Number(anglesEntered[2].value));
        
                if(resultSum === 180){
                    displayMessage.innerText = "Yay! The angles entered forms a triangle 🎉🎉"
                }else{
                    displayMessage.innerText = "The angles entered does not form a triangle 💔";
                }

   }else{
        displayMessage.innerText="Please, Enter valid inputs.";
   }
}

const calculateSumOfAnglesOfTriangle = (angle1, angle2, angle3) => sumOfAngles =  angle1 + angle2 + angle3;

checkButton.addEventListener("click", isTriangleOrNot);