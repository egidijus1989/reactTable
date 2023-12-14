import './table.scss'
const Table = (props) =>{
    return(
        <table className="table">
  
  <tbody>
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.name}</td>
      <td>{props.price}</td>
      <td>{props.quantity}</td>
    </tr>
  </tbody>
</table>
    );
};
export default Table;