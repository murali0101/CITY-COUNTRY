import './Table.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../redux/cityCountryReducer/CityCountryAction'
import { TableRow } from './TableRow'

export const Table = () => {
    const dispatch = useDispatch()
    const populationData=useSelector((store)=>store.city_country.city)
    console.log('populationData:', populationData)
    useEffect(() => {
        dispatch(getData())
    },[])
    return <table>
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
  {populationData.map((ele,ind)=><TableRow />)}
        </tbody>
    </table>
}