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
//copter t1
const dongBaoB = extend(UnitType, "copter-c", {
    draw(unit){
        this.super$draw(unit)
        Draw.rect(
            Core.atlas.find("commandustry-copter-c-blade"),
            unit.x + Angles.trnsx(unit.rotation, 6),
            unit.y + Angles.trnsy(unit.rotation, 6),
            Time.time * 15
        )
        Draw.rect(
            Core.atlas.find("commandustry-copter-c-top"),
            unit.x + Angles.trnsx(unit.rotation, 6),
            unit.y + Angles.trnsy(unit.rotation, 6),
            unit.rotation - 90
        )
    }
});
dongBaoB.constructor = () => extend(UnitEntity, {});
//export for unit pad script
module.exports = {
    dongBaoA:dongBaoA
}