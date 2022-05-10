var iFileName = "Test Subject [Homedrew].js";
RequiredSheetVersion(12.999);

SourceList["HB"] = {
	name : "Test Subject Background",
	abbreviation : "HB",
	url : "https://www.dandwiki.com/wiki/Test_Subject_(5e_Background)"
};

BackgroundList["test Subject"] = {
	regExpSearch : /^(?=.*test)(?=.*subject).*$/i,
	name : "Test Subject",
	source : ["HB", 0],
	skills : ["Insight", "Intimidation"],
    skillstxt : "Insight and Intimidation",
	gold : 10,
	equipleft : [
		["Alchemist's supplies", "", 8],
		["Poisoner's kit", "", 2]
	],
	equipright : [
        ["Thieves' tools", "", 1],
		["Common clothes", "", 3],
		["Pouch (with coins)", "", 1]
	],
	feature : "First Hand Experience",

	trait : [
		"My captors learned much from my suffering. I see nothing wrong with harsh means for great gains.",
		"I deserved my treatment. I am worth less than other people.",
        "I have seen much. It will take a lot to shock me.",
        "My traumatic experience left me anxious of contact. I react badly to touching.",
        "I believe I was experimented upon because I am special. Others should fear my power.",
        "I will never allow myself to be held down again. I resist any attempt to restrain me.",
        "Some good may come of my experience. I can use my knowledge to make sure none suffer the same fate.",
        "I deal with my nightmares through humor. There is no joke too dark for me."
	], //required; A list of the personality traits that can be chosen using the "Add Features" button on the second page. This list can be any length.

	ideal : [
		["Freedom",
			"Freedom: No one should be held captive, through force or intimidation. Freedom is the ultimate good. (Chaotic)"
		],
		["Retribution",
			"Retribution: Vengeance should be claimed however it can be. Those who cause suffering should suffer, as should anyone around them. (Neutral)"
		],
		["Knowledge",
			"Knowledge: The value of knowledge is without bounds. It must be preserved at any cost. (Lawful)"
		],
		["Experimentation",
			"Experimentation: The thrill of exploring another’s body and soul is a pleasure I crave and deserve. (Evil)"
		],
		["Sacrifice",
			"Sacrifice: Through sacrifice of self, boundless good may be bestowed upon others. (Good)"
		],
		["Nihilism",
			"Nihilism: There are no universal laws. One may do whatever one can. (Chaotic)"
		]
	], //required; A list of the  ideals that can be chosen using the "Add Features" button on the second page. This list can be any length. Take note of the two-step build for every ideal, this is essential!

	bond : [
		"I have no memory of the time before my captivity. I want to learn who I was.",
		"I found a friend in a fellow captive. They are still there and I have to free them.",
        "My master set me free with a purpose. I must fulfil it.",
        "My captor is still looking for me, and will kill me to preserve their secrets. I must kill them before they kill me.",
        "A secret power was extracted from me and used to wreak havoc on others. I must absolve myself by aiding them.",
        "I was freed by the intervention of others. I owe them my freedom, and whatever remains of my sanity."
	], //required; A list of the bonds that can be chosen using the "Add Features" button on the second page. This list can be any length.

	flaw : [
		"All I know is the life of a subject. I am sometimes clueless to the ways of the world.",
        "I am addicted to, and seek pain; sometimes to the detriment of myself and my friends",
        "The experiments left my mind scattered. I often get distracted or derailed.",
        "I am not used to kindness. Every little bit of affection or kindness means unreasonably much to me.",
        "I expect to be recaptured at any time. Some people call me paranoid, I call it cautious.",
        "Even when I mean well, I find it hard to keep my cruelty at bay."
	],  //required; A list of the bonds that can be chosen using the "Add Features" button on the second page. This list can be any length.

    toolProfs : ["Alchemist's supplies", "Thieves' tools", "Poisoner's kit"]
};

BackgroundFeatureList["first hand experience"] = {  //Note the use of only lower case!
	description : "I have experienced countless days of mental, physical, and spiritual agony, and know intimately how I was kept alive through it. While interrogating a living humanoid, I can make sure that any pain I inflict will not kill the individual. Additionally, while perceiving such an individual, I may take at least 30 minutes to attempt (Insight/Arcana/Investigation) to learn any arcane or biological secrets about their body.", //required; the description of the feature as it will be put on the sheet. Make sure that this fits into the field or it won't look so pretty.
	source : ["HB", 0]
};
