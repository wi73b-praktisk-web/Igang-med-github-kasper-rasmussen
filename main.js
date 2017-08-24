/*
Øvelse 1:
var navn = "Kasper";
var alder = 16;
console.log(`Mit navn er ${navn} og jeg er ${alder} år gammel.`);
*/

/*
Øvelse 2: 
var moms = "1.25";
var pris_uden_moms = "400";
var pris_med_moms = moms * pris_uden_moms;
console.log(pris_med_moms);

var pris_uden_moms_02 = moms / pris_med_moms;
console.log(pris_uden_moms_02);
*/

/*
Øvelse 3
var forste = 10;
var anden = 20;
var backup = forste;
forste = anden;
anden = backup;
console.log(forste + " " + anden);
*/

//Betingede sætninger, Operatorer og Løkker

/*
Øvelse 1
if(true){
    console.log('kodeblokken udføres');
 }
*/

/*
Øvelse 2
var tal = 8;
if(tal > 6) {
    console.log('Nu køre det');
} else {
    console.log('Glem det');
}
*/

/*
Øvelse 3

var test = true;
var result = test ? "Nu køre det" : "Glem det";
console.log(result);
*/

/*
Øvelse 4
var drink = cola;

if (drink == cola) {
    console.log("COLA!");
} else if(drink == sprite) {
    console.log("Drop det");
}
else {
    console.log("Hvorfor valgte du ikke noget?");
}
*/

/*
Øvelse 5
var drink = "cola";
switch (drink) {
   case "sprite":
      console.log('Sprite er ikke godt');
      break;
   case "fanta":
      console.log('Fanta er slet ikke godt');
      break;
   case "pepsi":
      console.log('Pepsi er overhoved ikke godt');
      break;
    case "cola":
      console.log('Cola er nice!');
      break;
   default:
      console.log('Hvorfor valgte du ikke Cola?');
      break;
}
*/

// Operatorer

/*
Øvelse 1
var et = 1;
var to = 2;
console.log(et + to);
console.log(et / to);
console.log(et * to);
console.log(et / to);
console.log(et % to);
*/

// Løkker

/*
Øvelse 1
for(var i = 0; i < 10; i++){
    console.log(i);
}
*/

// Løkker del 2

/*
Øvelse 1
var navne = ['Jørgen','Bent','Ole','Niels','Kasper','Emil','Hans','Erik'];
navne.forEach(function(navne){
   console.log(navne);
});
*/

/*
Øvelse 2
var navne = ['Kasper Rasmussen','Emil Berg','Bamse og kylling'];
navne.forEach(function(navne, index, arr){
   console.log(navne + ' har placering ' + index);
});
*/

// The arrow function expression (=>)
/*
var sayWhat = value => console.log(value); // Udskriver teksten fra funktionskaldet

sayWhat('var det lige lidt for smart?');
*/


// Arguments og default-values
/*
function add(x = 0, y = 0) {
    console.log(`x er lig med ${x} og y=${y}. Sum: `, x + y);
}
 
add(); //Udskriver "x er lig med 0 og y=0. Sum:  0"
add(3, 8); //Udskriver "x er lig med 3 og y=8. Sum:  11"
*/

// Array som argument

var profil = function (p) {
    return p[0] + " " + p[1] + ": Født " + p[2];
}

var idol = ["Kasper", "Rasmussen", 2000];
console.log(profil(idol));