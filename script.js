const t = new  Date();
const  days = document.querySelector(".day");
const  hours = document.querySelector(".hour");
const  minutes = document.querySelector(".minute");
const  seconds = document.querySelector(".second");


function call (){
    days.innerHTML = t.getDay();
    hours.innerHTML = t.getHours();
    minutes.innerHTML = t.getMinutes();
    seconds.innerHTML = t.getSeconds();
}

call();
