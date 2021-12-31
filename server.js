const express = require("express");
const { Weapon } = require("./models");
const { Armor } = require("./models");
const { AdventureGear } = require("./models");
const { MagicItem } = require("./models");
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.get("/", async (request, response) => {
  try {
    const statement = "check /weapons, /armor, /adventuregear, /magicitem";
    response.json({ statement });
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/weapons", async (request, response) => {
  try {
    const weaponArray = await Weapon.find({});
    response.json({ weaponArray });
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/armor", async (request, response) => {
  try {
    const armorArray = await Armor.find({});
    response.json({ armorArray });
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/adventuregear", async (request, response) => {
  try {
    const adventureGearArray = await AdventureGear.find({});
    response.json({ adventureGearArray });
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/magicitem", async (request, response) => {
  try {
    const magicItemArray = await MagicItem.find({});
    response.json({ magicItemArray });
  } catch (error) {
    response.status(500).send(error);
  }
});

app.listen(3000, () => {
  console.log("You're listening to the smooth sounds of Port 3000");
});
