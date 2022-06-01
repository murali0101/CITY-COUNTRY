import { ADDCOUNTRY, ADDDATA, FILTER, SORT } from "./CityCountryAction";

const init = {
  country: [],
  city: [],
  filter:"",
};
export const CityCountryReducer = (store = init, { type, payload }) => {
  // console.log(type, payload )
  switch (type) {
    case ADDDATA:
      return { ...store, city: payload};
    case FILTER:
      return { ...store, filter: payload};

    case ADDCOUNTRY:
      return { ...store, country: payload };
    case SORT:
      return {
        ...store,
        city: [...store.city].sort((a, b) =>
          payload[1] == "asc"
            ? a[payload[0]].toLowerCase() > b[payload[0]].toLowerCase()
              ? 1
              : a[payload[0]].toLowerCase() < b[payload[0]].toLowerCase()
              ? -1
              : 0
            : a[payload[0]].toLowerCase()< b[payload[0]].toLowerCase()
            ? 1
            : a[payload[0]].toLowerCase()> b[payload[0]].toLowerCase()
            ? -1
            : 0
        ),
      };
    default:
      return store;
  }
};
