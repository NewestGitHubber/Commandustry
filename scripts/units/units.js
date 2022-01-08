const weapons = require("units/weapons");

const v3 = extend(UnitType, "v3", {});
v3.constructor = () => extend(MechUnit, {});
v3.weapons.add(weapons.v3Weapon);

const scudLauncher = extend(UnitType, "scud-launcher", {});
scudLauncher.constructor = () => extend(MechUnit, {});
scudLauncher.weapons.add(weapons.scudWeapon);
//harvester
const dongBaoA = extend(UnitType, "harvester", {});
dongBaoA.constructor = () => extend(UnitEntity, {});

//export for unit pad script
module.exports = {
    dongBaoA:dongBaoA
}