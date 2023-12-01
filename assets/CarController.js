cc.Class({
    extends: cc.Component,

    properties: {
        xStart: 0,
        yStart: -450,
        yTarget: 0,
        speed: 120,

        isComing: false,
        scale: 1,
        counter: 0,
    },

    start() {
        this.node.y = this.yStart;
    },

    update(dt) {
        if (this.isComing && this.node.y < this.yTarget) {
            this.node.y += this.speed * dt;
            this.counter += this.speed * dt;
            
            const scaleFactor = Math.max(0, 1 - this.counter / 450);
            this.node.scaleX = scaleFactor;
            this.node.scaleY = scaleFactor;
        }
    },
});
