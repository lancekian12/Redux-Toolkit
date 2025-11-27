const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice.js");
const iceCreamRecuder = require("../features/icecream/iceCreamSlice.js");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: iceCreamRecuder,
  },
});

module.exports = store;
