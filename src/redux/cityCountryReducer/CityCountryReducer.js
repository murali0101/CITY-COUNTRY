import { ADDCOUNTRY, ADDDATA, SORT } from "./CityCountryAction";

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
    case SORT:
      return {
        ...store,
        city: [...store.city].sort((a, b) =>
          a[payload] > b[payload] ? 1 : a[payload] < b[payload] ? -1 : 0
        ),
      };
    default:
      return store;
  }
};
