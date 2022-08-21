import { useState, useEffect } from 'react';


import { useNavigate, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../Service/api';

const initialValue = {
 
  productname: '',
  brand: '',
  availablecount: '',
  price:''
}




const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const {productname, brand, availablecount, price } = user;
    const { id } = useParams();
    const navigate=useNavigate();
    
    

    useEffect(() => {
        loadUserDetails();
    },[]);
   

    const loadUserDetails = async() => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editUser(id, user);
       
        navigate('/products');
        
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
      <form>
        
            <h1>Edit Information</h1>
            
            <div>
                <label htmlFor="my-input">ProductName</label>
                <input onChange={(e) => onValueChange(e)} name='productname' value={user.productname} id="my-input" aria-describedby="my-helper-text" />
            </div>
            <div>
                <label htmlFor="my-input">Brand</label>
                <input onChange={(e) => onValueChange(e)} name='brand' value={user.brand} id="my-input" aria-describedby="my-helper-text" />
            </div>
            <div>
                <label htmlFor="my-input">AvailableCount</label>
                <input onChange={(e) => onValueChange(e)} name='availablecount' value={user.availablecount} id="my-input" aria-describedby="my-helper-text" />
            </div>
            <div>
                <label htmlFor="my-input">Price</label>
                <input onChange={(e) => onValueChange(e)} name='price' value={user.price} id="my-input" aria-describedby="my-helper-text" />
            </div>
            <div>
                <button  color="primary" onClick={() => editUserDetails()}>Edit User</button>
            </div>
        
        </form>
    )
}

export default EditUser;