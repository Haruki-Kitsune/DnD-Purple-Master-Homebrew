var iFileName = "Alcoholic";

SourceList["HB"] = {
	name : "Alcoholic Backgrounds",
	abbreviation : "HB",
	url : "https://www.dandwiki.com/wiki/Alcoholic_(5e_Background)"
};

BackgroundList["alcoholic"] = {
	regExpSearch : /^(?=.*alcoholic).*$/i,
	name : "Alcoholic",
	source : ["HB", 0],
	skills : ["Sleight of Hand", "Medicine"],
    skillstxt : "Sleight of Hand and Medicine",
	silver : 5,
    feature : "Temperance",
    toolProfs : ["Brewer's Tools or Thieves' Tools"],
	equipleft : [
		["Heavy blanket", "", 1],
        ["Alcohol, flask with"]
	],
	equipright : [
		["Common clothes", "", 3],
		["Pouch (with coins)", "", 1]
	],
	"variants" : null,

	trait : [
		"I have mastered the art of crocodile tears and use them to get whatever I want from whoever I want.",
		"I live for any distraction from my monotonous life.",
        "I have found that everyone's a lot more attractive after a few drinks.",
        "I find a wooden table to be an easier surface to fall asleep on than a bed.",
        "I find the scent of alcohol to be revolting, but still find myself drawn to it.",
        "I have found that praying to gods has been ineffective, and have decided to give up on religion all together.",
        "I hate confrontation about my problematic behaviors.",
        "I have a very fragile ego and sense of self."
	], 

	ideal : [
		["Self-Serving",
			"Self-Serving: Nobody helped me, so why should I do the same for them? (Evil)"
		],
		["Idealistic",
			"Idealistic: If there's still hope for me, there's hope for anyone. (Good)"
		],
		["Drinking",
			"Drinking: I don't care about much else other than alcohol. (Neutral)"
		],
		["Tempered",
			"Tempered: I find that drinking within reason keeps me sane, but I still need alcohol everyday. (Lawful)"
		],
		["Hedonism",
			"Hedonism: If something's good why shouldn't I pursue it? (Chaotic)"
		],
		["Change",
			"Change: I want to change my ways and be a better person. (Any)"
		]
	],

	bond : [
		"The local barkeep is my only real friend.",
		"I have abandoned my family for alcohol, I want to fix that.",
        "There is at least one night stand who is a bit bitter towards me.",
        "Turning away from alcohol has lost me a lot of my drinking buddies.",
        "I have sequestered myself away to avoid alcohol.",
        "I have at least one illegitimate child from a drinking bender."
	],

	flaw : [
		"I drink to run from my problems.",
        "I owe people a lot of money from when I was drunk.",
        "Loyalty to anyone but alcohol is something I don't get.",
        "I use my drinking as an excuse to be a terrible person.",
        "I think that anyone who chooses not to drink is a sanctimonious jerk.",
        "I blame everyone other than me for my problems."
	],

	extra : [
		"Drink of Choice",
		"Beer",
		"Wine",
		"Rum",
		"Sake",
		"Brandy",
		"Scotch"
	]
};

AddBackgroundVariant("alcoholic", "pitful", {
		regExpSearch : /^(?=.*alcoholic)(?=.*pitful).*$/i,
		name : "Alcoholic (Pitful)",
		source : ["HB", 0],
		feature : "Pitful"
	}
);

AddBackgroundVariant("alcoholic", "strong-headed", {
		regExpSearch : /^(?=.*alcoholic)(?=.*strong)(?=.*headed).*$/i,
		name : "Alcoholic (Strong-headed)",
		source : ["HB", 0],
		feature : "Strong-headed"
	}
);

BackgroundFeatureList["temperance"] = {
	description : "Having already struggled through addiction in the past I know how to identify the signs of addiction, and are better equipped to quit other addictions or help others through their addictions. My demeanor after giving up alcohol may also affect the way different people interact with me.",
	source : ["HB", 0]
};

BackgroundFeatureList["pitful"] = {
	description : "I love alcohol far too much, and find myself forgoing inns for the tavern. As such, I have garnered a form of condescending pity from people and can typically find a place to stay on the condition that I do not drink for the duration of my stay. Whether I hold up my end of the bargain or not is up to me tough.",
	source : ["HB", 0]
};

BackgroundFeatureList["strong-headed"] = {
	description : "I am extremely tolerant of alcohol and have advantage on Constitution checks related to alcohol. I also can consume 3 times that of most people before feeling even a little tipsy.",
	source : ["HB", 0]
};
