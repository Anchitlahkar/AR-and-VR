AFRAME.registerComponent('collision', {
    schema: {

    },

    init: function () {
        const element = document.querySelector("#player")

        window.addEventListener("collide", (e) => {
            console.log("Collided")
            console.log(e)
        });
    },
});
