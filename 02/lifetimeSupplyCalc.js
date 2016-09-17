/**
 * Created by Ramona on 16.8.2016 г..
 */
function lifetimeSupplyCalc(age,maxAge,food,foodPerDay) {
    var result = (maxAge - age)*365*foodPerDay;
    console.log(result+"kg of "+ food +"would be enough until I am " + maxAge + " years old");
}

// 38
//118
//chocolate
//0.5

// output: 14600kg of chocolate would be enough until I am 118 years old.
lifetimeSupplyCalc(38,118,'chocolate',0.5);
lifetimeSupplyCalc(20,87,'fruits',2);
lifetimeSupplyCalc(16,102,'nuts',1.1);


