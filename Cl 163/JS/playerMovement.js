AFRAME.registerComponent("player-movement", {
  schema: {},

  init: function () {
    // Do something when component first attached.
    this.walk();
  },

  walk: function () {
    window.addEventListener("keydown", (e) => {
      if (
        e.key === "ArrowUp" ||
        e.key === "ArrowDown" ||
        e.key === "ArrowUp" ||
        e.key === "ArrowRight"
      ) {
        var entity = document.querySelector("#sound2");
        entity.components.sound.playSound();
      }
    });
  },
});
