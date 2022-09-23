import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { userReducer } from "./user/reducer";
import { receiverReducer } from "./receivers/reducer";
import { errorReducer } from "./error";
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ user: userReducer, error: errorReducer, receivers: receiverReducer })
);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);
