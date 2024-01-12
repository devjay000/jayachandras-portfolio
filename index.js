var tablinks = document.getElementsByClassName("tab-links");
var dyanamicyear = new Date().getFullYear();
let year = document.getElementById("year")
year.innerHTML = dyanamicyear
var tabcontent = document.getElementsByClassName("tab-content");
function opentab(tabname) {
    for (i of tablinks) {
        i.classList.remove("active");
    }
    for (i of tabcontent) {
        i.classList.remove("active");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active");
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyi9bi4HA0vRhyNXjuj4mc8kH7eMpV5E4cQmduJ2j_Uw70dcUMY0yc-8kC5JeTLZs3d/exec'
const form = document.forms['submit-to-google-sheet']
const success = document.getElementById("success")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            success.innerHTML = "Messege sent successfully";
            success.classList.add("active")
            setTimeout(() => {
                success.innerHTML = "";
                success.classList.remove("active")
            }, 3000)
            form.reset();
        })
        .catch(error => console.error('Error! rey', error.message))
})

let closebutton = document.getElementById("close-button")
let menu = document.querySelectorAll("nav ul");
let bt = document.querySelectorAll("nav>i");
function closemenu() {
    menu[0].style.right = '-250px';
    bt[0].style.visibility = "visible";
}

function openmenu() {
    menu[0].style.right = "0";
    bt[0].style.visibility = "hidden";

}
