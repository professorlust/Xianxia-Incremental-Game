/*** Created by KH on 19/03/2017.*/


// Check if Jquery is loaded
if (typeof jQuery === "undefined") {
    console.log("jQuery hasn\"t loaded");
} else {
    console.log("jQuery has loaded");
}

// Variables
let addlog,
    iscultivating = 0,
    isexploring = 0,
    bkfailmin = 0,
    bkfailmax = 0,
    bkloss = 0,
    karma = 0,
    isdead = 0;

let player =
    {
        name: "Stranger",
        bloodline: 0,
        body: 0,
        technique: 0,
        realm: 0,
        cycle: 0,
        cultivateplace: 0,
        strength: 1,
        dexterity: 1,
        vitality: 1,
        luck: 1,
        luckhelper: 1,
        health: 100,
        healthmax: 100,
        regen: 1,
        attack: 30,
        defence: 10,
        cultivation: 0,
        cultivationbase: 1,
        cultivationrate: 1,
        cultivationmax: 100,
        karma: 0,
        knowstechnique1: 0,
        knowstechnique2: 0,
        knowstechnique3: 0,
        knowstechnique4: 0,
        knowstechnique5: 0,
        knowstechnique6: 0,
        knowstechnique7: 0,
        knowstechnique8: 0,
        knowstechnique9: 0,
        spiritstones: 0,
        exploreplace: 0,
        gameloaded: 0

    };

let encountermob = {
    name: "Default",
    id: 0,
    blood: 0,
    attack: 0,
    defence: 0,
    health: 0
};
let treasure = {
    currency: 0,
    spiritstone: 0
};

//Arrays
//Bloodlines: Need Name, Description and Cultivationbonus
_bloodlines = [
    {
        name: "an Ordinary Human Bloodline",
        description: "You possess the bloodline of an ordinary human.",
        cultivationbonus: 1
    }
];

//Realms: Need Name, Description and cultivationmax and a breakthroughchance
_realms = [
    {
        name: "Mortal Realm",
        description: "The first realm in the road of a cultivator.",
        cultivationmax: 100,
        breakthroughchance: 100
    },
    {
        name: "Novice Saint Realm",
        description: "You have ascended the Mortal Realm and started to walk the true path of the Dao.",
        cultivationmax: 1500,
        breakthroughchance: 90
    },
    {
        name: "Profound Saint Realm",
        description: "You start gaining insight on the profoundness of the Dao.",
        cultivationmax: 22500,
        breakthroughchance: 80
    },
    {
        name: "Earth Saint Realm",
        description: "You start gaining insight into the laws of the earth.",
        cultivationmax: 337500,
        breakthroughchance: 70
    },
    {
        name: "Heaven Saint Realm",
        description: "You start gaining insight into the laws of heaven.",
        cultivationmax: 5062500,
        breakthroughchance: 60
    },
    {
        name: "Great Saint Realm",
        description: "You have transcended the laws of heaven and earth and became a Great Saint.",
        cultivationmax: 75937500,
        breakthroughchance: 50
    },
    {
        name: "Novice Emperor Realm",
        description: "Placeholder",
        cultivationmax: 1139062500,
        breakthroughchance: 40
    },
    {
        name: "Profound Emperor Realm",
        description: "Placeholder",
        cultivationmax: 17085937500,
        breakthroughchance: 30
    },
    {
        name: "Earth Emperor Realm",
        description: "Placeholder",
        cultivationmax: 256289062500,
        breakthroughchance: 20
    },
    {
        name: "Heaven Emperor Realm",
        description: "Placeholder",
        cultivationmax: 3844335937500,
        breakthroughchance: 15
    },
    {
        name: "Profound Emperor Realm",
        description: "Placeholder",
        cultivationmax: 57665039062500,
        breakthroughchance: 10
    },
    {
        name: "Great Emperor Realm",
        description: "Placeholder.",
        cultivationmax: 864975585937500,
        breakthroughchance: 5
    },
    {
        name: "Divine Realm",
        description: "Placeholder",
        cultivationmax: 1.29746337890625e+16,
        breakthroughchance: 1
    }
];

