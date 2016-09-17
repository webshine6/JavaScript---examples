/**
 * Created by Ramona on 16.8.2016 г..
 */
function quadratic(a, b, c) {
    var d = Math.pow(b,2) - (4*a*c);

    var x1 = (-b + Math.sqrt(d))/(2*a);
    var x2 = (-b + Math.sqrt(d))/(2*a);

    if (d<0) {
        console.log("No real roots");
    }else if (d==0) {
        console.log("x = " + x1)
    }else  {
        console.log("x1 = "+ x1 + " x2="+x2);
    }
}
