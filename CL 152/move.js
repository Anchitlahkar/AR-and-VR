AFRAME.registerComponent("move", {
  schema: {
    goUp: { type: "number", default: 1 },
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
    this.data.goUp += 0.01;

    pos = this.el.getAttribute("position");
    pos.y = this.data.goUp;

    this.el.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z });
  },
});

// camera
AFRAME.registerComponent("camerazoomout", {
  schema: {
    zoomout: { type: "number", default: 5 },
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
    this.data.zoomout += 0.01;

    pos = this.el.getAttribute("position");
    pos.z = this.data.zoomout;

    this.el.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z });
  },
});

// falldown

AFRAME.registerComponent("falldown", {
  schema: {
    fallDown: { type: "number", default:0 },
  },

  
  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
    window.addEventListener("click", (e) => {
      this.data.fallDown -= 0.00001;
    });

    pos = this.el.getAttribute("position");
    pos.y = pos.y+this.data.fallDown;

    this.el.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z });
  },
});
