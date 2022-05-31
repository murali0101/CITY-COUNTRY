import { useState } from "react";
import { useDispatch } from "react-redux";
import { postCountry } from "../../redux/cityCountryReducer/CityCountryAction";
import "./AddCountry.css";

export const AddCountry = () => {
  const dispatch = useDispatch();
  const [country, setCountry] = useState({ country_name: "" });
  const formHandler = (e) => {
    e.preventDefault();
    dispatch(postCountry(country));
    alert("country added")
  };
  const fieldHandler = (e) => {
    const { name, value } = e.target;
    setCountry({ ...country, [name]: value });
  };
  // console.log(country);
  return (
    <div>
      <form  className="add-country" onSubmit={formHandler}>
        <input
          value={country.country_name}
          type="text"
          name="country_name"
          placeholder="Please Enter Country Name"
          onChange={fieldHandler}
          required
        />
        <input type="submit" value="Add Country" />
      </form>
    </div>
  );
};
