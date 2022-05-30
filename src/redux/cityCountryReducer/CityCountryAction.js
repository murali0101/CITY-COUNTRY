import axios from "axios";
export const ADDDATA = "ADDDATA";
export const addData = (val) => {
  return { type: ADDDATA, payload: val };
};
export const getData = () => async (dispatch) => {
  axios
    .get("http://localhost:8080/add-city/")
    .then((res) => dispatch(addData(res.data)))
    .catch((error) => console.log(error));
};
