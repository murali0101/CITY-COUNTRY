import { useDispatch } from "react-redux";
import {
  filterData,
  sortData,
} from "../../redux/cityCountryReducer/CityCountryAction";

export const SortFilter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <select>
        <option value="country">Country</option>
        <option value="city">City</option>
      </select>
      <input
        type="text"
        placeholder="Please Enter Name"
        onChange={(e) => {
          dispatch(filterData(e.target.value));
        }}
      />
      <select
        id="sort"
        onChange={(e) => {
          const val = document.getElementById("asc-des").value;
          dispatch(sortData([e.target.value, val]));
        }}
      >
        {/* <option value="countryId">Country</option> */}
        <option value="city_name">City</option>
        <option value="population">Population</option>
      </select>
      <select
        id="asc-des"
        onChange={(e) => {
          const val = document.getElementById("sort").value;
          dispatch(sortData([val, e.target.value]));
        }}
      >
        <option value="asc">ascending</option>
        <option value="des">descending </option>
      </select>
    </div>
  );
};
