const redux = require("redux");
const produce = require("immer").produce;

const initState = {
  car: {
    ford: 12,
    wv: 20,
  },
  appertments: 22,
  cart: {
    chips: 12,
    burgers: 5,
  },
};

const DECREMENT_WV = "DECREMENT_WV";
const INCREMENT_CHIPS = "INCREMENT_CHIPS";
const DECREMENT_APPERTMENTS = "DECREMENT_APPERTMENTS";

function sellWv(qty) {
  return {
    type: DECREMENT_WV,
    payload: qty,
  };
}
function buyChips(qty) {
  return {
    type: INCREMENT_CHIPS,
    payload: qty,
  };
}
function sellAppertment(qty) {
  return {
    type: DECREMENT_APPERTMENTS,
    payload: qty,
  };
}

function reducer(state = initState, action) {
  switch (action.type) {
    case DECREMENT_WV:
      return produce(state, (draft) => {
        draft.car.wv = state.car.wv - action.payload;
      });
    case INCREMENT_CHIPS:
      return produce(state, (draft) => {
        draft.cart.chips = state.cart.chips + action.payload;
      });
    case DECREMENT_APPERTMENTS:
      return produce(state, (draft) => {
        draft.appertments = state.appertments - action.payload;
      });

    default:
      return state;
  }
}

const store = redux.createStore(reducer);

const unsubscribe = store.subscribe(() => {
  console.log("current state", store.getState());
});

console.log("initial state", store.getState());

store.dispatch(sellWv(2));
store.dispatch(buyChips(3));
store.dispatch(sellAppertment(5));

unsubscribe();
