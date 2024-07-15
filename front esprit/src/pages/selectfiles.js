import React from 'react';
import Phto from './images.png';
import'./Selectfiles.css';

import { Link } from 'react-router-dom';


function Select() {
   
    return (
        
        <div className='main1'>
            <div className='sub-maiin'>
                <div className='a'>
                    <div>
                    <Link to='/attestationdepresence'>
                        <button className='prsence' >Attestation de presence</button>
                    </Link>
                    </div>
                    <div>
                    <Link to='/Resultat'>
                        <button className='resultat'>Attestation de resultat</button>
                    </Link>
                    </div>
                    <div>
                    <Link to='/Stage'>
                        <button className='stage'>Demande de stage</button>
                    </Link>
                    </div>
                    <div>
                    <Link to='/'>
                        <button className='note'>Retour</button>
                    </Link>
                    </div>
                </div> 
            </div>
            <div className='sub-main'>
            <img src={Phto} alt='Phto'></img>
            </div>
            
         
        </div>
    
    )
}
export default Select;