AFRAME.registerComponent("birds", {
  schema: {},

  init: function () {
    // Do something when component first attached.
    for (i = 1; i <= 20; i++) {
      var id = `bird${i}`;

      var posX = Math.random() * 3000 + -1000;
      var posY = Math.random() * 2 + -1;
      var posZ = Math.random() * 3000 + -1000;

      var position = { x: posX, y: posY, z: posZ };

      this.createBirds(position, id);
    }
  },

  createBirds: function (position, id) {
    var bird = document.createElement("a-entity");

    var terrainEL = document.querySelector("#terrain");

    bird.setAttribute("gltf-model", "assets/models/flying_bird/scene.gltf");

    bird.setAttribute("scale", { x: 500, y: 500, z: 500 });

    bird.setAttribute("position", position);
    bird.setAttribute("animation-mixer", {});

    bird.setAttribute("static-body", {
      shape: "sphere",
      sphereRadius: 5,
    });

    bird.setAttribute("id", id);

    terrainEL.appendChild(bird);
  },
});
