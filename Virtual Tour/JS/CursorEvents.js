AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function () {
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
    this.handleClickEvents();
  },

  handlePlacesListState: function () {
    const id = this.el.getAttribute("id");
    const placesId = ["taj-mahal", "budapest", "new-york-city", "eiffel_tower"];
    if (placesId.includes(id)) {
      const placesContainer = document.querySelector("#places-container");
      placesContainer.setAttribute("cursor-listener", {
        selectedItemId: id,
      });
      this.el.setAttribute("material", {
        color: "#D76B30",
        opacity: 1,
      });
    }
  },

  handleMouseEnterEvents: function () {
    //Mouse Enter Events
    this.el.addEventListener("mouseenter", () => {
      this.handlePlacesListState();
    });
  },

  handleMouseLeaveEvents: function () {
    this.el.addEventListener("mouseleave", () => {
      const { selectedItemId } = this.data;

      if (selectedItemId) {
        const el = document.querySelector(`#${selectedItemId}`);
        const id = el.getAttribute("id");

        console.log(el)
        console.log(id)
        
        if (id === selectedItemId) {
          el.setAttribute("material", {
            color: "#00bcd4",
            opacity: 1,
          });
        }
      }
    });
  },

  handleClickEvents: function () {
    this.el.addEventListener("click", (evt) => {
      const placesContainer = document.querySelector("#places-container");
      const { state } = placesContainer.getAttribute("tour");

      if (state === "places-list") {
        const id = this.el.getAttribute("id");
        const placesId = [
          "taj-mahal",
          "budapest",
          "eiffel_tower",
          "new-york-city",
        ];

        if (placesId.includes(id)) {
          placesContainer.setAttribute("tour", {
            state: "view",
            selectedCard: id,
          });
        }
      }
      if (state === "view") {
        this.handleViewState();
      }
      if (state === "change-view") {
        this.handleViewState();
      }
    });
  },

  handleViewState: function () {
    const el = this.el;
    const id = el.getAttribute("id");

    const placesContainer = document.querySelector("#places-container");
    const { selectedItemId } = placesContainer.getAttribute("cursor-listener");
    const sideViewPlacesID = ["place-1", "place-2", "place-3", "place-4"];

    if (sideViewPlacesID.includes(id)) {
      placesContainer.setAttribute("tour", { state: "change-view" });

      const skyEl = document.querySelector("#main-container");
      skyEl.setAttribute("material", {
        src: `./assets/360_images/${selectedItemId}/${id}.jpg`,
        color: "#fff",
      });
    }
  },
});
