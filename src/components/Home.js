import React from 'react'
import {Link} from "react-router-dom";
import './home.css';
import { ReactSession }  from 'react-client-session';


function Home() {
  return ( 
      <body>
         
        <div className='buttons'>
        <h1 style={{color:"white",fontSize:"20px"}}>Welcome To Quizez</h1>
        <Link to={`/category`} id='start'className='button-27'>Start</Link>
        <Link to={`/scoreboard`} id='scoreboard' className='button-27'>Score Board</Link>    
        <Link to={`/admin`} id='admin' className='button-27'>Admin</Link>     
        </div>
     </body>
     )
}

export default Home