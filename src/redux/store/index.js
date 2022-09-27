import { configureStore } from "@reduxjs/toolkit";
import { reducer as usersReducer } from "redux/reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../rootSaga";

// Setup Middlewares
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const composables = {
  reducer: usersReducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production"
};

export const store = configureStore({
  ...composables
});
// Start rootSaga
sagaMiddleware.run(rootSaga);
