const weapons = require("units/weapons");

const v3 = extend(UnitType, "v3", {}); //fields are defined in its hjson file
v3.constructor = () => extend(MechUnit, {});
v3.weapons.add(weapons.v3Weapon);