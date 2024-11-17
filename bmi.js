let form = document.getElementById("form")



form.addEventListener( "submit", function(e) {
    e.preventDefault();
let form = document.getElementById("form")


form.addEventListener( "submit", function(e) {
    e.preventDefault();

let gender= document.getElementById("gender");
let male= document.getElementById("male")
let female= document.getElementById("female")
let age= document.getElementById("age").value;
let heightFt= parseInt(document.getElementById("heightFt").value);
let heightIn= parseInt(document.getElementById("heightIn").value);
let weight= parseFloat(document.getElementById("weight").value);
let button= document.getElementById("button");
let result= document.getElementById("result");
gender= "unknown"
if(male.checked){
    gender.value= "Male"
}
else if (female.checked) {
gender.value= "Female"
}

let heightConvInch = 12 * heightFt
let height= heightConvInch + heightIn
let heightInMet= height * 0.0254

bmi= weight / (heightInMet ** 2)
bmiRes = "";

    if (bmi < 18.5){
        bmiRes= "underweight"
    }
    else if(bmi >= 18.5 && bmi< 24.9){
        bmiRes= "Normal"
    }
    else {
        bmiRes = "overweight"
    }

result.innerHTML= `Your BMI is ${bmi.toFixed(2)} <br> You are ${bmiRes}`


})
let gender= ""

let male= document.getElementById("male")
let female= document.getElementById("female")

if(male.checked){
    gender.value= "Male"
}
else if (female.checked) {
gender.value= "Female"
}


let age= document.getElementById("age").value;
let heightFt= parseInt(document.getElementById("heightFt").value);
let heightIn= parseInt(document.getElementById("heightIn").value);
let weight= parseFloat(document.getElementById("weight").value);
let button= document.getElementById("button");
let result= document.getElementById("result");

let heightConvInch = 12 * heightFt
let height= heightConvInch + heightIn
let heightInMet= height * 0.0254

bmi= weight / (heightInMet ** 2)
bmiRes = "";

    if (bmi < 18.5){
        bmiRes= "underweight"
    }
    else if(bmi >= 18.5 && bmi< 24.9){
        bmiRes= "Normal"
    }
    else {
        bmiRes = "overweight"
    }

result.innerHTML= `Your BMI is ${bmi.toFixed(2)} <br> You are ${bmiRes}`


})

