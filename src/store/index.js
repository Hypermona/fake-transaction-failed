import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { userReducer } from "./user/reducer";
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers({ user: userReducer }));
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const store = createStore(persistedReducer, compose(enhancer, applyMiddleware(thunk)));

export const persistor = persistStore(store);
