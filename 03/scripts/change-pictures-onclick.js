/**
 * Created by Ramona on 21.8.2016 г..
 */

var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if(mySrc == 'images/Free_Mind.png') {
        myImage.setAttribute('src','images/Free_Mind_2.png');
    }else {
        myImage.setAttribute('src','images/Free_Mind.png');
    }
};