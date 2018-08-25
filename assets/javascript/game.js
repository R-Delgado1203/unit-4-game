var ruby = 0;
var citrine = 0;
var saphire = 0;
var emerald = 0;
var targetScore = 0;
var wins = 0;
var losses = 0;
var currentScore = 0;

function numGenerator() {
    ruby = Math.floor((Math.random() * 10) + 2);
    citrine = Math.floor((Math.random() * 10) + 2);
    saphire = Math.floor((Math.random() * 10) + 2);
    emerald = Math.floor((Math.random() * 10) + 2);
    targetScore = Math.floor(((Math.random() * 50) + 13));
    currentScore = 0;

    //$("#footer-content").text("");
    $(".target-score").text(targetScore);
    $(".current-score").text(currentScore);
}

function addGems(value) {
    //take currentScore add gem value
    currentScore += value;
}

function crystalCollector(){
    if (currentScore > targetScore){
        losses++; 
        $(".losses").text(losses);
        alert("YOU LOSE!");
        numGenerator();
    }
    else if (currentScore === targetScore){
        wins++;
        $(".wins").text(wins);
        alert("YOU WIN!");
        numGenerator();
    }
}

/* function gameAlert(){
    if (currentScore > targetScore){
        alert("YOU LOSE!");
    }
    else if (currentScore === targetScore){
        alert("YOU WIN!" + " " + currentScore);
    }
} */


numGenerator();

$(document).ready(function () {

    $(".target-score").text(targetScore);

    $("#btn-ruby").click(function () {
        addGems(ruby);
        $(".current-score").text(currentScore);
        //gameAlert();
        crystalCollector();



        console.log("the value of this gem is " + ruby);
        console.log("new current score " + currentScore);
        console.log("---------");
        
    });
    $("#btn-citrine").click(function () {
        addGems(citrine);
        $(".current-score").text(currentScore);
        //gameAlert();
        crystalCollector();



        console.log("the value of this gem is " + citrine);
        console.log("new current score " + currentScore);
        console.log("---------");
    });
    $("#btn-saphire").click(function () {
        addGems(saphire);
        $(".current-score").text(currentScore);
        //gameAlert();
        crystalCollector();


        console.log("the value of this gem is " + saphire);
        console.log("new current score " + currentScore);
        console.log("---------");
    });
    $("#btn-emerald").click(function () {
        addGems(emerald);
        $(".current-score").text(currentScore);
        //gameAlert();
        crystalCollector();


        console.log("the value of this gem is " + emerald);
        console.log("new current score" + currentScore);
        console.log("---------");
    });

})



console.log("Target score: " + targetScore);
console.log("---------");

/* console.log(gem1);
console.log(gem2);
console.log(gem3);
console.log(gem4); */






