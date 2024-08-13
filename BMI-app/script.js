// declare variable to access elements from html file

let w;
let h;
let advise;

let button = document.querySelector("button");
button.addEventListener("click", showBmi);

function showBmi(){
    let w = document.getElementById("weight").value;
    let h = document.getElementById("height").value;
    let advise = document.getElementById("advise");
    let new_line = document.getElementById("advice");
    let bmi = w/(h*h);
    advise.innerHTML = bmi;
    if(bmi < 18.5){
        new_line.innerHTML = "You are probably malnaurished, Improve diet";
    }
    else if(bmi <= 24.9){
        new_line.innerHTML = "Good job, your BMI is good to go, keep it up";
    }
    else if(bmi <= 30){
        new_line.innerHTML = "You are probably over-weight, Hit the gym";
    }
    else{
        new_line.innerHTML = "You are obesed, please consult a dietitian";
    }
}