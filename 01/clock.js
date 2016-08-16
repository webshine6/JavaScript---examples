/**
 * Created by Ramona on 16.8.2016 г..
 */
function clock() {
    var now = new Date();

    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();

    document.getElementById('time').innerHTML = hour +":"+min+":"+sec;
}

setInterval("clock()",1000);