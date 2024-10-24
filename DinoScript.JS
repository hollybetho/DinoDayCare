//alert ("Pssst...You're dinosaur is (probably) the best!");

//put an onclick event for the button to run this code

document.getElementById("calc").onclick = function (){
    //store the number of days in a variable.
let days = document.getElementById("days").value;
    //store the  cost per day based on the size into a variable
let DinoType = document.getElementById("DinoType").value;
    //calculate the total cost by multiplying
let cost = days * DinoType; 
    //print the answer out to the div
    document.getElementById("answer").textContent = "cost: $" + cost
}