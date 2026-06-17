let sec = 0;
let timer;

function updateTime() {
    sec++;

    let hrs = Math.floor(sec / 3600);
    let mins = Math.floor((sec % 3600) / 60);
    let secs = sec % 60;

    document.getElementById("display").innerHTML =
        String(hrs).padStart(2,'0') + ":" +
        String(mins).padStart(2,'0') + ":" +
        String(secs).padStart(2,'0');
}

function start() {
    if (!timer) {
        timer = setInterval(updateTime, 1000);
    }
}

function stopWatch() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    clearInterval(timer);
    timer = null;
    sec = 0;
    document.getElementById("display").innerHTML = "00:00:00";
}
function lap() {
    let lapTime = document.getElementById("display").innerHTML;

    let li = document.createElement("li");
    li.innerText = lapTime;

    document.getElementById("laps").appendChild(li);
}
function darkMode() {
    document.body.classList.toggle("dark");
}