//Cycles: Need Name, Description and cultivationmax (multiplier)
_cycles = [
    {
        name: "First Cycle",
        description: "The First Cycle of the ",
        cultivationmax: 1
    },
    {
        name: "Second Cycle",
        description: "The Second Cycle of the ",
        cultivationmax: 2
    },
    {
        name: "Third Cycle",
        description: "The Third Cycle of the ",
        cultivationmax: 3
    },
    {
        name: "Fourth Cycle",
        description: "The Fourth Cycle of the ",
        cultivationmax: 4
    },
    {
        name: "Fifth Cycle",
        description: "The Fifth Cycle of the ",
        cultivationmax: 5
    },
    {
        name: "Sixth Cycle",
        description: "The Sixth Cycle of the ",
        cultivationmax: 6
    },
    {
        name: "Seventh Cycle",
        description: "The Seventh Cycle of the ",
        cultivationmax: 7
    },
    {
        name: "Eighth Cycle",
        description: "The First Eighth of the ",
        cultivationmax: 8
    },
    {
        name: "Ninth Cycle",
        description: "The Ninth Cycle of the ",
        cultivationmax: 9
    }

];

//Bodies: Need Name, Description and cultivationbonus
_bodies = [
    {
        name: "an Ordinary Human Body",
        description: "You possess the body of an ordinary human.",
        cultivationbonus: 1
    }
];

//Cultivationplaces: Need Name, Description and cultivationbonus
_cultivationplaces = [
    {
        name: "Songyan Village",
        description: "Home Village",
        cultivationbonus: 1
    }
];

_explorationplaces = [
    {
        name: "Songyan Forest",
        description: "Forest outside your Home Village",
        treasurerate: 10,
        treasuretier: 1,
        encounterchance: 20,
        encountertier: 1
    }
];

_cultivationtechniques = [
    {
        name: "Mortal Cultivation Technique",
        description: "An ordinary cultivation Technique",
        isknown: 1,
        cultivationbonus: 1,
        level: 1,
        insight: 0,
        insightmax: 100
    },
    {
        name: "Saint Cultivation Technique",
        description: "A cultivation Technique useful for the early Saint Realms",
        isknown: 0,
        cultivationbonus: 10,
        level: 1,
        insight: 0,
        insightmax: 100
    }
];

_currencies = [
    {
        name: "Copper Coin",
        description: "Coins forged out of Copper",
        amount: 0
    },
    {
        name: "Silver Coin",
        description: "Coins forged out of Silver",
        amount: 0
    },
    {
        name: "Gold Coin",
        description: "Coins forged out of Gold",
        amount: 0
    },
    {
        name: "Platin Coin",
        description: "Coins forged out of Platin",
        amount: 0
    },
    {
        name: "Orichalcum Coin",
        description: "Coins forged out of Orichalcum",
        amount: 0
    },
    {
        name: "Copper Tael",
        description: "A tael worth 100 Copper",
        amount: 0
    },
    {
        name: "Silver Tael",
        description: "A tael worth 100 Silver",
        amount: 0
    },
    {
        name: "Gold Tael",
        description: "A tael worth 100 Gold",
        amount: 0
    },
    {
        name: "Platin Tael",
        description: "A tael worth 100 Platin",
        amount: 0
    },
    {
        name: "Orichalcum Tael",
        description: "A tael worth 100 Orichalcum",
        amount: 0
    }
];

_spiritstones = [
    {
        name: "Tainted Spiritstone",
        description: "A tainted Spiritstone",
        amount: 0
    },
    {
        name: "Low Grade Spiritstone",
        description: "A low grade Spiritstone",
        amount: 0
    },
    {
        name: "Mid Grade Spiritstone",
        description: "A low grade Spiritstone",
        amount: 0
    },
    {
        name: "High Grade Spiritstone",
        description: "A low grade Spiritstone",
        amount: 0
    },
    {
        name: "Ultra-High Grade Spiritstone",
        description: "A low grade Spiritstone",
        amount: 0
    }
];

