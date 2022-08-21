
import React ,{ useState }from 'react' ;
import axios from 'axios';
import styles from '../StylesRoute/login.module.css' ;
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';
import './Style.css';
import profile from "./../Images/5087579.png";

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
    
   <div className="main">
    <div className="sub-main">
    <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
      <form  onSubmit={handleSubmit}>
        <p className={styles.error}> {errmsg} </p>
        <h2>Register</h2>
    <div>
      
     <input  type="text"   placeholder="Username" onChange={changeusername} className="name"></input>
     <p className={styles.error}>{errusername}</p>
    </div>
    <div>
      
     <input  type="text" placeholder="Email"  onChange={changeemail} className="name" ></input>
     <p className={styles.error}>{erremail}</p>
    </div>

    <div>
      
    <input  type="password"  placeholder="Password" onChange={changepassword}  className="name"></input>
    <p className={styles.error}>{errpass}</p>
    </div>
    <button type='submit'> Register</button>
    </form>
   
     
     </div>
    
    </div>
    </div>
   
  )
}

export default Register