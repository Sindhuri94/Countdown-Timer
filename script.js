
const date_time1 = new Date('January 01, 2024 00:00:00').getTime();  
var f_fun = setInterval(function() {  
 
const date_time2 =  new Date().getTime();  
 
const time_var = date_time1 - date_time2;  
 
const days_data = Math.floor(time_var / (1000 * 60 * 60 * 24));  
 
const hours_data = Math.floor((time_var % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  

const minutes_data = Math.floor((time_var % (1000 * 60 * 60)) / (1000 * 60));  
 
const seconds_data = Math.floor((time_var % (1000 * 60)) / 1000);  
  
document.getElementById("day").innerHTML = days_data;  
document.getElementById("hours").innerHTML = hours_data;  
document.getElementById("minutes").innerHTML = minutes_data;  
document.getElementById("seconds").innerHTML = seconds_data;  
 }, 5);  