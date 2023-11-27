import { act } from "react-dom/test-utils";
import { create as actualCreate } from 'zustand'

// a variable to hold reset functions for all stores declared in the app
const storeResetFns = new Set();
// @ts-ignore
const extension = {
  subscribe: jest.fn(() => {
    return () => { };
  }),
  unsubscribe: jest.fn(),
  send: jest.fn(),
  init: jest.fn(),
  error: jest.fn(),
};
const extensionConnector = { connect: jest.fn(() => extension) };
(window).__REDUX_DEVTOOLS_EXTENSION__ = extensionConnector;

// when creating a store, we get its initial state, create a reset function and add it in the set
const create = (createState) => {
  const store = actualCreate(createState);
  const initialState = store.getState();

  const newState = {
    ...initialState,
    itemsStatus: {
      1: { id: 1, status: "available" },
      2: { id: 2, status: "available" },
      3: { id: 3, status: "limited" },
      4: { id: 4, status: "limited" },
      5: { id: 5, status: "available" }
    }
  }
  store.setState(newState, true)
  storeResetFns.add(() => store.setState(newState, true));
  return store;
};

// Reset all stores after each test run
afterEach(() => {
  act(() => storeResetFns.forEach((resetFn) => resetFn()));
});

export { create };