AFRAME.registerComponent("place-side-view", {
  schema: {},

  init: function () {
    // Do something when component first attached.
    this.createPlaces();
  },

  update: function () {
    // Do something when component's data is updated.
  },

  remove: function () {
    // Do something the component or its entity is detached.
  },

  tick: function () {
    // Do something on every scene tick or frame.
    const placesContainer = document.querySelector("#places-container");

    const { state } = placesContainer.getAttribute("tour");

    if (state === "view" || state === "change-view") {
      this.el.setAttribute("visible", true);
    } else {
      this.el.setAttribute("visible", false);
    }
  },

  createPlaces: function () {
    const sideViewContainer = document.querySelector("#side-view-container");

    let previousXPosition = -131.32114;
    let previousYPosition = 30.66506;

    for (var i = 1; i <= 4; i++) {
      const position = {
        x: (previousXPosition += 50),
        y: (previousYPosition += 2),
        z: -54.37539,
      };
      const entityEl = this.createPlaceThumbNail(position, i);
      sideViewContainer.appendChild(entityEl);
    }
  },

  createPlaceThumbNail: function (position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("id", `place-${id}`);
    entityEl.setAttribute("geometry", {
      primitive: "circle",
      radius: 2.5,
    });
    entityEl.setAttribute("material", {
      src: "./assets/helicopter.png",
      opacity: 0.9,
    });
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("cursor-listener", {});

    return entityEl;
  },
});
