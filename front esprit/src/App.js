import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/navbar';
import LoggedNavbar from './components/Navbar/loggednavbar';
import './App.css';
import  {Route, Routes} from 'react-router';
import Home from './pages/home';
import AboutUS from './pages/aboutUS';
import Contact from './pages/Contact';
import Pass from './Password';
import Select from'./pages/selectfiles';
import Presen from './pages/attestation de presence';
import Exemple from './pages/attestation de Réussite';
import Stage from './pages/attestation de stage';
import HomeButton from './pages/relever de note';

function App(){
  const Authcontext = React.createContext({Auth:false});
  const [auth,setAuth]=useState(false)
  useEffect(() => {
    if(localStorage.getItem('user'))
setAuth(true)
console.log(localStorage.getItem('user'))
  });
  
  return(
    <div className='App'>
      {auth?<LoggedNavbar/>:<Navbar/>
      }
      
        <Routes>
        
          <Route path ='/' element ={<Home/>}/>
          <Route path ='/Home' element ={<Home/>}/>
          <Route path ='/Pass' element ={<Pass/>}/>
          <Route path ='/aboutUS' element ={<AboutUS/>}/>
          <Route path ='/Select' element ={<Select/>}/>
          <Route path ='/attestationdepresence' element ={<Presen/>}/>
          <Route path ='/Resultat' element ={<Exemple/>}/>
          <Route path ='/Stage' element ={<Stage/>}/>
          <Route path ='/HomeButton' element ={<HomeButton/>}/>
          <Route path ='/Contact' element ={<Contact/>}/>
        </Routes>
      
    </div>
  )
};
export default App;