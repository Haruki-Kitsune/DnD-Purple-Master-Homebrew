var iFileName = "Earth Spirit Dragons.js";

RequiredSheetVersion("13.0.6");

CreatureList["earth spirit dragon"] = {
	name : "Earth Spirit Dragon",
	source : ["HB", 0],
	size : 5,
	type : "Dragon",
	alignment : "Chaotic Good",
	ac : 16,
	hp : 22,
	hd : [4, 8],
	speed : "30 ft, burrow 15 ft, fly (hover) 60 ft",
	proficiencyBonus : 2,
	challengeRating : "1",
	scores : [15, 12, 13, 14, 11, 13],
	saves : ["", 3, 3, "", 2, 3],
	senses : "Senses Blindsight 10 ft, Darkvision 60 ft",
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [1, 10, "piercing"],
		range : "Melee (5 ft)",
		description : ""
	},
    {
        name : "Acid Breath (Recharge 5-6)",
		ability : 3,
		damage : ["Dex save", "", "acid"],
		range : "20 ft",
		description : "All crea in 5-ft wide line 4d6 acid dmg; Save halfs.",
        dc: true,
        tooltip: "The dragon exhales acid in an 20-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 12 (4d6) acid damage on a failed save, or half as much damage on a successful one."
    },
    {
        name: "Slowing Breath (Recharge 5-6)",
        ability: 3,
        damage: ["Con save", "", ""],
        range: "15 ft",
        description: "15-ft cone of gas; on crea fails save, speed half, make only one atk, action, bns; last 1 min or success save",
        dc: true,
        tooltip: "The dragon exhales gas in a 15-foot cone. Each creature in that area must succeed on a DC 11 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save."
    }],
	skills : {
		"Perception" : 4,
		"Steatlh" : 3
	},
	languages : "Draconic",
    actions : [{
		name : "Acid Breath (Recharge 5-6)",
		description : "The dragon exhales acid in an 20-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 12 (4d6) acid damage on a failed save, or half as much damage on a successful one.",
	},
    {
		name : "Slowing Breath (Recharge 5-6)",
		description : "The dragon exhales gas in a 15-foot cone. Each creature in that area must succeed on a DC 11 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.",
	}],
}
