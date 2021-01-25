//https://github.com/shahinooriatc/assignment-js/blob/main/assignment.js

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
  