_treasures = [
    {
        name: "Small pouch",
        description: "A small pouch filled with currency",
        currencieslow: 10,
        currencieshigh: 1000,
        spiritstoneslow: 0,
        spiritstoneshigh: 0,
        special: 0
    }
];
_blood = [
    {
        name: "Mixed Blood",
        description: "Blood of mixed races",
        amount: 0
    },
    {
        name: "Wolf's Blood",
        description: "Blood of the ferocious Wolf",
        amount: 0
    },
    {
        name: "Bear's Blood",
        description: "Blood of the mighty Bear",
        amount: 0
    },
    {
        name: "Fox's Blood",
        description: "Blood of the crafty Fox",
        amount: 0
    }
];
_battlemonsters = [
    {
        name: "Wolf",
        description: "A wild carnivorous mammal which is the largest member of the dog family, living and hunting in packs.",
        attacklow: 3,
        attackhigh: 8,
        defencelow: 1,
        defencehigh: 5,
        healthlow: 50,
        healthhigh: 100,
        blood: 1
    },
    {
        name: "Bear",
        description: "Bears are carnivoran mammals of the family Ursida.",
        attacklow: 5,
        attackhigh: 20,
        defencelow: 5,
        defencehigh: 15,
        healthlow: 80,
        healthhigh: 150,
        blood: 2
    },
    {
        name: "Goblin",
        description: "Goblins are short, ugly humanoids that stand just over 3 feet tall.",
        attacklow: 5,
        attackhigh: 10,
        defencelow: 1,
        defencehigh: 10,
        healthlow: 50,
        healthhigh: 100,
        blood: 0
    },
    {
        name: "Fox",
        description: "A crafty mammal which is common in foresty areas.",
        attacklow: 3,
        attackhigh: 8,
        defencelow: 1,
        defencehigh: 5,
        healthlow: 50,
        healthhigh: 100,
        blood: 3
    },
    {
        name: "Rat",
        description: "A giant rat the size of a dog.",
        attacklow: 1,
        attackhigh: 5,
        defencelow: 1,
        defencehigh: 5,
        healthlow: 50,
        healthhigh: 100,
        blood: 0
    },
];

/*
function resetGame() {
    let player =
        {
            name: "Stranger",
            bloodline: 0,
            body: 0,
            technique: 0,
            realm: 0,
            cycle: 0,
            cultivateplace: 0,
            strength: 1,
            dexterity: 1,
            vitality: 1,
            luck: 1,
            luckhelper: 1,
            health: 100,
            maxhealth: 100,
            regen: 1,
            attack: 30,
            defence: 10,
            cultivation: 0,
            cultivationbase: 1,
            cultivationrate: 1,
            cultivationmax: 100,
            karma: 0,
            knowstechnique1: 0,
            knowstechnique2: 0,
            knowstechnique3: 0,
            knowstechnique4: 0,
            knowstechnique5: 0,
            knowstechnique6: 0,
            knowstechnique7: 0,
            knowstechnique8: 0,
            knowstechnique9: 0,
            spiritstones: 0,
            exploreplace: 0,
            gameloaded: 0
        };
}
*/

//On document ready
$(document).ready(function () {
    loadGame();
    updateStats();
    $(".breakthrough").hide();
    $(".fightbtn").hide();
    $(".fleebtn").hide();
    console.log("ready!");

});


