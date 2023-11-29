// cc.Class({
//     extends: cc.Component,

//     properties: {
//         properties: {
//             xChicken: 0,
//             yChicken: 0,
//             xCar: 0,
//             yCar: 0,    
//             isAction: false,
//             chicken: cc.Node,

//         },
//     },

//     // onLoad () {
//     //     this.startChickenRunning();
//     // },

//     start() {

//     },

//     update (dt) {
//         if(!this.isAction) return;
//         this.action();
//     },

//     action () {
//         if (this.xCar == 0 || this.xChicken == 0) return;
//         if(Math.abs(this.xChicken - this.xCar) <= 57 && Math.abs(this.yChicken - this.yCar) <= 140) {{
//             this.chicken.getComponent("ChickenController").isDead=true;
//             this.isAction = false;
//         }}
//     }

// });
