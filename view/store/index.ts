import { createStore } from "redux";
import type { Dispatch, Store } from "./index.type";

// Store Current State
const currentState: Store = {
  scroll: 0,
  pageName: null,
  isNotice: false,
};

// Store Reducer
const reducer = (state: Store = currentState, action: Dispatch): Store => {
  return {
    ...state,
    [action?.type]: action?.payload,
  };
};

// Create Store
const store = createStore(reducer);

// Store Export
export default store;
