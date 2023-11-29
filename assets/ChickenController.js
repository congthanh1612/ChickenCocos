cc.Class({
    extends: cc.Component,

    properties: {
        xStart: -400,
        xTarget: 77.34,
        speed: 100,
        isMoving: false,
        isMove: false,
        isDie: false,
        anim: cc.Animation,
        sprite: cc.Sprite, // Thêm một thuộc tính sprite để thay đổi màu
        targetColor: cc.Color.BLACK, // Màu bạn muốn thay đổi thành
    },

    start() {
        this.node.x = this.xStart;
        this.anim = this.getComponent("cc.Animation");
        this.sprite = this.getComponent(cc.Sprite); // Lấy thành phần Sprite
    },

    update(dt) {
        if (this.isMoving && this.node.x < this.xTarget) {
            this.node.x += this.speed * dt;
            if (this.node.x < 20) {
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
