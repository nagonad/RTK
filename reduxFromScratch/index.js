const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTORED = "CAKE_RESTORED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTORED = "ICECREAM_RESTORED";

function orderCake(qty = 1) {
  return {
    type: CAKE_ORDERED,
    payload: qty,
  };
}
function restoreCake() {
  return {
    type: CAKE_RESTORED,
    payload: 10,
  };
}

function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}
function restoreIceCream() {
  return {
    type: ICECREAM_RESTORED,
    payload: 12,
  };
}

// const initState = {
//   numOfCakes: 10,
//   numOfIcecreams: 12,
// };

const initCakeState = {
  numOfCakes: 10,
};

const initIceCreamState = {
  numOfIcecreams: 12,
};

function iceCreamReducer(state = initIceCreamState, action) {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - action.payload,
      };
    case ICECREAM_RESTORED:
      return {
        ...state,
        numOfIcecreams: action.payload,
      };
    default:
      return state;
  }
}

function cakeReducer(state = initCakeState, action) {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case CAKE_RESTORED:
      return {
        ...state,
        numOfCakes: action.payload,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {});

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake(2));
// store.dispatch(restore());

const actions = bindActionCreators(
  { orderCake, restoreCake, orderIceCream, restoreIceCream },
  store.dispatch
);

actions.orderCake();
actions.orderCake(2);
actions.orderCake(2);
actions.restoreCake();
actions.orderIceCream(2);
actions.orderIceCream(3);
actions.restoreIceCream();

unsubscribe();
