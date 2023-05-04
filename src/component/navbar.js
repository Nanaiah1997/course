import React from 'react'
//import { Link, Route } from 'react-router-dom';
import Model from './Model';

const Navbar = () => {
  const [model, setModel]=React.useState(false)

  return (
    <nav>
        {model && <Model closeModel={setModel}/>}
        <ul className='nav-list'>
            <li>Rolai</li>
            <li>Learn</li>
            <li>Apply</li>
            <li>Solve</li>
          
        </ul>
        <ul className='nav-list-1'>
          <li onClick={()=> setModel(true)}>Sign</li>
          <li><button className='nav-button' onClick={()=>setModel(true)}>Learn For Free</button></li>
        </ul>
    </nav>
    
  )
}

export default Navbar;