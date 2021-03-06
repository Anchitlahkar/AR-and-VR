AFRAME.registerComponent('log', {
    schema: {
        message: {type: 'string', default:"Hello, World"}
    },

    init: function () {
      // Do something when component first attached.
      console.log(this.data.message)
    },

    update: function () {
      // Do something when component's data is updated.
    },

    remove: function () {
      // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    }
});
