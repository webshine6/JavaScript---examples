/**
 * Created by Ramona on 13.9.2016 г..
 */


function checkSpam(str) {
    var checkStr = str.toLowerCase();

    return checkStr.indexOf("viagra") >= 0 || checkStr.indexOf("xxx") >= 0;

}

var checkStr1  = "buy ViAgRA now";
var checkStr2 = "free xxxxx";
var checkStr3  = "innocent rabbit";

var result = checkSpam(checkStr2);

alert(result);