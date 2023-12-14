import { useState } from "react";

let productId = 0;
const Form = (props) =>{
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        price: '',
        quantity: ''
    });

    const handleChange = (event)=>{
        setFormData(
            {
                ...formData,
                [event.target.name]:event.target.value
            }
        )
    };

    const submitHandler = (event)=>{
        event.preventDefault();
        productId += 1
        props.onSave({...formData, id: productId});
    }
    return(
            <form className="form" onSubmit={submitHandler}>
                {/* <div className="form-group">
                    <input type="text" name='id' placeholder="Product id" className="m-1 form-control" onChange={handleChange} value={formData.id}></input>
                </div> */}
                <div className="form-group">
                <input type="text" name='name' placeholder="Product name" className="m-1 form-control" onChange={handleChange} value={formData.name}></input>
                </div>
                <div className="form-group">
                <input type="number" name='price' placeholder="Product price" className="m-1 form-control" onChange={handleChange} value={formData.price}></input>
                </div>
                <div className="form-group">
                <input type="number" name='quantity' placeholder="Product quantity" className="m-1 form-control" onChange={handleChange} value={formData.quantity}></input>
                </div>
                <div className="form-group">
                <button type="submit" className="btn btn-primary">Save</button>
            </div>
        </form>
    );
}
export default Form