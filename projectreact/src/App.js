import logo from './logo.svg';
import './App.css';
import {Routes,Route,Link} from 'react-router-dom';
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
    <div className="App">
     
    





       <Routes>
       <Route path='/' element={<ProductApi></ProductApi>} />
       <Route path='/products' element={<ProductApi></ProductApi>} />
          <Route path='crudCreate' element={<CRUDcreate></CRUDcreate>} / >
          <Route path='/edit/:id' element={<CRUDupdate></CRUDupdate> } />
          
         </Routes>
      
     
    </div>

    
   
  );
}

export default App;