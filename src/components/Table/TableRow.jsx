import './TableRow.css'



export const TableRow = ({ props }) => {
    const {population,countryId:{country_name},city_name}=props.ele
    return <tr>
        <td>{props.ind+1 }</td>
        <td>{country_name}</td>
        <td>{city_name}</td>
        <td>{population}</td>
        <td>Edit</td>
        <td>Delete</td>
    </tr>
}