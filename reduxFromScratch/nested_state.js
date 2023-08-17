const redux = require("redux");
const produce = require("immer").produce;

const initstate = {
  name: "mali",
  address: {
    street: "großtraße 32",
    postalCode: "55566",
    city: "bad sobernheim",
  },
};

const UPDATE_STREET = "UPDATE_STREET";

function updateStreet(newStreet) {
  return {
    type: UPDATE_STREET,
    payload: newStreet,
  };
}

function reducer(state = initstate, action) {
  switch (action.type) {
    case UPDATE_STREET:
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
}

const store = redux.createStore(reducer);

console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("current state", store.getState());
});

store.dispatch(updateStreet("alter weg 9"));

unsubscribe();
