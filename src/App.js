import React,{useState} from 'react'
import {BrowserRouter} from 'react-router-dom';
import PrivateRoute from './Private/PrivateRoute';
import LocalStorageService from './LocalStorage/LocalStorageServer';
function App() {
   const [role , setRole] = useState(LocalStorageService.getRole());
  // getRole when call Route

  return (
   <BrowserRouter>
    <PrivateRoute role={role} setRole={setRole} />
   </BrowserRouter>
  )
}

export default App
