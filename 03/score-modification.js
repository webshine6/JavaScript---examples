/**
 * Created by Ramona on 17.8.2016 г..
 */
var input = [200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1];

function requiredScores(score) {
    return (score>0 && score<400);
}

var arr = input.filter(requiredScores);


function percent(arr) {

    for(var i in arr) {
        arr[i] = arr[i] - (arr[i] * (20/100));
    }

    return arr;
}

var reduced =  percent(arr);

console.log(reduced.sort(function (a,b) {
    return a > b;
}));