const produce = require("immer").produce;
const redux = require("redux");

const initState = {
  name: "kamil",
  courses: {
    java: "cc",
    js: "bb",
  },
};
const CHANGE_JAVA = "CHANGE_JAVA";
const CHANGE_JS = "CHANGE_JS";

function changeJava(note) {
  return {
    type: CHANGE_JAVA,
    payload: note,
  };
}

function changeJS(note) {
  return {
    type: CHANGE_JS,
    payload: note,
  };
}

function reducer(state = initState, action) {
  switch (action.type) {
    case CHANGE_JAVA:
      return produce(state, (draft) => {
        draft.courses.java = action.payload;
      });
    case CHANGE_JS:
      return produce(state, (draft) => {
        draft.courses.js = action.payload;
      });
    default:
      return state;
  }
}

const store = redux.createStore(reducer);

console.log("initial state: ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("current state: ", store.getState());
});

store.dispatch(changeJava("aa"));
store.dispatch(changeJS("aa"));

unsubscribe();
