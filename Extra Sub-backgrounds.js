var iFileName = "Extra Sub-backgrounds";

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