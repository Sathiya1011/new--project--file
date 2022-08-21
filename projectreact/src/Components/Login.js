import axios from 'axios';
import React, { useState } from 'react' ;
import styles from '../StylesRoute/login.module.css' ;
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';
import './Style.css';
import profile from "./../Images/5087579.png";
import emailimg from "./../Images/561127.png";
import passwordimg from "./../Images/lock-512.png";

const Login = () => {
    const navigate=useNavigate()
    const [username, setUsername] = useState('')             
    const [password, setPassword] = useState('')
    const [errmsg,setErrmsg] = useState('')               
    const [errusername,setErrusername] = useState('')
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
        axios.post('https://localhost:44352/api/Authenticate/login' ,{
          "username":username ,
          "password":password

        })
        .then((res) =>{ localStorage.setItem('token' , res.data.token)
        auth.login(username)
        navigate('/')
      })
        .catch(setErrmsg('Bad Credentials'))
       }
    }
     
    const changeusername= (e) =>{
      setUsername(e.target.value)
      setErrusername('')
      setErrmsg('')
    }

    const changepassword= (e) =>{
      setPassword(e.target.value)
      setErrpass('')
      setErrmsg('')
    }

  return (
    <div className="main">
    <div className="sub-main">
    <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
    
      <form  onSubmit={handleSubmit}>
        <p className="error"> {errmsg} </p>
        <h2>Login</h2>
    <div>
    <img src={emailimg} alt="email" className="email"/>
      
     <input  type="text"   placeholder="Username" onChange={changeusername} className="name"></input>
     <p  className="error">{errusername}</p>
    </div>

    <div  className="second-input">
    <img src={passwordimg} alt="pass" className="email"/>
     
    <input type="password"  placeholder="Password" onChange={changepassword} className="name" ></input>
    <p  className="error">{errpass}</p>
    </div>
    <button type='submit'> Login</button>
    <div>Haven't register yet? <a href='#' onClick={() =>{ navigate('/register')}}>  Regiser </a> 

      </div>
    </form>
    </div>
    </div>
    </div>
    
  )
}

export default Login