AFRAME.registerComponent("boxonclicked", {
  schema: {
    movement: { type: "number", default: 1 },
  },

  tick: function () {
    // Do something on every scene tick or frame.

    window.addEventListener("click",(e)=>{
      this.data.movement += 0.01;
    })
   

    var pos = this.el.getAttribute("position");
    pos.x = this.data.movement;

    this.el.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z });
  },
});
