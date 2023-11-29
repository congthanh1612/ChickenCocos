cc.Class({
    extends: cc.Component,
    properties: {
        redLight: cc.Sprite,
        yellowLight: cc.Sprite,
        greenLight: cc.Sprite,
        chicken: cc.Node,
        car: cc.Node,
        transitionIndex : 0,
        transitionTime : 0,
        blinkTime : 0,
        blinkCount : 0,
    },

    onLoad() {
        this.setColors();
        this.startLight();
    },

    setColors() {
        this.redLight.node.color = cc.Color.RED;
        this.yellowLight.node.color = cc.Color.YELLOW;
        this.greenLight.node.color = cc.Color.GREEN;
    },

    startLight() {
        this.transitions = [
            { light: this.redLight, duration: 1, blinkCount: 3 },
            { light: this.yellowLight, duration: 1, blinkCount: 3 },
            { light: this.greenLight, duration: 1 },
        ];
    },

    update(dt) {
        this.transitionTime += dt;

        if (this.transitionIndex < this.transitions.length) {
            const currentTransition = this.transitions[this.transitionIndex];

            if (this.transitionTime < currentTransition.duration) {
                this.setLight(currentTransition.light);
            } else if (currentTransition.blinkCount > 0) {
                this.blinkTime += dt;

                if (this.blinkTime >= 0.2) {
                    this.blinkTime = 0;
                    this.blinkLights(currentTransition.light);
                }
            } else {
                this.nextTransition();
            }
        } else {
            this.turnOffAllLights();
            this.greenLight.node.active = true;
            if(this.greenLight.node.active=true){
                this.chicken.getComponent("ChickenController").isMoving=true;
                this.car.getComponent("CarController").isComing=true;
            }
        }
    },

    setLight(light) {
        this.turnOffAllLights();
        light.node.active = true;
    },

    blinkLights(light) {
        light.node.active = !light.node.active;
        this.blinkCount++;

        if (this.blinkCount >= 3 * 2) {
            this.blinkCount = 0;
            light.node.active = true;
            this.nextTransition();
        }
    },

    nextTransition() {
        this.transitionIndex++;
        this.transitionTime = 0;
        this.blinkTime = 0;
    },

    turnOffAllLights() {
        this.redLight.node.active = false;
        this.yellowLight.node.active = false;
        this.greenLight.node.active = false;
    },
});
