const { Weapon } = require("./models");
const { Armor } = require("./models");
const { AdventureGear } = require("./models");
const { MagicItem } = require("./models");

// Weapon.insertMany({
//     name: "Flaming Poisoning Raging Sword Of Doom",
//     description: "It features a gigantic blade wreathed in flames with a crooked, oozing scorpion’s stinger affixed to its point. Deals an extra 20 melee damage.",
//     cost: {
//         amount: 60000,
//         coins: "gold"
//     },
//     stats: {
//         damageType: "Melee",
//         diceAmount: "+20"
//     }
// })
// .then((newWeapon) => {
//     console.log(newWeapon);
// })
// .catch((error) => {
//     console.log("Issue with schema", error);
// });

// Armor.insertMany(
//     {
//     name: "Phantom Fist",
//     description: "This left-handed heavy plate gauntlet gives the wearer a bonus on unarmed attacks. The gauntlet also projects a spectral hand around itself that knocks enemies back 2d4 feet.",
//     cost: {
//         amount: 400,
//         coins: "gold"
//     },
//     stats: "Bonus on unarmed attacks. knocks enemies back 2d4 feet"
// },
// {
//     name: "Shield of Heroic Memories",
//     description: "This perfectly round silver shield initially has a mirror finish. As a hero takes it into battle, it remembers the enemies encountered, gaining a +1 to AC on any subsequent battle with creatures of that type. The events of the battle are intricately engraved onto the shield’s surface (which has a seemingly endless capacity for detail).",
//     cost: {
//         amount: 1200,
//         coins: "gold"
//     },
//     stats: "+1 AC to any type of creature the shield has encountered in the past. The bearer of the shield may also attempt to recount past battles (real or imagined) to the shield. Upon a DC 10 charisma check or DC 15 bluff check, the shield confers a +1 AC against the creatures described in the tall tales. 3 failed attempts at recounting stories cause the shield to be cleared of all of its memories. The engravings disappear as it reverts to its mirror finish. All bonuses are lost."
// })
// .then((newArmor) => {
//     console.log(newArmor);
// })
// .catch((error) => {
//     console.log("Issue with schema", error);
// });

// AdventureGear.insertMany(
//     {
//     name: "Stone of Farspeech",
//     description: "basically a fantasy walkie-talkie or, if you prefer, a fantasy smartphone.",
//     cost: {
//         amount: 100,
//         coins: "gold"
//         }
//     },
//     {
//     name: "Scuttle Buddy",
//     description: "The Scuttle Buddy is a mechanical beetle that could be wound up and used as a scout, spy, or conversational partner (though he won't have anything interesting to say). Scuttle Buddy is limited to four uses.",
//     cost: {
//         amount: 500,
//         coins: "gold"
//         }
//     },
//     {
//     name: "Lens of Straight Creepin’",
//     description: "Allows the user to find footprints, tracks or markings of any person or thing that has traveled through the area recently once per day.",
//     cost: {
//         amount: 700,
//         coins: "gold"
//         }
//     },
//     {
//     name: "Tarantula Bracelet",
//     description: "Once per day, the Tarantula Bracelet bestows Spider Climb on the wearer for ten minutes and renders their movements while climbing completely silent, granting them advantage on stealth rolls. To be clear, the wearer will sling no webs.",
//     cost: {
//         amount: 800,
//         coins: "gold"
//         }
//     },
//     {
//     name: "Rickle Axager's Pocket Guide to Adventuring, Third Edition",
//     description: "Once per day, one can read a section on an associated skill check, and for the next 24 hours, have Advantage on it. And one can also read that aloud to give the Advantage to another party member.",
//     cost: {
//         amount: 1100,
//         coins: "gold"
//         }
//     },
// )
// .then((newAdventureGear) => {
//     console.log(newAdventureGear);
// })
// .catch((error) => {
//     console.log("Issue with schema", error);
// });

// MagicItem.insertMany({
//     name: "The Slicer of T’pire Weir Isles",
//     description: "a stone which, on a successful Persuasion check, can be traded to anyone for the most valuable thing they have in their possession.",
//     cost: {
//         amount: 900,
//         coins: "gold"
//     },
//     // stats: ""
// })
// .then((newMagicItem) => {
//     console.log(newMagicItem);
// })
// .catch((error) => {
//     console.log("Issue with schema", error);
// });