//JQUERY
$(function () {

    $(".showcultivationitems").on("click", function () {
        $(".cultivationitems").toggle();
        //noinspection JSJQueryEfficiency
        if ($(".showcultivationitems").text() === "Hide Cultivation Items") {
            $(".showcultivationitems").text("Show Cultivation Items");
        }
        else {
            $(".showcultivationitems").text("Hide Cultivation Items");
        }
    });
    $(".showcultivationtechniques").on("click", function () {
        $(".cultivationtechniques").toggle();
        //noinspection JSJQueryEfficiency
        if ($(".showcultivationtechniques").text() === "Hide Cultivation Techniques") {
            $(".showcultivationtechniques").text("Show Cultivation Techniques");
        }
        else {
            $(".showcultivationtechniques").text("Hide Cultivation Techniques");
        }

    });
    $(".showkeyitems").on("click", function () {
        $(".keyitems").toggle();
        //noinspection JSJQueryEfficiency
        if ($(".showkeyitems").text() === "Hide Keyitems") {
            $(".showkeyitems").text("Show Keyitems");
        }
        else {
            $(".showkeyitems").text("Hide Keyitems");
        }
    });
    $(".showlocations").on("click", function () {
        $(".locations").toggle();
        //noinspection JSJQueryEfficiency
        if ($(".showlocations").text() === "Hide Locations") {
            $(".showlocations").text("Show Locations");
        }
        else {
            $(".showlocations").text("Hide Locations");
        }
    });
    $(".breakthrough").on("click", function () {
        if (player.cultivation >= player.cultivationmax) {
            if (chance.bool({likelihood: _realms[player.realm].breakthroughchance}) === true) {
                if (player.cycle === 8) {
                    player.realm++;
                    player.cycle = 0;
                    addlog = "You have entered a new realm!";
                    $(".breakthrough").toggle();
                }
                else {
                    player.cycle++;
                    addlog = "You have entered a new cycle!";
                    $(".breakthrough").toggle();

                }
                player.cultivation = 0;
            }
            else {
                bkloss = chance.integer({min: bkfailmin, max: bkfailmax});
                player.cultivation -= bkloss;
                addlog = "You failed to breakthrough and lost " + bkloss + " cultivation!";
                $(".breakthrough").toggle();

            }
            appendDOM(addlog);
        }

    });
    $(".cultivatebtn").on("click", function () {
        if (iscultivating === 0) {
            iscultivating = 1;
            isexploring = 0;

        }
        else {
            iscultivating = 0;
        }
    });

    $(".explorebtn").on("click", function () {
        if (isexploring === 0) {
            isexploring = 1;
            iscultivating = 0;

        }
        else {
            isexploring = 0;
        }
    });
    $(".loadbtn").on("click", function () {
        loadGame();
    });
    $(".savebtn").on("click", function () {
        saveGame();
    });
    $(".fleebtn").on("click", function () {
        addlog = "You decided to flee.";
        appendDOM(addlog);
        isexploring = 1;
        $(".fightbtn").toggle();
        $(".fleebtn").toggle();
        $(".explorebtn").toggleDisabled();
    });
    $(".fightbtn").on("click", function () {
        addlog = "You decided to fight.";
        appendDOM(addlog);
        $(".fightbtn").toggle();
        $(".fleebtn").toggle();
        //noinspection JSIgnoredPromiseFromCall
        battle();
    });

});

