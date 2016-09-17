/**
 * Created by Ramona on 13.9.2016 г..
 */

function truncate(str,maxLength) {
    var newStr = "";

    if(str.length > maxLength) {

        for (var i = 0; i< maxLength - 3;i++) {
            newStr += str.charAt(i);
        }
        newStr += "...";
    }
    else {
        newStr = str;
    }


    return newStr;
}

var test1 = truncate("and here is what I want to say on that matter:", 20);
var test2 = truncate("hi to all!", 20);

var result = test2;
alert(result);