import axios from "axios";
export const ADDDATA = "ADDDATA";
export const ADDCOUNTRY = "ADDCOUNTRY";
export const addData = (val) => {
  return { type: ADDDATA, payload: val };
};
export const addCountry = (val) => {
  return { type: ADDCOUNTRY, payload: val };
};
export const getData = () => async (dispatch) => {
  axios
    .get("https://city-country-01.herokuapp.com/add-city/")
    .then((res) => dispatch(addData(res.data)))
    .catch((error) => console.log(error));
};
export const getCountry = () => async (dispatch) => {
  axios
    .get("https://city-country-01.herokuapp.com/add-country/")
    .then((res) => dispatch(addCountry(res.data)))
    .catch((error) => console.log(error));
};
export const postCountry = (val) => async (dispatch) => {
  axios
    .post("https://city-country-01.herokuapp.com/add-country/", { ...val })
    .then((res) => {
      dispatch(getCountry(res.data))
      
    })
    .catch((error) => console.log(error));
};
export const postcity= (val) => async (dispatch) => {
  axios
    .post("https://city-country-01.herokuapp.com/add-city/", { ...val })
    .then((res) => {
      dispatch(getData(res.data))
    })
    .catch((error) => console.log(error));
};
