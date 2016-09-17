/**
 * Created by Ramona on 21.8.2016 г..
 */
// по азбучен ред, във възходящ ред
var employees=[
    {name:"Sarah", age:62, retiredate:"April 30, 2020"},
    {name:"George", age:32, retiredate:"March 12, 2014"},
    {name:"Edward", age:17, retiredate:"June 2, 2023"},
    {name:"Christine", age:58, retiredate:"December 20, 2036"},

];


var sortedEmpByName = employees.sort(function (a,b) {
    var nameA = a.name.toLowerCase();
    var nameB = b.name.toLowerCase();

    return nameA < nameB;
});

var sortedEmpByDate = employees.sort(function (a,b) {
    var dateA = new Date(a.retiredate);
    var dateB = new Date(b.retiredate);

    return dateA > dateB;
});



for(var i in sortedEmpByDate) {
    console.log(sortedEmpByDate[i]);
}