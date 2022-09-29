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
    let AB = dist(xa, ya, xb, yb);
    let AC = dist(xa, ya, xc, yc);
    let BC = dist(xb, yb, xc, yc);

    //Change HTML element
    document.getElementById("AB").innerHTML = AB;   
    document.getElementById("AC").innerHTML = AC;
    document.getElementById("BC").innerHTML = BC;

    //Add them up and get the perimeter
    document.getElementById("Perimeter").innerHTML = AB + AC + BC;
}

function dist(x1, y1, x2, y2) {
    //Calculate the distence between given two points
    let distance = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2))
    return distance
}