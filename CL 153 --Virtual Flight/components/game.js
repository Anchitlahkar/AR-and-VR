AFRAME.registerComponent("game-play", {
  schema: {
    elementID: { type: "string", default: "#ring1" },
  },

  isCollided: function (elementId) {
    const element = document.querySelector(elementId);

    element.addEventListener("collide", (e) => {
      if (elementId.includes("#ring")) {
        console.log(elementId + " collision");

        this.updateTargets();
        this.updateScore();

        element.setAttribute("visible", false);
      } else if (elementId.includes("#birds")) {
        console.log("bird collision");

        this.gameOver();
      }
    });
  },

  init: function () {
    // Do something when component first attached.
    var duration = 120;
    var timerEl = document.querySelector("#timer");
    this.startTimer(duration, timerEl);
  },

  startTimer: function (duration, timerEl) {
    //setInterval(function,millisecond)
    //parseInt()-->used to convert any string to integer numbers

    setInterval(() => {
      if (duration >= 0) {
        minutes = parseInt(duration / 60);
        seconds = parseInt(duration % 60);

        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }

        timerEl.setAttribute("text", {
          value: minutes + ":" + seconds,
        });

        duration -= 1;
      } else {
        this.gameOver();
      }
    }, 1000);
  },

  updateTargets: function () {
    var targetEl = document.querySelector("#targets");
    var count = targetEl.getAttribute("text").value;
    var currentTargets = parseInt(count);

    currentTargets -= 1;

    targetEl.setAttribute("text", { value: currentTargets });
  },

  updateScore: function () {
    var ScoreEl = document.querySelector("#Score");
    var score = ScoreEl.getAttribute("text").value;
    var updateScore = parseInt(score);

    updateScore += 50;

    ScoreEl.setAttribute("text", { value: updateScore });
  },

  gameOver: function () {
    var gameOverEL = document.querySelector("#GameOver");
    var planeEl = document.querySelector("#plane-model");

    gameOverEL.setAttribute("visible", true);
    planeEl.setAttribute("dynamic-body", { mass: 1 });
  },

  update: function () {
    // Do something when component's data is updated.
    this.isCollided(this.data.elementID);
  },

  remove: function () {
    // Do something the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  },
});
