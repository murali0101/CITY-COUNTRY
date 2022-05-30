import { useDispatch } from "react-redux";
import { sortData } from "../../redux/cityCountryReducer/CityCountryAction";

export const SortFilter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <select>
        <option value="country">Country</option>
        <option value="city">City</option>
      </select>
      <input type="text" placeholder="Please Enter Name" />
      <select
        onChange={(e) => {
          dispatch(sortData(e.target.value));
        }}
      >
        <option value="country">Country</option>
        <option value="city_name">City</option>
        <option value="population">Population</option>
      </select>
      <select>
        <option value="asc">ascending</option>
        <option value="des">descending </option>
      </select>
    </div>
  );
};
