function changeLocation() {
    alert("Loading weather report....")
}

let cookieAccept = (element) => element.parentElement.remove();

function tempSelect (element) {
    let degrees = document.querySelectorAll(".red, .blue")
    if (element.value === "fahrenheit") {
        console.log(typeof degrees);
        const converted = degrees.map((item) => {
            return (parseInt(item.textContent) * 1.8 + 32);
        })
    }
}