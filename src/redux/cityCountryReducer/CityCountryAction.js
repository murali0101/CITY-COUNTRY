import axios from "axios";
export const ADDDATA = "ADDDATA";
export const addData = (val) => {
  return { type: ADDDATA, payload: val };
};
export const getData = () => async (dispatch) => {
  axios
    .get("https://city-country-01.herokuapp.com/add-city/")
    .then((res) => dispatch(addData(res.data)))
    .catch((error) => console.log(error));
};
