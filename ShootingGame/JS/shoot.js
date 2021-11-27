AFRAME.registerComponent("bullets", {
  schema: {},

  init: function () {
    // Do something when component first attached.
    this.shootBullet();
  },

  shootBullet: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "z") {
        var bullet = document.createElement("a-entity");

        bullet.setAttribute("geometry", {
          primitive: "sphere",
          radius: 0.1,
        });

        bullet.setAttribute("material", "color", "black");

        var cam = document.querySelector("#camera");

        pos = cam.getAttribute("position");

        bullet.setAttribute("position", {
          x: pos.x,
          y: pos.y,
          z: pos.z,
        });

        bullet.setAttribute("dynamic-body", {
          shape: "sphere",
          mass: "0",
        });

        var camera = document.querySelector("#camera").object3D;

        //get the camera direction as Three.js vector
        var direction = new THREE.Vector3();
        camera.getWorldDirection(direction);

        bullet.setAttribute("velocity", direction.multiplyScalar(-10));

    

        var scene = document.querySelector("#scene");

        bullet.addEventListener("collide", this.removeBullet);

        scene.appendChild(bullet);
      }
    });
  },

  removeBullet: function (e) {
    //e.detail.target.el
    //Original entity(bullet)
    console.log(e.detail.target.el);
    //Other entity which bullet touched
    console.log(e.detail.body.el);

    //bullet element
    var element = e.detail.target.el;

    var elementHit = e.detail.body.el;

    if (elementHit.id.includes("box")) {
      elementHit.setAttribute("material", {
        opacity: 0.6,
        transparent: true,
      });


          // applyImpulse(impulse,worldPoint)
        //impulse-It is the amount of impulse to add to the body
        //worldPoint- It is the point at which the force is applied.
        //new CANNON.Vec3()--->creating new object
        //e CANNON.Vec3().copy()


        var impulse = new CANNON.Vec3(-2,2,1)
        var worldPoint = new CANNON.Vec3().copy(
          elementHit.getAttribute("position")
        )

        elementHit.body.applyImpulse(impulse, worldPoint)

      //remove event listener
      element.removeEventListener("collide", this.shoot);

      //remove the bullets from the scene
      var scene = document.querySelector("#scene");
      scene.removeChild(element);
    }
  },
});
