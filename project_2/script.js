function setClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secAngle = (seconds / 60) * 360;
    const minAngle = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourAngle = (hours / 12) * 360 + (minutes / 60) * 30;

    document.getElementById('sec').style.transform = `rotate(${secAngle}deg)`;
    document.getElementById('min').style.transform = `rotate(${minAngle}deg)`;
    document.getElementById('hour').style.transform = `rotate(${hourAngle}deg)`;
 
}
function setdate() {

    const now = new Date();
    const dateString = now.toLocaleDateString();
    let date = document.getElementById("pres_date")
    date.innerHTML = ` Date : ${dateString}` 
}


setInterval(setClock, 1000);
setClock(); // initial call to set the clock right away
setdate();
