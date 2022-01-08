const uLib = require("units/units")
const pad = extend(Router, "constructor-pad", {
    load(){
        this.super$load()
        this.unitRegion = Core.atlas.find("commandustry-harvester-full")
        this.topRegion = Core.atlas.find(this.name + "-top")
    }
})
pad.buildType = () => extend(Router.RouterBuild, pad, {
    constructProcess: 0,
    drawWeaveAlpha: 0,
    update(){
        this.super$update()
        this.drawWeaveAlpha = Mathf.lerpDelta(this.drawWeaveAlpha, this.power.status, 0.05)
        if(this.cons.valid() && this.constructProcess <= 1){
            this.constructProcess += this.power.status * Time.delta * this.getProgressIncrease(1200)
        }
        if(this.constructProcess >= 1 && Units.canCreate(this.team, uLib.dongBaoA)){
            uLib.dongBaoA.spawn(this.team, this.x, this.y)
            this.constructProcess = 0
            Fx.flakExplosion.at(this.x, this.y)
        }
    },
    draw(){
        this.super$draw()
        Draw.color(this.team.color)
        Draw.z(Layer.buildBeam)
        Draw.rect(pad.unitRegion, this.x, this.y)
        Draw.alpha(this.drawWeaveAlpha)
        Draw.z(Layer.block + 0.01)
        Lines.lineAngleCenter(this.x + Mathf.sin(Time.time * 3, 20, pad.size * 3.95), this.y, 90, pad.size * 7)
        Draw.z(Layer.block)
        Draw.color()
        Draw.alpha(this.constructProcess)
        Draw.rect(pad.unitRegion, this.x, this.y)
        Draw.z(Layer.block + 0.02)
        Draw.alpha(1)
        Draw.rect(pad.topRegion, this.x, this.y)
    }
})