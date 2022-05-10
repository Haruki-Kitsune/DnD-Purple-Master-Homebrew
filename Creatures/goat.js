var iFileName = "Homebrew Syntax - CreatureList.js";

CreatureList["tactical goat"] = {
	name : "Tactical Goat",
	source : ["LE", 0],
	size : 3,
	type : "Beast",
	alignment : "Unaligned",
	ac : 9,
	hp : 10,
	hd : [2, 6],
	speed : "45 ft",
	proficiencyBonus : 2,
	proficiencyBonusLinked : true,
	challengeRating : "1/2",
	scores : [14, 10, 10, 2, 6, 4],
	senses : "",
	attacksAction : 1,
	attacks : [{
		name : "Shoot Canon",
		ability : 1,
		damage : [2, 6, "slashing"],
		range : "Melee (5 ft)",
		description : "Two claws attacks as an Attack action"
	}],

	features : [{
		name : "False Appearance",
		description : "While the purple crawler remains motionless, it is indistinguishable from an ordinary purple flower.",
	}],
	actions : [{
		name : "Invisibility",
		minlevel : 5,
		description : "As an action, the purple crawler magically turns invisible until it attacks or casts a spell, or until its concentration ends (as if concentrating on a spell).",
		addMod : [{ type : "skill", field : "all", mod : "max(oCha|1)", text : "The purple crawler adds its master's Charisma modifier (min 1) to all its skill checks." }]
	}],
/*	features // OPTIONAL //
	actions  // OPTIONAL //
	traits   // OPTIONAL //
	TYPE:	array (variable length) with objects
	USE:	add text to the Traits and Features sections on the Companion page

	Each of these three attributes work in the same way.
	Each is an array with objects that have at least two attributes, `name` and `description`, that each contain a string.

	Each name is preceded by a bullet point and followed by a colon and the description when
	added to the right section, for example:
		{
			name : "Invisibility",
			description : "As an action, the purple crawler magically turns invisible until it attacks or casts a spell, or until its concentration ends (as if concentrating on a spell)."
		}
	Will result in:
		◆ Invisibility: As an action, the purple crawler magically turns invisible until it attacks or casts a spell, or until its concentration ends (as if concentrating on a spell).

	If the `description` attribute is not present, no string will be added to the field, but any 

	The three different attributes, traits, features, and actions, are added to different parts of the companion page:

	ATTRIBUTE		ADDED TO SECTION
	 features		 Features
	 actions 		 Traits
	 traits  		 Traits

	Be aware that languages, resistances, vulnerabilities, and immunities are also added to the
	Features section on the companion page and before the features attribute described here.

	The actions are added before traits to the Traits section.

	The array is processed in the order it is in the code, no sorting will take place.

	These text are also displayed on the wild shape page, but all together in the singular Traits & Features section,
	regardless of their `minlevel` attribute value.
	Also, `eval` and `changeeval` are not executed when this creature is selected on the Wild Shape page.
	As the wild shape pages offer limited space, it is recommended to test if all of these and
	the other attributes together will fit.
	If they don't fit (well), consider using the `wildshapeString` attribute, see below.
*/
}
