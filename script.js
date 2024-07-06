var month = document.querySelector(".month");
var day = document.querySelector(".day");
var date = document.querySelector(".date");
var year = document.querySelector(".year");

var now = new Date();

var months = ["january","February","March","April","May","June","July","August","September","Octomber","November","December"]
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

month.innerHTML = months[now.getMonth(10)]
day.innerHTML = days[now.getDay()]
date.innerHTML = now.getDate()
year.innerHTML = now.getFullYear()