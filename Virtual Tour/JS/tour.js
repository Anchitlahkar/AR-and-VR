AFRAME.registerComponent("tour", {
  schema: {},

  init: function () {
    // Do something when component first attached.
    this.placesContainer = this.el;
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/budapest.jpg",
      },
      {
        id: "eiffel_tower",
        title: "Eiffel Tower",
        url: "./assets/eiffel_tower.jpg",
      },
      {
        id: "new-york-city",
        title: "New York City",
        url: "./assets/new_york_city.png",
      },
    ];
    let previousXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = previousXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      previousXPosition = posX;

      //Border Element
      const borderEl = this.createBorder(item.id, position);

      //ThumbNail Element
      const thumbNail = this.createThumbNail(item);
      borderEl.appendChild(thumbNail);

      //Title Text Element
      const title = this.createTitleEl(position, item);
      borderEl.appendChild(title);

      this.placesContainer.appendChild(borderEl)
    }
  },

  createBorder: function (id, position) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "ring",
      radiusInner: 9,
      radiusOuter: 10,
    });
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", {
      color: "#00bcd4",
      opacity: 0.4,
    });
    return entityEl;
  },

  createThumbNail: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "circle",
      radius: 9,
    });
    entityEl.setAttribute("material", {
      src: item.url,
    });

    return entityEl;
  },

  createTitleEl: function (position, item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "#e65100",
      value: item.title,
    });

    const elPosition = position;
    elPosition.y = -20;

    entityEl.setAttribute("position", elPosition);
    entityEl.setAttribute("visible", true);

    return entityEl;
  },
});
