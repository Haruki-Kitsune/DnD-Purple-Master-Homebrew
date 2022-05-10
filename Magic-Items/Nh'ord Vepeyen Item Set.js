var iFileName = "Nh'ord Vepeyen Item Set";
RequiredSheetVersion("13.0.6");

MagicItemsList["hidden location helm"] = {
	name : "Hidden Location Helm",
	sortname : "Helm, Hidden Location",
	nameAlt : "Helm of Nh'ord Vepeyen",
	source : ["HB", 0],
	type : "armor",
	rarity : "uncommon",
	attunement : true,
	allowDuplicates : false,
	description : "While wearing this helm, I have an +1 to AC. In addition, I have advantage on saving throws against curses. I can use this helm as a casting focus.",
	descriptionFull : "While wearing this helm, I have an +1 to AC. In addition, I have advantage on saving throws against curses. I can use this helm as a casting focus.",
    savetxt : {
        text : ["Resistance to Curses"],
        adv_vs : ["Curses"]
    },
    extraAC : [{
        mod : 1,
        magic : true,
    }],
}

MagicItemsList["grimoire of encoding"] = {
    name : "Grimoire of Encoding",
    sortname : "Grimoire, Encoding",
    nameAlt : "Grimoire of Nh'ord Vepeyen",
    source : ["HB", 0],
    type : "wondrous item",
    rarity : "rare",
    attunement : true,
    allowDuplicates : false,
    description : "As an action, command the jug to produce liquid; or an action to uncorked it and pour 2 gal/min. After producing, it only makes the same up to its max, until next dawn. Oil (1 qt), acid (8 fl oz), basic poison (1/2 fl oz), beer (4 gal), honey/wine (1 gal), fresh water (8 gal), mayonnaise/vinegar (2 gal), salt water (12 gal).",
    /*	description // REQUIRED //
        TYPE:	string
        USE:	the text to be filled in the description field of the magic item
    
        Note that the sheet normally uses the first person for this.
        Make sure that this description is not too long and fits on the small description field on the 3rd page.
        The Printer Friendly sheets have less space for Magic Item descriptions than the Colourful versions,
        so use the Printer Friendly sheets to test if the description fits.
    
        Note that the space for magic item descriptions on the overflow is much larger than on the 3rd page, however
        this description needs to fit in the description section on the 3rd page.
    */
        descriptionLong : "A heavy ceramic jug. As an action, the jug can be commanded to hold a chosen liquid. With another action, I can uncork the jug and pour the liquid out at 2 gallons per minute. Once commanded to produce a liquid, it can't produce a different one or more than the maximum of one, until the next dawn.\nLiquids (with maximum): acid (8 fl. oz.), basic poison (1/2 fl. oz.), beer (4 gallons), honey (1 gallon), mayonnaise (2 gallons), oil (1 quart), vinegar (2 gallons), fresh water (8 gallons), salt water (12 gallons), wine (1 gallon).",
    /*	descriptionLong // OPTIONAL //
        TYPE:	string
        USE:	the text to be filled in the description field of the magic item, but only on the overflow page
    
        Use this attribute in addition to the 'description' attribute.
        This attribute will only be used when the magic item is added on the overflow page,
        for the third page the 'description' attribute will be used.
        Only use this attribute if a longer description on the overflow page makes sense.
        There is no reason in having the 'description' and 'descriptionLong' be the same.
    
        Note that the sheet normally uses the first person for this.
        Make sure that this description is not too long and fits on the description field on the overflow page.
        The Printer Friendly sheets have less space for Magic Item descriptions than the Colourful versions,
        so use the Printer Friendly sheets to test if the description fits.
    */
        descriptionFull : "You have a swimming speed of 40 feet while wearing this ring.",
    /*	descriptionFull // OPTIONAL //
        TYPE:	string
        USE:	description of the magic item as it appears in its source
    
        This text is used to populate the tooltip of the magic items so that the original description can be read.
        This description will also be available in a pop-up by using the button in the item's line.
        There is no limit to how big this description can be,
        but very long descriptions will not always display correctly.
    */
        calculate : "event.value = 'I can spend 10 minutes inspiring up to 6 friendly creatures within 30 feet who can see or hear and can understand me. Each gains lvl (' + What('Character Level') + ') + Cha mod (' + What('Cha Mod') + \") temporary hit points. One can't gain temporary hit points from this item again until after a short rest.\";",
    /*	calculate // OPTIONAL //
        TYPE:	string
        USE:	this string is set as the field calculation method for the description field of the magic item
    
        The string is evaluated as JavaScript code whenever anything changes on the sheet.
        To change the value of the field, you will have to set the 'event.value' to something.
        The example above sets the field to a text with calculated numbers in the text,
        the character level and Charisma Modifier.
    
        If this attribute is present, the 'description' and 'descriptionLong' attributes will both be useless.
        Remember that the 'description' attribute is still requires, so you might just want to set it to an empty string:
            description : "",
    */
    /*
        >>>>>>>>>>>>>>>>>>>>>>>>>
        >>> Common Attributes >>>
        >>>>>>>>>>>>>>>>>>>>>>>>>
    
        You can have the magic item affect different parts of the sheet like adding proficiencies,
        adding spellcasting abilities, actions, limited features, etc. etc.
    
        See the "_common attributes.js" file for documentation on how to do those things and more.
        All attributes in there can directly be added in this object.
    */
        spellcastingBonus : [{
            spells : ["encode thoughts"],
            name : "Grimoire of Encoding",  
            selection: ["encode thoughts"],
            firstCol : "oncelr",
            spellcastingAbility : 6,
        },{
            spells : ["distort value"],
            name : "Grimoire of Encoding",  
            selection: ["distort value"],
            firstCol : "oncelr",
            spellcastingAbility : 6,
        },{
            spells : ["silent image"],
            name : "Grimoire of Encoding",  
            selection: ["silent image"],
            firstCol : "oncelr",
            spellcastingAbility : 6,
        },{
            spells : ["silence"],
            name : "Grimoire of Encoding",  
            selection: ["silence"],
            firstCol : "oncelr",
            spellcastingAbility : 6,
        },{
            spells : ["major image"],
            name : "Grimoire of Encoding",  
            selection: ["major image"],
            firstCol : "oncelr",
            spellcastingAbility : 6,
        }],

        calcChanges: {
            atkAdd : [
                function (fields, v) {
			if (v.isSpell) fields.To_Hit_Bonus = (-(What('Cha Mod') + What('Prof')) + 3);
                },
                "",
            ],

            /*	atkAdd // OPTIONAL //
                TYPE:	array with three entries:
                        1st entry:	function or, for backwards-compatibility, string that is evaluated using eval()
                        2nd entry:	optional string that is used to give an explanation of what the 1st entry does
                        3rd entry:	optional number used to determine the order in which to run the functions
                USE:	dynamically change what is put in the fields of an attack entry
                        Note that this is only run for attacks that are recognized, not manually added
                CHANGE:	v13.0.8 (priority, 3rd array entry)
        
                // 1st array entry // REQUIRED //
                Both examples do the exact same thing, just one is a string and the other is a function.
                Writing a function is better as it is easier to avoid syntax errors and will run faster.
                The string option is there for backwards-compatibility and this explanation assumes you are writing a function.
        
                The function will not be evaluated but is fed two variables:
                1)	fields, an object with all the different fields for an attack entry
                    You can change this object to affect what is added to the fields
                    For example, you can change which ability score is used by
        
                    A list of the different attributes of this variable:
                    var fields = {
                        Proficiency, // boolean, whether to check the proficiency box (true) or not (false)
                        Mod, // number, the ability score to select from the drop-down (0 = none, 1 = Str, 2 = Dex, 3 = Con, 4 = Int, 5 = Wis, 6 = Cha)
                        Range, // string, the text to put in the Range field
                        Damage_Type, // string, the text to put in the Damage Type drop-down
                        Description, // string, the text to put in the Description field
                        Description_Tooltip, // string, the text to put in the Description field's tooltip
                        To_Hit_Bonus, // string, the text to put in the modifier field for To Hit
                        Damage_Bonus, // string, the text to put in the modifier field for Damage
                        Damage_Die, // string, the text to put in the modifier field for Damage Die
                        Weight // number, the weight in lb to put in the weight field
                    };
        
                    These values will be set by the recognized weapon.
        
                2)	v, an object with some information about the attack
                    Changing this object will do nothing, but you can use its input to test things
        
                    An explanation of the different attributes of this variable:
                    var v = {
                        WeaponText, // string, both the name and description
                        WeaponTextName, // string, just the name
                        isDC, // boolean, whether or not this attack has a To Hit (false) or a DC (true)
                        isSpell, // boolean, whether (true) or not (false) this attack is a recognized cantrip or spell or has the word 'cantrip' or 'spell' in its name or description. Be aware that something can be both a spell/cantrip and a weapon attack
                        isWeapon, // boolean, whether (true) or not (false) this attack is considered a weapon attack
                        isMeleeWeapon, // boolean, whether (true) or not (false) this attack has a range of 'melee' and is considered a melee weapon attack
                        isRangedWeapon, // boolean, whether (true) or not (false) this attack has a range that doesn't include 'melee' and is considered a ranged weapon attack
                        isNaturalWeapon, // boolean, whether (true) or not (false) this attack has the type 'natural'
                        theWea, // object, the entry as it appears in the WeaponsList object
                        StrDex, // number, either 1 (Str) or 2 (Dex) depending on which of the two ability scores is higher
                        WeaponName, // string, the name of the entry in the WeaponsList object
                        baseWeaponName, // string, the name of the entry in the WeaponsList object that the weapon is based on (or its own name if it is not based on anything)
                        thisWeapon // array, the entry in the CurrentWeapons.known array
                    }
        
                // 2nd array entry // OPTIONAL //
                This has to be a string and will be used to populate the "Things affecting the attack calculations" dialog.
                It you already have either atkCalc or spellCalc in the same feature,
                it is better to fill only one of the second entries and leaving the others at "".
                Filling only one of the explanation strings will result in only a single entry
                for the feature in the "Things affecting the attack calculations" dialog instead of two.
        
                // 3rd array entry // OPTIONAL //
                This has to be a positive number that will be used to prioritise the order in which the functions
                are processed. The lowest number gets processed first.
                Functions with identical numbers are processed alphabetically.
                You do not have to provide this number, by default a value is given by the parent, as follows:
        
                VALUE   	PARENT
                100  		Magic (placeholder for possible future feature)
                200  		Magic Items
                300  		Feats
                400  		Background
                500 + lvl	Race (level only added for features with a `minlevel` attribute)
                600 + lvl	Class (level only added for features with a `minlevel` attribute)
        
                If you do want to give a number to make sure it is processed in the right order, take a look at the
                recommended values below:
        
                VALUE	REASON
                1-10 	When changing the damage die to something else (e.g. Monk's Martial Arts)
                17-20	When changing the critical range to something else (e.g. 18 is used for Fighter (Champion)'s
                        Superior Critical)
                200< 	(199 or less) Something that is best changed before any script is run
                700-899	When dependent on an attribute of the weapon that could be changed by 
                        another feature (e.g. the Rogue's Sneak Attack, because something could theoretically
                        add the Finesse property)
                900+ 	When using the damage die for something in the description (e.g. Half-orc's Savage Attacks)
            */
        }
    }    

MagicItemsList["wand of redirection"] = {
    name : "Wand of Redirection",
    sortname : "Wand, Redirection",
    nameAlt : "Wand of Nh'ord Vepeyen",
    source : ["HB", 0],
    type : "wand",
    rarity : "rare",
    attunement : true,
    allowDuplicates : false,
    description : "While I am attuned this arcane focus, I gain a +2 bonus to spell attack and damage rolls. Furthermore I ignore half cover when making a spell attack.",
    descriptionFull : "While I am attuned this arcane focus, I gain a +2 bonus to spell attack and damage rolls. Furthermore I ignore half cover when making a spell attack.",
    calcChanges: {
        atkAdd : [
            function (fields, v) {
                if (v.isSpell) fields.To_Hit_Bonus += 2;
            },
            "I gain a +2 to my spell attack rolls.",
        ],
        atkCalc : [
            function (fields, v, output) {
                if (v.isSpell) output.extraDmg += 2;
            },
            "I gain a +2 to my spell damage rolls.",
        ],
    }
}
