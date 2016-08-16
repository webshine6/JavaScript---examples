/**
 * Created by Ramona on 16.8.2016 г..
 */

function buildTable(arr){

    var start = arr[0];
    var end = arr[1];

    var table = "<table>\n<tr><th>Num</th><th>Square</th><th>Fib</th></tr>";

    function fibonacciChecker(num){
        var i;
        var fib = [];

        fib[0] = 0;
        fib[1] = 1;

        var start = 2;
        var end = 6;

        for(i=2; i<=end-start+1 ;i++) {
            fib[i] = fib[i-2] + fib[i-1];
        }

        if (fib.indexOf(num) != -1) {
            return "yes";
        }else  {
            return "no";
        }
    }

    for(var i = start; i<=end; i++){
        var numberSquare = i*i;
        var isFibonacci = fibonacciChecker(i);
        var newRaw = '\n<tr><td>' +i + '</td><td>' + numberSquare + '</td><td>' + isFibonacci + '</td></tr>'
        table +=newRaw;
    }
    table +='\n</table>';
    console.log(table);
}

var arr = [2,6];
buildTable(arr);