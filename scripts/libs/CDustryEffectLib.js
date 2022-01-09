const copterCRotor = new Effect(7, e => {
    Draw.z(Layer.flyingUnit + 0.01)
    Draw.alpha(e.fout())
    Draw.rect(Core.atlas.find("commandustry-copter-c-blade"),
        e.data.x + Angles.trnsx(e.data.rotation, 6),
        e.data.y + Angles.trnsy(e.data.rotation, 6),
    e.rotation)
})
const copterARotor = new Effect(5, e => {
    Draw.z(Layer.flyingUnit + 0.01)
    Draw.alpha(e.fout())
    Drawf.spinSprite(Core.atlas.find("commandustry-copter-a-rotator"),
        e.data.x + Angles.trnsx(e.data.rotation, 4.25),
        e.data.y + Angles.trnsy(e.data.rotation, 4.25),
    e.rotation)
})
module.exports = {
    copterCRotor:copterCRotor,
    copterARotor:copterARotor
}