

import React,{Component}from 'react';
import {MenuItems} from './MenuItems';
import'./Navbar.css';
import {Link} from 'react-router-dom';
import Logo from './es.png';
 
class Navbar extends Component {
 
    render(){
        
        return(
            <nav className="NavbarItems">
                <div className='navbar-logo'>
                <Link to='/'>
                    <img src={Logo} alt='Logo'/>
                   
                        
                    </Link>
                    
                    <i className='fab fa-react'></i></div>
                <div className='menu-icon'>
                    
                </div>
                <ul className='nav-menu'>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                
                                <Link style={{textDecoration:'none',color:'white'}} to={`/${item.title}`} >{item.title}</Link>
                               
                            </li>
                            
                        )
                    })}
                   
                   
                </ul>
                <div>

                </div>
            

            </nav>
        )
    }
}
export default Navbar;