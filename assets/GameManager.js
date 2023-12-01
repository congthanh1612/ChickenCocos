cc.Class({
    extends: cc.Component,

    properties: {
        light: cc.Node,
        car: cc.Node,
        chicken: cc.Node,
        gameStart: false,
    },

    start() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.clickStart, this);
    },

    clickStart() {
        if (!this.gameStart) {
            this.gameStart = true;
            console.log('ASDASDASDASD');
        }
    },

    update(dt) {
        if (this.light.getComponent("LightsController").isGreenLight === true) {
            this.chicken.getComponent("ChickenController").isMoving = true;
            this.car.getComponent("CarController").isComing = true;
        }
    },

});
