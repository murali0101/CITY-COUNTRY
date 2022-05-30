import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deletecity } from '../../redux/cityCountryReducer/CityCountryAction'
import './TableRow.css'



export const TableRow = ({ props }) => {
    const dispatch = useDispatch()
    const nav=useNavigate()
    const {population,countryId:{country_name},city_name,_id}=props.ele
    return <tr>
        <td>{props.ind+1 }</td>
        <td>{country_name}</td>
        <td>{city_name}</td>
        <td>{population}</td>
        <td><button onClick={() => { nav(`/edit-city/${_id}`) }}>Edit</button></td>
        <td><button onClick={()=>{dispatch(deletecity(_id))}}>Delete</button></td>
    </tr>
}