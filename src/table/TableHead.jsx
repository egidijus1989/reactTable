import './table.scss'

const TableHead = () =>{
    return(
        <table className="table">
  
  <thead>
    <tr>
      <th scope="col" className='thId'>Id</th>
      <th scope="col">Product name</th>
      <th scope="col">Product price</th>
      <th scope="col">Product quantity</th>
    </tr>
  </thead>

</table>
    );
};
export default TableHead;