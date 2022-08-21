import React, {useState,useEffect}from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import {  deleteUser } from '../Service/api';

const ProductApi = () => {
    const navigate=useNavigate()
    const [posts,setPosts]=useState([])
    

    useEffect(()=>{
        axios.get('https://localhost:44352/api/ElectronicProducts')
        .then(res =>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    const deleteUserData = async (id) => {
        await deleteUser(id);
        alert('confirm !.....you want to delete the record')
        navigate('/')
    }

    

    
  return (
    <>
    <h1>Add Products</h1>
                <button onClick={() =>{ navigate('/crudCreate')}} >Addproducts</button>
    

    <h1>Electronic Products List</h1>
    
        {
            posts.map(post =>(
               <div>
          <table >
         <tbody >  
         <tr >
             <th>ProductId</th>
             <th>ProductName</th>
             <th>brand</th>
             <th>AvailableCount</th>
             <th>Price</th>
             </tr>
          
              <tr key={post.productId}  >  
        <td>{post.productId}</td>
        <td>{post.productname}</td>
        <td>{post.brand}</td>
        <td>{post.availablecount}</td>   
        <td>{post.price}</td> 
        <td>
            <button onClick={() =>{navigate(`/edit/${post.productId}`)}} >Update</button>
        </td>
        <td>
        <button color="secondary"  onClick={() => deleteUserData(post.productId)}>Delete</button> 
        </td>
      </tr>
          </tbody>
       </table>
      </div>
            ))
        }
       
    </ >
  )
}

export default ProductApi