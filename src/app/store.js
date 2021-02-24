import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import mySaga from "../sagas/sagas";

import counterReducer from "../features/counter/counterSlice";
import doggoReducer from "../features/doggo/doggoSlice";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    counter: counterReducer,
    doggos: doggoReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(mySaga);
