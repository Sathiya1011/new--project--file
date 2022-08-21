/*  //index.js 
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//app.js

import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import ProductApi from './Components/ProductApi';
import Login from './Components/Login';
import HomeComp from './Components/HomeComp';
import AdminLogin from './Components/AdminLogin';
import Productanagement from './Components/Productmanagement';
import { AuthProvider } from './Components/Auth';


import CRUDcreate from './Components/CRUDcreate';
import CRUDupdate from './Components/CRUDupdate';
import CRUDdelete from './Components/CRUDdelete';

import Register from './Components/Register';
import Navbar from './Components/Navbar';
import {RequireAuth} from './Components/RequireAuth'

function App() {
  return (
    <AuthProvider> 
    <Navbar></Navbar>
        <Routes>
        <Route path='/' element={<RequireAuth> <HomeComp></HomeComp></RequireAuth>} />
          
          
          <Route path='productmanagement' element={<RequireAuth> <Productanagement></Productanagement></RequireAuth>} />
          <Route path='productlist' element={<RequireAuth> <ProductApi></ProductApi></RequireAuth>} />
          <Route path='crudCreate' element={<RequireAuth><CRUDcreate></CRUDcreate></RequireAuth>} / >
          <Route path='crudupdate' element={<RequireAuth><CRUDupdate></CRUDupdate></RequireAuth> } />
          <Route path='crudDelete' element={ <RequireAuth> <CRUDdelete></CRUDdelete></RequireAuth>} />
         


          <Route path='login' element={<Login></Login>} />
          <Route path='adminlogin' element={<AdminLogin></AdminLogin>} />
          <Route path='register' element={<Register></Register>} / >
          </Routes>
     

      </AuthProvider>
  );
}

export default App;

//Login.js

<>
    <div className={styles.log}>
      <form  onSubmit={handleSubmit}>
        <p className={styles.error}> {errmsg} </p>
        <h2>UserSignin</h2>
    <div>
      <label  htmlFor='username'>UserName :</label>
     <input  id="username" type="text" value={username}  onChange={changeusername} ></input>
     <p className={styles.error}>{errusername}</p>
    </div>

    <div>
      <label htmlFor='password'> Password :</label>
    <input  id="password" type="password" value={password}  onChange={changepassword} ></input>
    <p className={styles.error}>{errpass}</p>
    </div>
    <button type='submit'> Login</button>
    </form>
   
      <div>Haven't register yet? <a href='#' onClick={() =>{ navigate('/register')}}>  Regiser </a> 

      </div>
    
    </div>
    </>

    //register.js
    import React ,{ useState }from 'react' ;
import axios from 'axios';
import styles from '../StylesRoute/login.module.css' ;
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';
import './Style.css';

const Register = () => {
    const navigate=useNavigate()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errmsg,setErrmsg] = useState('')
    const [errusername,setErrusername] = useState('')
    const [erremail,setErremail] = useState('')
    const [errpass,setErrpass] = useState('')
    const auth=useAuth()

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(username.trim() == '') {
         setErrusername('Please enter a valid username')
        }
        else if (password == ''){
         setErrpass('please enter a valid password')
        }
        else{
         axios.post('https://localhost:44352/api/Authenticate/register' ,{
           "username":username ,
           "email":email,
           "password":password
   
         })
         .catch(setErrmsg('Bad Credentials'))
         navigate('/login')
     
         
        }
     }
      
     const changeusername= (e) =>{
       setUsername(e.target.value)
       setErrusername('')
       setErrmsg('')
     }
     const changeemail= (e) =>{
       setEmail(e.target.value)
       setErremail('')
       setErrmsg('')
     }
   
     const changepassword= (e) =>{
       setPassword(e.target.value)
       setErrpass('')
       setErrmsg('')
     }
    
  return (
    <>
    <div className={styles.log}>
      <form  onSubmit={handleSubmit}>
        <p className={styles.error}> {errmsg} </p>
        <h2>Signin</h2>
    <div>
      <label  htmlFor='username'>UserName :</label>
     <input  id="username" type="text" value={username}  onChange={changeusername} ></input>
     <p className={styles.error}>{errusername}</p>
    </div>
    <div>
      <label  htmlFor='username'>Email :</label>
     <input  id="email" type="text" value={email}  onChange={changeemail} ></input>
     <p className={styles.error}>{erremail}</p>
    </div>

    <div>
      <label htmlFor='password'> Password :</label>
    <input  id="password" type="password" value={password}  onChange={changepassword} ></input>
    <p className={styles.error}>{errpass}</p>
    </div>
    <button type='submit'> Register</button>
    </form>
   
      <div>Haven't register yet? <a href='#' onClick={() =>{ navigate('/register')}}>  Regiser </a> 

      </div>
    
    </div>
    </>
  )
}

export default Register     

import React, {useState,useEffect}from 'react'
import axios from 'axios'

const ProductApi = () => {
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
    })
  return (
    <>
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

//productApi

import React, {useState,useEffect}from 'react'
import axios from 'axios'

const ProductApi = () => {
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
    })
  return (
    <>
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

//app.js
import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import ProductApi from './Components/ProductApi';
import Login from './Components/Login';
import HomeComp from './Components/HomeComp';
import AdminLogin from './Components/AdminLogin';
import Productanagement from './Components/Productmanagement';
import { AuthProvider } from './Components/Auth';


import CRUDcreate from './Components/CRUDcreate';
import CRUDupdate from './Components/CRUDupdate';
import CRUDdelete from './Components/CRUDdelete';

import Register from './Components/Register';
 import Navbar from './Components/Navbar';
import {RequireAuth} from './Components/RequireAuth';
//import Navbar from './NavbarComponent/Navbar';

function App() {
  return (
    <AuthProvider> 
    <Navbar></Navbar>
        <Routes>
        <Route path='/' element={<RequireAuth> <HomeComp></HomeComp></RequireAuth>} />
          
          
          <Route path='productmanagement' element={<RequireAuth> <Productanagement></Productanagement></RequireAuth>} />
          <Route path='productlist' element={<RequireAuth> <ProductApi></ProductApi></RequireAuth>} />
          <Route path='crudCreate' element={<RequireAuth><CRUDcreate></CRUDcreate></RequireAuth>} / >
          <Route path='crudupdate' element={<RequireAuth><CRUDupdate></CRUDupdate></RequireAuth> } />
          <Route path='crudDelete' element={ <RequireAuth> <CRUDdelete></CRUDdelete></RequireAuth>} />
         


          <Route path='login' element={<Login></Login>} />
          <Route path='adminlogin' element={<AdminLogin></AdminLogin>} />
          <Route path='register' element={<Register></Register>} / >
          </Routes>
     

      </AuthProvider>
  );
}

export default App;

component={Link} to="/edit/${post.productId}"

*/