cc.Class({
    extends: cc.Component,

    properties: {
        xStart: 77.34,
        yStart:-830,
        yTarget: 800,
        speed: 150,
        isComing:false,
    },

    start () {
        this.node.y = this.yStart;
    },

    update (dt) {
        if(this.isComing && this.node.y < this.yTarget){
            this.node.y += this.speed*dt;
        }
    },
});