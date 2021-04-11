//https://github.com/shahinooriatc/assignment-js/blob/main/assignment.js

// 01 - kilometerToMeter Problem Solving

function kilometerToMeter(kilometer) {
    var getMeter = kilometer * 1000;
    return getMeter;
}
var resultMeter = kilometerToMeter(1);

// Console Output
console.log(resultMeter);

//
// 02 - budgetCalculator Problem Solving
//

function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var getTotalPrice = watchPrice + phonePrice + laptopPrice;
    return getTotalPrice;
}

var budgetResult = budgetCalculator(1, 2, 3);

// Console Output
console.log(budgetResult);

//
// 03 -  hotelCost Problem Solving
//

function hotelCost(dayCount) {
    var totalPrice = 0;
    if (dayCount <= 10) {
        totalPrice = dayCount * 100;
    } else if (dayCount <= 20) {
        var firstStayPrice = 10 * 100;
        var secondStay = dayCount - 10;
        var secondStayPrice = secondStay * 80;
        var totalPrice = firstStayPrice + secondStayPrice;
    } else {
        var firstStayPrice = 10 * 100;
        var secondStayPrice = 10 * 80;
        var thirdStay = dayCount - 20;
        var thirdStayPrice = thirdStay * 50;
        var totalPrice = firstStayPrice + secondStayPrice + thirdStayPrice;
    }
    return totalPrice;
}

var getHotelCost = hotelCost(21);

// Console Output
console.log(getHotelCost);

//
// 04 - megaFriend Problem Solving
//

function megaFriend(friendsName) {
    var longestName = '';
    for (var i = 0; i < friendsName.length; i++) {
        if (longestName.length < friendsName[i].length) {
            longestName = friendsName[i];
        }
    }
    return longestName;
}

// Friends Name
var getMegaFriend = megaFriend([
    'Ahmed Hossain',
    'Amir uddin khan',
    'Panaa Akter',
]);

// Console Output
console.log(getMegaFriend);









































// kilometerToMeter//
var kilomerter = 0;
function kilomerterToMeter(kilomerter){
    var meter = kilomerter/1000;
    return meter;
}



function kilometerTOMeter(kilometer){
    
    if( kilomerter => 0){
        meter = 1000* kilomerter;
        
    }
    else{
        return "invalid input value";
    }
    return meter;
}



// budgetCalculator//


// hotelCost//
var day = 22;
var cost = 0;
if (day <= 10){
    cost = day * 100;
} else if(day <=20){
    var first10day = 10 *100;
    var remaining = day - 10;
    var second10day = remaining * 80;
    cost = first10day + second10day;
}
else{
    var first10day = 10 * 100;
    var second10day = 10 * 80;
    var remaining = day - 20;
    var after20day = remaining * 50;
    cost = first10day + second10day +after20day;
    return cost;
}


// megaFriend//
var friends = megaFriend(["Tomi","ami","amirul","jahidull","shahanalam"]);
  function megaFriend(array) {
    var longestfriend = "";
  
    array.forEach(function(friends) {
      if(friends.length > longestfriend.length) {
        longestfriend = friends;
      }
    });
  
    return longestfriend;
  }
  
