// Terrain Rotation

AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
  },

  init: function () {
    // Do something when component first attached.
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.key === "d") {
        if (this.data.speedOfRotation < 0.1) {
          this.data.speedOfRotation += 0.01;
        }
      }

      if (e.key === "ArrowLeft" || e.key === "a") {
        if (this.data.speedOfRotation > -0.1) {
          this.data.speedOfRotation -= 0.01;
        }
      }
    });
  },

  update: function () {
    // Do something when component's data is updated.
  },

  remove: function () {
    // Do something the component or its entity is detached.
  },

  tick: function () {
    // Do something on every scene tick or frame.
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z,
    });
  },
});

// Airplane Rotation

AFRAME.registerComponent("plane_controls", {
  schema: {
    movementRotation: { type: "number", default: 0 },
    movementPosition: { type: "number", default: 0 },
  },

  init: function () {
    // Do something when component first attached.

    window.addEventListener("keydown", (e) => {
      this.data.movementRotation = this.el.getAttribute("rotation");
      this.data.movementPosition = this.el.getAttribute("position");

      var planeRot = this.data.movementRotation;
      var planePos = this.data.movementPosition;

      if (e.key === "ArrowRight" || e.key === "d") {
        if (planeRot.x < 10) {
          planeRot.x += 0.5;
          this.el.setAttribute("rotation", planeRot);
        }
      }

      if (e.key === "ArrowLeft" || e.key === "a") {
        if (planeRot.x >     -10) {
          planeRot.x -= 0.5;
          this.el.setAttribute("rotation", planeRot);
        }
      }

      if (e.key === "ArrowUp" || e.key === "w") {
        if (planeRot.z < 20) {
          planeRot.z += 0.5;
          this.el.setAttribute("rotation", planeRot);
        }
        if (planePos.y < 2) {
          planePos.y += 0.01;
          this.el.setAttribute("position", planePos);
        }
      }

      if (e.key === "ArrowDown" || e.key === "s") {
        if (planeRot.z > -10) {
          planeRot.z -= 0.5;
          this.el.setAttribute("rotation", planeRot);
        }
        if (planePos.y > -2) {
          planePos.y -= 0.01;
          this.el.setAttribute("position", planePos);
        }
      }
    });
  },

  update: function () {
    // Do something when component's data is updated.
  },

  remove: function () {
    // Do something the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  },
});
