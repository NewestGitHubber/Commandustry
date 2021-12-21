const v3Weapon = extend(Weapon, {
    name: "commandustry-v3-missile",
    x: 0,
    y: 0,
    mirror: false,
    rotate: true,
    rotateSpeed: 1.2,
    reload: 210,
    recoil: 0,
    shootY: 1,
    shootSound: Sounds.plasmaboom,
    shake: 4.2,
    draw(unit, mount){
        Draw.alpha(1 - mount.reload / 210);
        this.super$draw(unit, mount);
    }
});

const v3Missile = extend(MissileBulletType, {
    speed: 1.8,
    damage: 80,
    buildingDamageMultiplier: 1.6,
    width: 20,
    height: 20,
    shrinkY: 0.4,
    lifetime: 270,
    sprite: "commandustry-v3-missile",
    drag: -0.002,
    homingRange: 90,
    splashDamage: 150,
    splashDamageRadius: 50,
    hitEffect: Fx.blastExplosion,
    trailColor: Color.valueOf("ffa664"),
    backColor: Color.valueOf("989aa4"),
    frontColor: Color.valueOf("b0bac0"),
    status: StatusEffects.blasted
});

v3Weapon.bullet = v3Missile;

module.exports = {
    v3Weapon: v3Weapon
};