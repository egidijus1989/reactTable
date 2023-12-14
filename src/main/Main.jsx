import { useState } from "react";
import Form from "../form/Form";
import Table from "../table/Table";
import TableHead from "../table/TableHead";

const Main = () =>{

    const [product, setProduct] = useState([]);

    const handleFormData = (data)=>{
        setProduct((prevData)=>{
            return[data,...prevData]
        })
    }

    return(
        <div className="container">
            <Form onSave={handleFormData}/>
            <TableHead/>
            {
                product.map((post)=>
                    <Table key={post.id} id={post.id} name={post.name} price={post.price} quantity={post.quantity}/>
            )}
            
        </div>
        
    );
}
export default Main;