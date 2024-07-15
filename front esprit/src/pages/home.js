import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Con from './concour.png';
import NBA from './NBA.png';
import Esp from './esp.png';
import './home.css'
import CGE from './CGE.png';  
import AUF from './AUF.png';
import Euro from './Euro.png';
import CDIO from './CDIO.png';


import axios from 'axios';
import {  useNavigate } from 'react-router';


function Home(){
    const [index, setIndex] = useState(0);
    const [id,setId]=useState("");
    const navigate = useNavigate();
    
   
 const onSubmit = async (e)=>{
  e.preventDefault();
  const res = await axios.post("http://localhost:3001/api/user/login",{"Rfid":id}).then((response)=>{
    if(response.status === 200){
        localStorage.setItem("user",JSON.stringify(response.data ));
        //localStorage.removeItem("user")
        //navigate(`Home`)
        navigate(`/Pass`);
      

       
    }
  }).catch((error=>{
    console.log(error)
  }))

 }
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      
      <>
      <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="firstslide"
            src={Con}
            alt="First slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="secondslide"
            src={NBA}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="thirdslide"
            src={Esp}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      </div>
      <div>
        <form onSubmit={(e)=>onSubmit(e)}>
        <div className='input'>
                <input className="input-fiel" type="password" placeholder="Scan Carte etudiant" name="usrnm"  onChange={(e)=>{setId(e.target.value)}} autoFocus />
        </div>
        <div >
          
               <button type='submit' value='login' className='button' >GO</button>
              
           
             </div>
             </form>
      </div>
      <div className='im' >
        
        <img
            className="cge"
            src={CGE}
            alt="CGE"
          />
        <img
            className="auf"
            src={AUF}
            alt="AUF"
          />
        <img
            className="euro"
            src={Euro}
            alt="Euro"
          />
        <img
            className="cdio"
            src={CDIO}
            alt="cdio"
          />
        
      
      </div>
      
      </>
      
      
   
    );
  }
  
  
  export default Home;