//Function to update and Bind stats to HTML
function updateStats() {
    $(".playername").html(player.name);
    $(".playerhealth").html(player.health);
    $(".playerhealthmax").html(player.healthmax);
    $(".encountnerhealth").html(encountermob.health);
    $(".tgs").html(_spiritstones[0].amount);
    $(".tgsuse").attr("aria-label", "Adds 10 to Cultivation");
    $(".lgs").html(_spiritstones[1].amount);
    $(".lgsuse").attr("aria-label", "Adds 1'000 to Cultivation");
    $(".mgs").html(_spiritstones[2].amount);
    $(".mgsuse").attr("aria-label", "Adds 100'000 to Cultivation");
    $(".hgs").html(_spiritstones[3].amount);
    $(".hgsuse").attr("aria-label", "Adds 10'000'000 to Cultivation");
    $(".ugs").html(_spiritstones[4].amount);
    $(".ugsuse").attr("aria-label", "Adds 1'000'000'000 to Cultivation");
    $(".playercultivation").html(prettify(player.cultivation));
    $(".playercultivationmax").html(player.cultivationmax);
    $(".playerrealm").html(_cycles[player.cycle].description + _realms[player.realm].name);
    $(".technique0").html(_cultivationtechniques[0].insight + "|" + (_cultivationtechniques[0].insightmax *_cultivationtechniques[0].level) );
    $(".technique0lvl").html(_cultivationtechniques[0].level);
    $(".technique0btn").attr("aria-label", "A Technique that can be learned by anyone");
    $(".cultivatebtn").attr("aria-label", player.cultivationrate + " per second");
    $(".explorebtn").attr("aria-label", "Explore " + _explorationplaces[player.exploreplace].name);
    $(".playerbloodline")
        .html(_bloodlines[player.bloodline].name)
        .attr("aria-label", _bloodlines[player.bloodline].description);
    $(".playerplace")
        .html(_cultivationplaces[player.cultivateplace].name)
        .attr("aria-label", _cultivationplaces[player.cultivateplace].description);
    $(".playerbody")
        .html(_bodies[player.body].name)
        .attr("aria-label", _bodies[player.body].description);
    $(".playertechnique")
        .html(_cultivationtechniques[player.technique].name)
        .attr("aria-label", _cultivationtechniques[player.technique].description);
    $(".breakthrough").attr("aria-label", _realms[player.realm].breakthroughchance + "% Chance to Breakthrough");
}

//Get Cultivation Max Function
function getCultivationmax() {
    player.cultivationmax = _realms[player.realm].cultivationmax * _cycles[player.cycle].cultivationmax;
    bkfailmin = player.cultivationmax / 25;
    bkfailmax = player.cultivationmax / 3;
}

//Get Cultivationrate Function
function getCultivationrate() {
    player.cultivationrate = (player.cultivationbase + _cultivationplaces[player.cultivateplace].cultivationbonus + (_cultivationtechniques[player.technique].cultivationbonus + _cultivationtechniques[player.technique].level) + (_bloodlines[player.bloodline].cultivationbonus * _bodies[player.body].cultivationbonus))/5;
}

//Cultivation Function
function cultivate() {
    getCultivationrate();
    player.cultivation += player.cultivationrate;
    addlog = "Cultivation increased by " + player.cultivationrate;
    appendDOM(addlog);
    if (chance.bool({likelihood: player.luck / 25}) === true) {
        gainInsight();

    }
    if (player.health < player.healthmax) {
        player.health += player.regen;
        addlog = "Health increased by " + player.regen;
    }
}

//Insight Function
function gainInsight() {
    _cultivationtechniques[player.technique].insight += chance.integer({min: 1, max: 20});
    addlog = "You have gained some Insight on your cultivation technique!";
    appendDOM(addlog);
}

//Explore Function
function explore() {
    if (chance.bool({likelihood: player.luck / 25}) === true) {
        gainInsight();
    }
    if (chance.bool({likelihood: _explorationplaces[player.exploreplace].encounterchance * player.luck * player.luckhelper}) === true) {
        $(".fightbtn").toggle();
        $(".fleebtn").toggle();
        isexploring = 0;
        player.luckhelper = 1;
        addlog = "Battle";
        appendDOM(addlog);
        $(".explorebtn").toggleDisabled();
    }

    if (chance.bool({likelihood: _explorationplaces[player.exploreplace].treasurerate * player.luck}) === true) {
        getTreasure();
        player.luckhelper = 1;
        isexploring = 0;
    }
    if (isexploring === 1) {
        addlog = "You found nothing";
        appendDOM(addlog);
        player.luckhelper += 0.1;
    }
}

