const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minuts");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
    let hour = new Date().getHours()
    let minit = new Date().getMinutes()
    let second = new Date().getSeconds()
    let ampm = "PM"

    if (hour > 12) {
        hour = hour - 12;
        ampm = "pm";
    }

    hour = hour < 10 ? "0" + hour : hour;
    minit = minit < 10 ? "0" + minit : minit;
    second = second < 10 ? "0" + second : second;


    hourEl.innerText = hour;
    minuteEl.innerText = minit;
    secondEl.innerText = second;
    ampmEl, (innerText = ampm);
    setTimeout(() => {
        updateClock()
    }, 1000)


}
updateClock()