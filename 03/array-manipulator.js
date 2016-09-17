/**
 * Created by Ramona on 17.8.2016 г..
 */

var input = ["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka",
             { bunniesCount : 10},
             [10, 20, 30, 40]];

function filterNumbers() {
    return input.filter(function (e) {
        return !isNaN(e);
    })
}

function sortNumbers() {
    var arr = filterNumbers(input);

    var arrSorted = arr.sort(function (a,b) {
        return a<b;
    });

    return arrSorted;
}


function getMinMaxElement(type) {
   var arr = sortNumbers();

   if(type == 'min') {
     return  arr.pop();
   }
    return arr.shift();

}


console.log(filterNumbers(input));
console.log("Min number: " + getMinMaxElement('min'));
console.log("Max number: " + getMinMaxElement('max'));

