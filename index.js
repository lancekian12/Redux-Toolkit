const store = require("./app/store");
const { cakeActions } = require("./features/cake/cakeSlice");
const { iceCreamActions } = require("./features/icecream/iceCreamSlice");

console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() => {});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(10));

store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.restocked(5));

unsubscribe();
