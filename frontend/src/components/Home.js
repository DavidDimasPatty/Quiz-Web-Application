import React from 'react'
import {Link} from "react-router-dom";
import './home.css';

function Home() {
  return (
      <div className='buttons'>
     <Link to={`/category`} id='start'className='button-27'>Start</Link>
     <Link to={`/scoreboard`} id='scoreboard' className='button-27'>Score Board</Link>    
     <Link to={`/admin`} id='admin' className='button-27'>Admin</Link>     
     </div>
     )
}

export default Home