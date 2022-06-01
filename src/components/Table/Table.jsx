import "./Table.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountry,
  getData,
} from "../../redux/cityCountryReducer/CityCountryAction";
import { TableRow } from "./TableRow";
import { SortFilter } from "../SortFilter/SortFilter";

export const Table = () => {
  const dispatch = useDispatch();
  const populationData = useSelector((store) => store.city_country.city);
  const countryData = useSelector((store) => store.city_country.country);
  const filter = useSelector((store) => store.city_country.filter);
  // console.log("populationData:", populationData);
  // console.log("countryData:", countryData);
  useEffect(() => {
    dispatch(getData());
    dispatch(getCountry());
  }, []);
  return (
    <div >
      <SortFilter/>
      <table className="table-details">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Country</th>
            <th>City</th>
            <th>Population</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {populationData.filter((ele)=>ele.countryId.country_name.toLowerCase().includes(filter)).map((ele, ind) => (
            <TableRow props={{ ele, ind }} key={ind} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
