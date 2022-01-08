const copterCRotor = new Effect(7, e => {
    Draw.z(Layer.flyingUnit + 0.01)
    Draw.alpha(e.fout())
    Draw.rect(Core.atlas.find("commandustry-copter-c-blade"),
        e.data.x + Angles.trnsx(e.data.rotation, 6),
        e.data.y + Angles.trnsy(e.data.rotation, 6),
    e.rotation)
})
module.exports = {
    copterCRotor:copterCRotor
}