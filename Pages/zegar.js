
function zegar(){
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.getElementById("zegar").innerHTML = time;
setInterval(zegar,1000);
}
