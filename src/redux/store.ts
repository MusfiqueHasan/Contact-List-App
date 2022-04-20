import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ReduxThunk from "redux-thunk";
import contactReducer from "./reducers/contactReducer";


const persistConfig = {
    key: "root",
    storage,
};
const rootReducer = combineReducers({
    contact: contactReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
);

export const persistor = persistStore(store);
export default store;