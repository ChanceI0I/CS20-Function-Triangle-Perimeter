// Triangle Perimeter Assignment Start Code

//Add Event Listener
document.getElementById("btn").addEventListener("click", calculate)

function calculate() {
    //Get all the input value
    let xa = document.getElementById("xa").value;  
    let ya = document.getElementById("ya").value;
    let xb = document.getElementById("xb").value;
    let yb = document.getElementById("yb").value;
    let xc = document.getElementById("xc").value;
    let yc = document.getElementById("yc").value;

    //Using dist() get the length for three sides
    document.getElementById("AB").innerHTML = dist(xa, xb, ya, yb);   
    document.getElementById("AC").innerHTML = dist(xa, xc, ya, yc);
    document.getElementById("BC").innerHTML = dist(xb, xc, yb, yc);
    //Add them us and get the perimeter
    document.getElementById("Perimeter").innerHTML = dist(xb, xc, yb, yc)+dist(xa, xc, ya, yc)+dist(xa, xb, ya, yb); 
}

function dist(x1, x2, y1, y2) {
    //Calculate the distence between given two points
    let distance = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2))
    return distance
}