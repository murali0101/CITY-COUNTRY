import "./AddCity.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState} from "react";
import { getCountry, patchcity, postcity } from "../../redux/cityCountryReducer/CityCountryAction";
import { useParams } from "react-router-dom";
export const AddCity = () => {
  const populationData = useSelector((store) => store.city_country.city);
  const countryData = useSelector((store) => store.city_country.country);
  const { id } = useParams()
  let data={
    city_name: "",
    population: "",
    countryId: "",
  };

  
  if (id) { 
    // console.log(id)
    for (let i = 0; i < populationData.length; i++) { 
      if (id == populationData[i]._id) { 
        // console.log({...populationData[i],countryId:populationData[i].countryId._id})
        data= {...populationData[i],countryId:populationData[i].countryId._id}
      }
    }
  } 
  const dispatch = useDispatch();
  const [city, setCity] = useState({ ...data });
  useEffect(() => {
    if (!id) { 
    setCity({
      city_name: "",
      population: "",
      countryId: "",
    });
  }
  }, [id])
  useEffect(() => {
    // dispatch(getData());
    dispatch(getCountry());
  }, []);
  const formHandler = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(patchcity([id, city]));
      alert("Updated Successfully")
    } else {
      dispatch(postcity(city));
      alert("Data Add Successfully")
    }
   
  };
  const fieldHandler = (e) => {
    const { name, value } = e.target;
    setCity({ ...city, [name]: value });
  };
  // console.log(city);
  return (
    <div >
      <form className="add-city" onSubmit={formHandler}>
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
        <select onChange={fieldHandler} name="countryId" value={city.countryId}>
        <option value="" >
              choose country
            </option>
          {countryData.map((ele, ind) => (
            <option value={ele._id} key={ind}>
              {ele.country_name}
            </option>
          ))}
        </select>
        <input type="submit" value={id?"Updata":"Add city"} />
      </form>
    </div>
  );
};
