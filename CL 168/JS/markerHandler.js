var tableNumber = null;

AFRAME.registerComponent("marker-handler", {
  schema: {},

  init: async function () {
    if (tableNumber === null) {
      this.askTableNumber();
    }
    // Do something when component first attached.
    this.el.addEventListener("markerFound", () => {
      if (tableNumber !== null) {
        var markerId = this.el.id;

        console.log("marker is found");
        this.handleMarkerFound(dishes, markerId);
      }
    });

    this.el.addEventListener("markerLost", () => {
      console.log("marker is Lost");
      this.handleMarkerLost();
    });
  },

  handleMarkerFound: function (dishes, markerId) {
    //Getting today's day
    var todaysDate = new Date();
    var todaysDay = todaysDate.getDay();
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    var dish = dishes.filter((dish) => dish.id === markerId)[0];

    if (dish.unavailable_days.includes(days[todaysDay])) {
      swal({
        icon: "warning",
        title: dish.dish_name.toUpperCase(),
        text: "This dish is not available today!!!",
        timer: 2500,
        buttons: false,
      });
    } else {
      //Changing Model scale to initial scale
      var model = document.querySelector(`#model-${dish.id}`);
      model.setAttribute("position", dish.model_geometry.position);
      model.setAttribute("rotation", dish.model_geometry.rotation);
      model.setAttribute("scale", dish.model_geometry.scale);

      //Update UI conent VISIBILITY of AR scene(MODEL , INGREDIENTS & PRICE)
      model.setAttribute("visible", true);

      var ingredientsContainer = document.querySelector(
        `#main-plane-${dish.id}`
      );
      ingredientsContainer.setAttribute("visible", true);

      var priceplane = document.querySelector(`#price-plane-${dish.id}`);
      priceplane.setAttribute("visible", true);

      //Changing button div visibility
      var buttonDiv = document.getElementById("button-div");
      buttonDiv.style.display = "flex";

      var ratingButton = document.getElementById("rating-button");
      var orderButton = document.getElementById("order-button");

      //handling click events
      ratingButton.addEventListener("click", function () {
        swal({
          icon: "warning",
          title: "Rate Dish",
          text: "Work In progress",
        });
      });

      orderButton.addEventListener("click", function () {
        swal({
          icon: "https://i.imgur.com/4NZ6uLY.jpg",
          title: "Thanks for order",
          text: "Order will be serverd soon",
        });
      });
    }
  },

  handleMarkerLost: function () {
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "none";
  },

  askTableNumber: function () {
    var iconUrl =
      "https://raw.githubusercontent.com/whitehatjr/menu-card-app/main/hunger.png";
    swal({
      title: "Welcome to Hunger!!",
      icon: iconUrl,
      content: {
        element: "input",
        attributes: {
          placeholder: "Type your table number",
          type: "number",
          min: 1,
        },
      },
      closeOnClickOutside: false,
    }).then((inputValue) => {
      tableNumber = inputValue;
    });
  },
});
