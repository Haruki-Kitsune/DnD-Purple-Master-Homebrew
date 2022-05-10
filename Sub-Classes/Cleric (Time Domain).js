var iFileName = "Cleric Time Domain - HB.js";
RequiredSheetVersion(12.999);

AddSubClass(
    "cleric", 
    "time domain", 
    {
        regExpSearch: /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(time)).*$/i,
        subname: "Time Domain",
        source: ["HB", 0],
        fullname: "Cleric Time Domain",
        spellcastingExtra: [
            "expeditious retreat","feather fall", // 1st lvl
            "augury", "hold person", // 2nd lvl
            "haste", "slow", // 3rd lvl
            "blight", "divination", // 4th lvl
            "hold monster", "temporal shunt" // 5 lvl
        ],
        features: { 
            subclassfeature1:{
                name: "Bonus Proficiency",
                source: ["HB", 0],
                minlevel: 1,
                description: "\n   I gain proficiency with heavy armor",
                armorProfs: [false, false, true, false],
            },
            "subclassfeature1.1":{
                name: "Glimpse into Time",
                source: ["HB",0],
                minlevel: 1,
                description: desc([
                    "As a reaction, I can give myself advantage on a saving throw",
                    "I can use this reaction a total amount equal to my wisdom modifier (minimum of 1)",
                ]),
                action: ["reaction",""],
                usages: "1, Wisdom modifier per ",
                usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
                recovery: "long rest",
            },
            subclassfeature2:{
                name: "Channel Divinity: Temporal Stasis",
                source: ["HB",0],
                minlevel: 2,
                description: desc([
                    "As an action, I will present my holy symbol to a creature or object I can see in 60 feet",
                    "This creature or object will be incapacitated until the start of my next turn",
                    "While incapacitated the target is immune to all damage and succeeds every saving throw",
                    "The target cannot perceive anything and unable to be moved from its position",
                    "All existing conditions and magical effects are suspended until this effect ends",
                    "Only the 9th level wish spell can undo this",
                ]),
                action: ["action",""],
            },
            subclassfeature6:{
                name: "Improved Glimpse",
                source: ["HB", 0],
                minlevel: 6,
                description: "\n   I can now use my reaction to make someone else within 60 feet benefit from Glimpse into Time",
            },
            subclassfeature8:{
                name: "Potent Spellcasting",
                source: ["P",60],
                minlevel: 8,
                description: "\n   I can add my Wisdom modifier to the damage I deal with my cleric cantrips",
                calcChanges:{
                    atkCalc:[
                        function(e,a,t){
                            classes.known.cleric
                            &&7<classes.known.cleric.level
                            &&a.thisWeapon[3]
                            &&-1!==a.thisWeapon[4].indexOf("cleric")
                            &&0===SpellsList[a.thisWeapon[3]].level
                            &&(t.extraDmg+=What("Wis Mod"))
                        },
                        "My cleric cantrips get my Wisdom modifier added to their damage."
                    ],
                    spellAdd:[
                        function(e,a,t){
                            if(!(-1==t.indexOf("cleric")
                            ||!What("Wis Mod")
                            ||Number(What("Wis Mod"))<=0
                            ||a.psionic
                            ||0!==a.level))
                                return genericSpellDmgEdit(e,a,"\\w+\\.?","Wis")
                        },
                        "My cleric cantrips get my Wisdom modifier added to their damage."
                    ]
                }
            },
            subclassfeature17: {
                name: "Champion of Time",
                source: ["HB", 0],
                minlevel: 17,
                description: desc([
                    "As an action, I can allow a willing creature I can see within 90 feet to repeat their last action",
                    "If this action requires a limited resource, such as a racial or class feature or spell slot",
                    "I must provide this resource myself or this ability fails, Failing to use the ability does not take an action",
                    "Once the ability takes effect, I cannot use this ability until the end of long rest"
                ]),
                action: ["action", ""],
                usages: "1 per ",
                usagescalc: "event.value = 1;",
                recovery: "long rest",
            },
        }
    }
);
