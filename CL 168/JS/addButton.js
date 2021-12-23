AFRAME.registerComponent("create-buttons", {
  schema: {},

  init: function () {
    // Do something when component first attached.

    // 1. Create the button
    var button1 = document.createElement("button");

    button1.innerHTML = "Rate Us";
    button1.setAttribute("id", "rating-button");
    button1.setAttribute("class", "btn btn-warning");

    //2. Create the button 2
    var button2 = document.createElement("button");
    button2.innerHTML = "Order Now";
    button2.setAttribute("id", "order-button");
    button2.setAttribute("class", "btn btn-warning");

    //Append button elements
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.appendChild(button1);
    buttonDiv.appendChild(button2);
  },
});