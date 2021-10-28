AFRAME.registerComponent("rotate", {
  schema: {
    rotate: { type: "number", default: 0.1 },
  },

  init: function () {
    // Do something when component first attached.
  },

  update: function () {
    // Do something when component's data is updated.
  },

  remove: function () {
    // Do something the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
    this.data.rotate += 1;

    rot = this.el.getAttribute("rotation");
    rot.x = this.data.rotate;
    rot.y = this.data.rotate;

    this.el.setAttribute("rotation", { x: rot.x, y: rot.y, z: rot.z });
  },
});
