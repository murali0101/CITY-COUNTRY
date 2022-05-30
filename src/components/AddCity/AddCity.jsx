import "./AddCity.css";
import { useSelector, useDispatch } from "react-redux";
import { useState} from "react";
import { postcity } from "../../redux/cityCountryReducer/CityCountryAction";
export const AddCity = () => {
  const populationData = useSelector((store) => store.city_country.city);
  const countryData = useSelector((store) => store.city_country.country);
  const dispatch = useDispatch();
  const [city, setCity] = useState({
    city_name: "",
    population: "",
    countryId: "",
  });
  const formHandler = (e) => {
    e.preventDefault();
    dispatch(postcity(city));
  };
  const fieldHandler = (e) => {
    const { name, value } = e.target;
    setCity({ ...city, [name]: value });
  };
  // console.log(city);
  return (
    <div className="add-city">
      <form onSubmit={formHandler}>
        <input
          value={city.city_name}
          type="text"
          name="city_name"
          placeholder="Please Enter city Name"
          onChange={fieldHandler}
          required
        />
        <input
          value={city.population}
          type="number"
          name="population"
          placeholder="Please Enter city Population"
          onChange={fieldHandler}
          required
        />
        <select  onChange={fieldHandler}  name="countryId">
          {countryData.map((ele, ind) => (
            <option value={ele._id} key={ind}>
              {ele.country_name}
            </option>
          ))}
        </select>
        <input type="submit" value="Add city" />
      </form>
    </div>
  );
};
