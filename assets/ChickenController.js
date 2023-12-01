cc.Class({
    extends: cc.Component,

    properties: {
        xStart: -250,
        xTarget: 0,
        yStart:-70,
        speed: 100,
        isMoving: false,
        isMove: false,
        isDie: false,
        anim: cc.Animation,
        sprite: cc.Sprite, 
        targetColor: cc.Color.BLACK, 
    },

    start() {
        this.node.x = this.xStart;
        this.anim = this.getComponent("cc.Animation");
        this.sprite = this.getComponent(cc.Sprite); 
    },

    update(dt) {
        if (this.isMoving && this.node.x < this.xTarget) {
            this.node.x += this.speed * dt;
            if (this.node.x < -3) {
                this.run();
            } else if (this.node.x < this.xTarget) {
                this.die();
                this.changeColor(); 
            }
        }
    },

    run() {
        if (!this.isMove) {
            this.anim.play("ChickenRun");
            this.isMove = true;
        }
    },

    die() {
        if (!this.isDie) {
            this.anim.play("ChickenDie");
            this.isDie = true;
        }
    },

    changeColor() {
        this.sprite.node.color = this.targetColor;
    },
});
