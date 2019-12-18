// variables

const secDiv=document.getElementById('sec');
const minDiv=document.getElementById('min');
const hourDiv=document.getElementById('hour');

// set interval

setInterval(updateClock,1000);

// update clock

function updateClock(){

    let date=new Date();

    // var Date: date;
    // new ()=> Date (+4 overloads);

    let sec=date.getSeconds()/60;
    let min=(date.getMinutes()+ sec)/60;
    let hour=(date.getHours()+min)/12;

// transformation

    secDiv.style.transform = "rotate(" + (sec + 360) + "deg)";
    minDiv.style.transform = "rotate(" + (min + 360) + "deg)";
    hourDiv.style.transform = "rotate(" + (hour + 360) + "deg)"; 
}
updateClock();