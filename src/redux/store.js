import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { CityCountryReducer } from "./cityCountryReducer/CityCountryReducer";

const rootReducer = combineReducers({
  city_country: CityCountryReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
