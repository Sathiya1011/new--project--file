import react, { useState } from 'react';

import { addUser } from '../Service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    
   
    productname: '',
    brand: '',
    availablecount: '',
    price:''

}



const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { productId, productname, brand, availablecount,price } = user;
    const navigate=useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        navigate('/')
       
    }

    return (
        <form>
            <h1>Add product</h1>
            <div>
                <label htmlFor="my-input">ProductName</label>
                <input onChange={(e) => onValueChange(e)} name='productname' value={productname} id="my-input" />
            </div>
            <div>
                <label htmlFor="my-input">Brand</label>
                <input onChange={(e) => onValueChange(e)} name='brand' value={brand} id="my-input" />
                </div>
            <div>
                <label htmlFor="my-input">AvailableCount</label>
                <input onChange={(e) => onValueChange(e)} name='availablecount' value={availablecount} id="my-input"/>
            </div>
            <div>
                <label htmlFor="my-input">Price</label>
                <input onChange={(e) => onValueChange(e)} name='price' value={price} id="my-input" />
            </div>
            <div>
                <button  color="primary" onClick={() => addUserDetails()}>Add Product</button>
            </div>
            </form>
    )
}

export default AddUser;