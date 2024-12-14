// Steps
// Pehlay div ko id dain
// ID ke base per div ko access karen ge
// tino div ko ek he color dena hai Black light off hain
// Button main function lagao aur document may get karna hai aur button kay click per color change karna hai 
// Curren konsi div per hai us check kar lain aur update karen


// Access karo id kay zariye 
const redLight = document.getElementById("1");
const yellowLight = document.getElementById("2");
const greenLight = document.getElementById("3");

// New varibale assign kiya hai 
let currentLight = "1";

// Light ki Condition
function updateTrafficLight() {
    if (currentLight === "1") {
        redLight.style.backgroundColor = "red";
        yellowLight.style.backgroundColor = "";
        greenLight.style.backgroundColor = "";
    } else if (currentLight === "2") {
        redLight.style.backgroundColor = "";
        yellowLight.style.backgroundColor = "yellow";
        greenLight.style.backgroundColor = "";
    } else if (currentLight === "3") {
        redLight.style.backgroundColor = "";
        yellowLight.style.backgroundColor = "";
        greenLight.style.backgroundColor = "green";
    }
}

// Next Button
document.getElementById("nextBtn").addEventListener("click", function() {
    if (currentLight === "1") {
        currentLight = "2";
    } else if (currentLight === "2") {
        currentLight = "3";
    } else if (currentLight === "3") {
        currentLight = "1";
    }
    updateTrafficLight();
});

document.getElementById("prevBtn").addEventListener("click", function() {
    if (currentLight === "1") {
        currentLight = "3";
    } else if (currentLight === "2") {
        currentLight = "1";
    } else if (currentLight === "3") {
        currentLight = "2";
    }
    updateTrafficLight();
});

updateTrafficLight();
