var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;

var targetScore = 0;
var wins = 0;
var loss = 0;
var currentScore = 0;

function numGenerator() {
    gem1 = Math.floor((Math.random() * 10) + 2);
    gem2 = Math.floor((Math.random() * 10) + 2);
    gem3 = Math.floor((Math.random() * 10) + 2);
    gem4 = Math.floor((Math.random() * 10) + 2);

    targetScore = Math.floor(((Math.random() * 50) + 13));
}

function addGems(value) {

    //take currentScore add gem value
    currentScore += value;
}

numGenerator();


$(".gem1").on("click", function () {
    addGems(gem1);
    $(".currentScore").text(currentScore);
});
$(".gem2").on("click", function () {
    addGems(gem2);
});
$(".gem3").on("click", function () {
    addGems(gem3);
});
$(".gem4").on("click", function () {
    addGems(gem4);
});





console.log(targetScore);
/* console.log(gem1);
console.log(gem2);
console.log(gem3);
console.log(gem4); */






