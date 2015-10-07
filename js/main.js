/* ==========================================================================
   Author's custom scripts
<<<<<<< HEAD
   ========================================================================== */

 /* var name = "Student";
 var age = 21;
 var profession = "Graphic Designer";

 var nombre = prompt('What is your new name?'),
 	 edad = 21,
 	 profesion = "disenador grafico";

console.log('Hi my name is ' + name + ' and I am ' + age + ' and by trade I am a ' + profession); */

// ====Week 1 & 2 ====

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

// =====Week 3====
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

console.log('***************************************************');

// ====Week 4====
function My_character(character_name, level, faction, race, alignment, player_name) {
    this.character_name = character_name;
    this.level = level; 
    this.faction = faction;
    this.race = race;
    this.alignment =  alignment;
    this.player_name = player_name; 
};

var trump = new My_character("Donald_Trump", "Lying_Politician_5.0", "The_99_Percent", "His_own", "Far_right", "Amy");

console.log(trump);
console.log('***************************************************');
console.log('***********************');

function Attributes(category, strength, dexterity, constitution, intelligence, wisdom, charisma, passive_wisdom) {
    this.category = category;
    this.strength = strength;
    this.dexterity = dexterity; 
    this.constitution = constitution; 
    this.intelligence = intelligence; 
    this.wisdom = wisdom; 
    this.charisma = charisma;
    this.passive_wisdom = passive_wisdom;
};

var strengths_weaknesses = new Attributes("STRENGTHS_WEAKNESSES", "+3", "-1", "+2", "+0", "+1", "+2", "13");

console.log(strengths_weaknesses);
console.log('***************************************************');
console.log('***********************');

var saving_throws = new Attributes("SAVING_THROWS", "+5", "-2", "+3", "+1", "-5", "0"); 

console.log(saving_throws);
console.log('***************************************************');
console.log('***********************');

var skills = {category:"SKILLS", acrobatics:"-1", animal_handling:"+1", arcana:"+0", athletics:"+5", deception:"+2", history:"+2", insight:"+1", intimidation:"+2", investigation:"+0"};

console.log(skills);
console.log('***************************************************');
console.log('***********************');

var attacks = new Object();
attacks.supercoolattack_one = "kungfu_hustle";
attacks.supercoolattack_two = "dance_off";
attacks.supercoolattack_three = "sucker_punch";
attacks.supercoolattack_four = "super_saiyan";
attacks.supercoolattack_five = "numchucks";
attacks.supercoolattack_six = "pinch_poke";
attacks.supercoolattack_seven = "trump_hair"
attacks.supercoolattack_eight = "pouty_lip_smirk"

console.log(attacks);
console.log('***************************************************');
console.log('***********************');

var equip = {category:"EQUIPMENT", armor:"suit", accessory:"tie", weapon_of_choice:"the_apprentice", secondary_weapon:"real_estate", headquarters:"trump_tower", obession:"beauty_pageants"};

console.log(equip);
console.log('***************************************************');
console.log('***********************');

var traits = new Object();
traits.category = "TRAITS";
traits.fighting_style = "yelling";
traits.defense_tactics = "name_calling";

console.log(traits);
console.log('***************************************************');