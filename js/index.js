function changeLocation() {
    alert("Loading weather report....")
}

let cookieAccept = (element) => element.parentElement.remove();

function tempSelect (element) {
    let degrees = Object.values(document.querySelectorAll(".red, .blue"));
    if(element.value === "fahrenheit") {
        for (let i = 0; i < degrees.length; i++) {
            let fahrenheit = Math.floor(parseInt(degrees[i].textContent) * 1.8 + 32);
            degrees[i].textContent = fahrenheit;
        }
    } else if (element.value === "celsuis") {
        for (let i = 0; i < degrees.length; i++) {
        let celsuis = Math.floor((parseInt(degrees[i].textContent) - 32) / 1.8);
        degrees[i].textContent = celsuis;
        }
    }
}