/* ==========================================================================
   Author's custom scripts
   ========================================================================== */


 /* var name = "Student";
 var age = 21;
 var profession = "Graphic Designer";

 var nombre = prompt('What is your new name?'),
 	 edad = 21,
 	 profesion = "disenador grafico";

console.log('Hi my name is ' + name + ' and I am ' + age + ' and by trade I am a ' + profession); */

var charname = "Aragon",
level = "Fighter_1",
background = "Noble",
player_name= "Amy",
faction = "Forest",
race = "Elf",
alignment = "Lawful neutral";

console.log('***************************************************');
var character_information = 'Hi I am ' + charname + ' and I am a ' + level + ' with a background of ' + background; 
console.log(character_information); 

console.log('***************************************************');
var moreinfo = ' My players name is '  + player_name + ' and she is from ' + faction + '\n' + ' while my race is ' + race + ' and my alignment is ' + alignment;

console.log('***********************');
console.log(moreinfo);

console.log('***************************************************');
console.log('***********************');

var expoints = "500",
armorclass = "1000",
strength = "+4",
dexterity = "1",
constitution = "+2",
intelligence = "4",
charisma = "2";

var character_numbers = ' I have ' + expoints + ' experience points, ' + armorclass + ' for armor class, plus ' + '\n' + strength + ' for strength and ' + dexterity + ' for dexterity! ';
console.log(character_numbers);

console.log('***************************************************')

var morestuff= ' My constitution is ' + constitution + ' and I have ' + intelligence + ' for intelligence and ' + '\n' + charisma + ' for charisma! ';
console.log(morestuff);

for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) { 
        console.log('fizzbuzz') 
    }
    else if (i % 5 === 0) { 
        console.log('buzz') 
    }
    else if (i % 3 === 0) { 
        console.log('fizz') 
    }
    else { 
        console.log(i) 
    }
};

for (var i = 99; i >= 1; i--) {

		console.log(i + ' bottles of beer on the wall!')
	};

for (var i = 0; i <= 50; i++) {
	console.log(i * i);
};

var languages = ['druidic', 'dwarven', 'elven', 'gnome', 'orc'];
console.log(languages.slice(0,1));
console.log(languages.slice(1,2));
console.log(languages.slice(2,3));
console.log(languages.slice(3,4));
console.log(languages.slice(4,5)); 


/*document.createElement('element name');*/

