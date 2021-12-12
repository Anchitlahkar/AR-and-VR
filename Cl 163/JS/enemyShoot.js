AFRAME.registerComponent("enemy-bullets", {
  schema: {},

  init: function () {
    // Do something when component first attached.
    setInterval(this.shootEnemyBullet, 10000);
  },

  shootEnemyBullet: function () {
    var els = document.querySelectorAll(".enemy");

    for (var i = 0; i < els.length; i++) {
      //enemybullet entity
      var enemy_bullet = document.createElement("a-entity");
      enemy_bullet.setAttribute("geometry", {
        primitive: "sphere",
        radius: 0.1,
      });
      enemy_bullet.setAttribute("material", "color", "#282B29");

      var position = els[i].getAttribute("position");
      enemy_bullet.setAttribute("position", {
        x: position.x + 1.5,
        y: position.y + 3.5,
        z: position.z,
      });

      var scene = document.querySelector("#scene");
      scene.appendChild(enemy_bullet);

      //shooting direction
      var enemy = els[i].object3D;
      var player = document.querySelector("#weapon").object3D;

      var position1 = new THREE.Vector3();
      var position2 = new THREE.Vector3();

      player.getWorldPosition(position1);
      enemy.getWorldPosition(position2);

      //set the velocity and its direction

      var direction = new THREE.Vector3();
      direction.subVectors(position1, position2).normalize();

      enemy_bullet.setAttribute("velocity", direction.multiplyScalar(10));

      enemy_bullet.setAttribute("dynamic-body", {
        mass: 0,
        shape: "sphere",
      });

      var element = document.querySelector("#countLife");
      var playerLife = parseInt(element.getAttribute("text").value);

      //collide event on enemy bullets
      enemy_bullet.addEventListener("collide", function (e) {
        if (e.detail.body.el.id === "weapon") {
          if (playerLife > 0) {
            playerLife -= 1;
            element.setAttribute("text", {
              value: playerLife,
            });
          }
          if (playerLife <= 0) {
            //show text
            var txt = document.querySelector("#over");
            txt.setAttribute("visible", true);

            //remove tanks
            var tankEl = document.querySelectorAll(".enemy");

            for (var i = 0; i < tankEl.length; i++) {
              scene.removeChild(tankEl[i]);
            }
          }
        }
      });
    }
  },
});
