AFRAME.registerComponent("marker-handler", {
  schema: {},

  init: async function () {
    // Do something when component first attached.
    this.el.addEventListener("markerFound", () => {
      console.log("marker is found");
      this.handleMarkerFound();
    });

    this.el.addEventListener("markerLost", () => {
      console.log("marker is Lost");
      this.handleMarkerLost();
    });
  },

  handleMarkerFound: function () {
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
  },

  handleMarkerLost: function () {
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "none";
  },
});
