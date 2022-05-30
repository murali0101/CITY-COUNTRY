import "./AddCity.css";
import { useSelector, useDispatch } from "react-redux";
import { useState} from "react";
import { postcity } from "../../redux/cityCountryReducer/CityCountryAction";
import { useParams } from "react-router-dom";
export const AddCity = () => {
  const populationData = useSelector((store) => store.city_country.city);
  const countryData = useSelector((store) => store.city_country.country);
  const { id } = useParams()
  let data={
    city_name: "",
    population: "",
    countryId: "",
  }

  if (id) { 
    console.log(id)
    for (let i = 0; i < populationData.length; i++) { 
      if (id == populationData[i]._id) { 
        data= populationData[i]
      }
    }
  }
  const dispatch = useDispatch();
  const [city, setCity] = useState({...data});
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
        <select  onChange={fieldHandler}  name="countryId"  value={city.population}>
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
