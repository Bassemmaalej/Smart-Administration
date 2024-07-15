import React, { useEffect, useState } from 'react';

import './style/Password.css';
import {  useNavigate } from 'react-router';
import axios from 'axios';

function Pass() {
    const [id,setId]=useState("");
    const [email,setEmail]= useState("");
    const [iden,setIedn]= useState("");
    const [act,SetAct]= useState("");

    useEffect(() => {
        const items= JSON.parse(localStorage.getItem("user"));
        if(items){
            setEmail(items.rfidExist.name);
            //setIedn (items.rfidExist.identifiant)
            SetAct(items.ActivationNumber.toString())
         
        }
        
      },[]);
    const navigate = useNavigate();
    const onSubmit=async(e)=>{
        e.preventDefault()
        const res = await axios.post("http://localhost:3001/api/user/VerifyAccount/"+act+"/"+email,{"bodyActivationNumber":id}).then((response)=>{
    if(response.status === 200){
        window.location.href="/Select" 
    }
  }).catch((error=>{
    console.log(error)
  }))
      
    }
    return(
        <div>
            <div className='main'>

             
             <div className='password'>
                 Password
             </div>
            
             <div className='container'>
             <form onSubmit={(e)=>onSubmit(e)}>
             <div className='input'>
                <input className="input-field" type="password" placeholder="Inserer votre Mot de passe" name="usrnm" onChange={(e)=>{setId(e.target.value)}} autoFocus />
             </div>
             
             <div >
       
             <button type='submit' value='login' className='buton' >Login</button>
    
             </div>
             </form>
             <div className='incorect'>
                 mot de passe incorect ou frais de scolarité impayer
             </div>
             </div>
             
             <div className='sub-main'>
                 <div className='Login'>
                    Login
                 </div>
                 <div className='welcome'>
                     Bienvenue
                 </div>
                 <div className='namerf'>
              {
                  email + "\n"+iden
              }
                 </div>
             </div>
         </div>
        </div>
        
    
    

    )
}
export default Pass;