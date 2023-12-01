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
            // Update position based on speed and delta time
            this.node.y += this.speed * dt;

            // Update counter based on speed and delta time
            this.counter += this.speed * dt;

            // Calculate scale factor based on the counter
            const scaleFactor = Math.max(0, 1 - this.counter / 450);

            // Apply the scale factor to both x and y scales
            this.node.scaleX = scaleFactor;
            this.node.scaleY = scaleFactor;

            // Optionally, you can set 'this.node.active = false;' if you want to deactivate the node when it reaches a certain condition
            // if (this.node.y > 0) {
            //     this.node.active = false;
            // }
        }
    },
});