//Battle Function
async function battle() {
    switch (_explorationplaces[player.exploreplace].encountertier) {
        case 1:
            encountermob.id = chance.integer({min: 0, max: 4});

    }
    encountermob.name = _battlemonsters[encountermob.id].name;
    encountermob.blood = _battlemonsters[encountermob.id].blood;
    encountermob.attack = chance.integer({
        min: _battlemonsters[encountermob.id].attacklow,
        max: _battlemonsters[encountermob.id].attackhigh
    });
    encountermob.defence = chance.integer({
        min: _battlemonsters[encountermob.id].defencelow,
        max: _battlemonsters[encountermob.id].defencehigh
    });
    encountermob.health = chance.integer({
        min: _battlemonsters[encountermob.id].healthlow,
        max: _battlemonsters[encountermob.id].healthhigh
    });
    while (encountermob.health > 0) {
        encountermob.health -= player.attack - encountermob.defence;
        addlog = encountermob.name + " took " + (player.attack - encountermob.defence) + " damage!";
        appendDOM(addlog);
        await sleep(1000);

        if (encountermob.attack - player.defence > 0) {
            player.health -= encountermob.attack - player.defence;
            addlog = player.name + " took " + (encountermob.attack - player.defence) + " damage!";
            appendDOM(addlog);
            await sleep(1000);

        }
        else {
            addlog = "Your defences are superior, you took no damage!";
            appendDOM(addlog);
            await sleep(1000);

        }
        if (player.health <= 0) {
            addlog = "You died!";
            appendDOM(addlog);
            isdead = 1;
            break;
        }
        if (encountermob.health <= 0) {
            getLoot(encountermob.blood);
            updateStats();
        }

    }
    $(".explorebtn").toggleDisabled();
}

function getLoot(input){
    _blood[input].amount += 1;
    addlog = "You have extracted some " + _blood[input].name;
    appendDOM(addlog);
}
//Get treasure Function
function getTreasure() {
    switch (_explorationplaces[player.exploreplace].treasuretier) {
        case 1:
            if (player.knowstechnique1 === 0){
                if (chance.bool({likelihood: _explorationplaces[player.exploreplace].treasurerate * player.luck}) === true){
                    player.knowstechnique1 = 1;
                    addlog = "You found the Saint Cultivation Technique!";
                    appendDOM(addlog);
                    break;
                }
            }
            else{
                treasure.id = chance.integer({min: 0, max: 0});
                treasure.currency = chance.integer({
                    min: _treasures[treasure.id].currencieslow,
                    max: _treasures[treasure.id].currencieshigh
                });
                addlog = "You found a " + _treasures[treasure.id].name;
                appendDOM(addlog);
                while (treasure.currency >= 100) {
                    if (treasure.currency >= 10000000000) {
                        treasure.currrency = treasure.currency / 100;
                        _currencies[4].amount++;
                    }
                    else if (treasure.currency >= 100000000){
                        treasure.currrency = treasure.currency / 100;
                        _currencies[3].amount++;
                    }
                    else if (treasure.currency >= 1000000){
                        treasure.currrency = treasure.currency / 100;
                        _currencies[2].amount++;
                    }
                    else if (treasure.currency >= 10000){
                        treasure.currrency = treasure.currency / 100;
                        _currencies[1].amount++;
                    }
                    else {
                        _currencies[0].amount += treasure.currency;
                        treasure.currency = 0;
                    }
                }
                treasure.spiritstone = chance.integer({
                    min: _treasures[treasure.id].spiritstoneslow,
                    max: _treasures[treasure.id].spiritstoneshigh
                });
                while (treasure.spiritstone >= 100) {
                    if (treasure.spiritstone >= 10000000000) {
                        treasure.spiritstone = treasure.spiritstone / 100;
                        _spiritstones[4].amount++;
                    }
                    else if (treasure.spiritstone >= 100000000){
                        treasure.spiritstone = treasure.spiritstone / 100;
                        _spiritstones[3].amount++;
                    }
                    else if (treasure.spiritstone >= 1000000){
                        treasure.spiritstone = treasure.spiritstone / 100;
                        _spiritstones[2].amount++;
                    }
                    else if (treasure.spiritstone >= 10000){
                        treasure.spiritstone = treasure.spiritstone / 100;
                        _spiritstones[1].amount++;
                    }
                    else {
                        _spiritstones[0].amount += treasure.spiritstone;
                        treasure.spiritstone = 0;
                    }
                }


            }


    }
}
// Early Death function
function death() {
    karma = player.realm * 1000 + player.cultivation;
    addlog = "You have died! You lost all your knowledge and gained " + karma + " Karma!";
    appendDOM(addlog);

}
// Game Loop
window.setInterval(function () {
    if (player.name === "Stranger") {
        player.name = chance.pickone(["Shao ", "Xiao ", "Zhen ", "Cheng ", "Tao ", "Xue ", "Yan ", "Yuan ", "Cai ", "Zhao ", "Ming "]);
        player.name = player.name + chance.pickone(["Shi", "Ling", "Tang", "Chen", "Hua", "Feng", "Meng", "Huang", "Xue", "Mu", "Ming", "Bai"]);
    }
    if (_cultivationtechniques[player.technique].insight >= _cultivationtechniques[player.technique].level * _cultivationtechniques[player.technique].insightmax) {
        _cultivationtechniques[player.technique].insight = 0;
        _cultivationtechniques[player.technique].level++;
    }
    getCultivationmax();
    if (player.cultivation >= player.cultivationmax) {
        $(".breakthrough").show();
        iscultivating = 0;
        player.cultivation = player.cultivationmax;

    }
    if (iscultivating === 1) {
        cultivate();
        $(".cultivatebtn").text("Stop Cultivating");
    }
    else {
        $(".cultivatebtn").text("Start Cultivating");
    }
    if (isexploring === 1) {
        explore();
        $(".explorebtn").text("Stop Exploring");

    }
    else {
        $(".explorebtn").text("Start Exploring");
    }

    updateStats();
    saveGame();


}, 1000);

