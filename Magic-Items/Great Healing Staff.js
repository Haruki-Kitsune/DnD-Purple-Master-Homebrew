var iFileName = "Homebrew Syntax - MagicItemsList.js";

RequiredSheetVersion("13.0.6");

MagicItemsList["staff of purple"] = {
/* 	MagicItemsList object name // REQUIRED //
	TYPE:	string
	USE:	object name of the magic item as it will be used by the sheet
	By adding a new object to the existing MagicItemsList object, we create a new magic item.
	The object name here is 'staff of purple'. You can use any object name as long as it is not already in use.
	If you do use an object name that is already in use, you will be overwriting that object.
	Note the use of only lower case! Also note the absence of the word "var" and the use of brackets [].
*/
	name : "Staff of Purple",
/*	name // REQUIRED //
	TYPE:	string
	USE:	name of the magic item as it will be used by the sheet
	This name will be used to recognize what is selected in the magic item drop-down.
	If you want more options for the magic item to be recognized as, see 'nameAlt' and 'nameTest' below.
*/
	sortname : "Staff, Purple",
/*	name // OPTIONAL //
	TYPE:	string
	USE:	name of the magic item as it will be shown in the menu for selecting magic items
	ADDED:	v13.0.8
	This name will only be used to display the item in the menu.
	This attribute is not used to recognize the item or fill the field on the sheet.
*/
	nameAlt : "Staff of Colour Magic",
/*	nameAlt // OPTIONAL //
	TYPE:	string
	USE:	alternative setting-independent name with which the sheet can recognize the magic item
	This attribute is intended for magic items that have a name that is bound to a specific setting,
	to allow a name that is setting-neutral.
	For example, the "Apparatus of Kwalish" (DMG 151) is named after the legendary wizard "Kwalish" of the Greyhawk setting.
	As not everybody wants to use the Greyhawk name, the name as given in the SRD page 208 "Apparatus of the Crab" is good to provide as the 'nameAlt'
	This name will also be used to recognize what is typed into the magic item drop-down.
	The shortest of the 'name', 'nameAlt', and 'nameTest' attributes will be used for the 'chooseGear' attribute, see below.
*/
	source : ["LE", 0],
	type : "staff",
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
/*
	>>>>>>>>>>>>>>>>>>>>>>>>>
	>>> Common Attributes >>>
	>>>>>>>>>>>>>>>>>>>>>>>>>
	You can have the magic item affect different parts of the sheet like adding proficiencies,
	adding spellcasting abilities, actions, limited features, etc. etc.
	See the "_common attributes.js" file for documentation on how to do those things and more.
	All attributes in there can directly be added in this object.
*/
  action : [
	["action", " Heal (8d8)"],
],
  usages : 1,
  recovery : "2 long rest",
  
}
