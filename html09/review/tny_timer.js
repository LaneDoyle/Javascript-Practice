"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Lane Doyle
   Date:   2/21/2020

*/

showClock();
setInterval("showClock", 1000);

function showClock() {
    var thisDay = new Date("May 19, 2018 9:31:27 AM");
    var localDate = new Date("May 19, 2018");
    var localTime =  new Date("9:31:27 AM");
    document.getElementById("currentTime").innerHTML = "<span>May 19, 2018</span><span>9:31:27 AM</span>";
    var j4Date = nextJuly4(thisDay);
    j4Date.setHours("21:00:00");
    var days = (thisDay.getFullYear() - j4Date) / (1000 * 60 * 60 * 24);
    var hrs = (days - Math.floor(days))* 24;
    var mins = (hrs - Math.floor(hrs)* 60);
    var secs = (mins - Math.floor(mins)* 60);
    document.getElementById("dLeft").textContent = Math.floor(days);
    document.getElementById("hLeft").textContent = Math.floor(hrs);
    document.getElementById("mLeft").textContent = Math.floor(mins);
    document.getElementById("sLeft").textContent = Math.floor(secs);

}

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}