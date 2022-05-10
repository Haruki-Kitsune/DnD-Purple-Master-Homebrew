var iFileName = "Will of the wisps - Homebrew.js";
RequiredSheetVersion("12.999");


SpellsList["will of the wisps"] = {
    name : "Will o' Wisps",
    classes : ["sorcerer", "wizard"],
    source : ["HB", 0],
    level : 1,
    school : "Illus",
    time : "1 a",
    range : "90 ft",
    components : "V,S",
    duration : "Instantaneous",
    save : "Wis",
    description : "3+1/SL Wisps will do 1d4 Psychic dmg when target fails his Wis save",
    descriptionFull : "You create three illusionary blue flames in the mind of your target called Wisps. The target needs to make a Wisdom saving throw. On a failed save, it takes 1d4 Psychic damage per Wisp." + "\n   " + "\bAt Higher Levels\b: When you cast this spell using a spell slot of 2nd level or higher, you can create one more Wisp for each slot above 1st.",
};