//Random things

// Sleep
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

//ScrollToBottom for the Log
function scrollToBottom() {
    //noinspection JSJQueryEfficiency,JSJQueryEfficiency
    $("#TerminalDOM").scrollTop($("#TerminalDOM")[0].scrollHeight);
}

//Saving and Loading
function saveGame() {
    localStorage.setItem("player", JSON.stringify(player));
    localStorage.setItem("technique", JSON.stringify(_cultivationtechniques));
    localStorage.setItem("currencies", JSON.stringify(_currencies));
    localStorage.setItem("spiritstones", JSON.stringify(_spiritstones));
    localStorage.setItem("blood", JSON.stringify(_blood));
}
function loadGame() {
    $.extend(true, player, JSON.parse(localStorage.getItem("player")));
    $.extend(true, _cultivationtechniques, JSON.parse(localStorage.getItem("technique")));
    $.extend(true, _currencies, JSON.parse(localStorage.getItem("currencies")));
    $.extend(true, _spiritstones, JSON.parse(localStorage.getItem("spiritstones")));
    $.extend(true, _blood, JSON.parse(localStorage.getItem("blood")));

}
function exportGame(){

}
function importGame(){

}

//Tab function
//noinspection JSJQueryEfficiency
$("#myTab a").click(function (e) {
    e.preventDefault();
    $(this).tab("show")
});

//Function to clean log
function cleanDOM() {
    let begin = new Date().getTime();
    let terminal = $("#TerminalDOM")[0];
    while (terminal.firstChild) {
        terminal.removeChild(terminal.firstChild);
    }
    let end = new Date().getTime();

    //noinspection JSJQueryEfficiency
    $("#ResultDOMClean").empty();
    //noinspection JSJQueryEfficiency
    $("#ResultDOMClean").append((end - begin) + "ms");
}

//Function to add log
function appendDOM(addlog) {
    let terminal = $("#TerminalDOM")[0];

    terminal.appendChild(document.createTextNode(addlog));
    terminal.appendChild(document.createElement("br"));
    scrollToBottom()
}

//Disable Toggle Function
(function ($) {
    $.fn.toggleDisabled = function () {
        return this.each(function () {
            let $this = $(this);
            if ($this.attr("disabled")) $this.removeAttr("disabled");
            else $this.attr("disabled", "disabled");
        });
    };
})(jQuery);

function prettify(input){
    let output = Math.round(input * 1000000)/1000000;
    return output;
}