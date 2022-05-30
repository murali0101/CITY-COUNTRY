import { ADDCOUNTRY, ADDDATA } from "./CityCountryAction";

const init = {
  country: [],
  city: [],
};
export const CityCountryReducer = (store = init, { type, payload }) => {
  switch (type) {
    case ADDDATA:
      return { ...store, city: payload };
    case ADDCOUNTRY:
      return { ...store, country: payload };

    default:
      return store;
  }
};
