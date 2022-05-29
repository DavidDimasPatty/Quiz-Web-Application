import React from 'react'
import {Link} from "react-router-dom";
import './home.css';
import { ReactSession }  from 'react-client-session';


function Home() {
  ReactSession.set("score", "0"); 
  console.log(ReactSession.get("score")); 
  return ( 
      <body>
         
        <div className='buttons'>
        <h1>Welcome To Quizez</h1>
        <Link to={`/category`} id='start'className='button-27'>Start</Link>
        <Link to={`/scoreboard`} id='scoreboard' className='button-27'>Score Board</Link>    
        <Link to={`/admin`} id='admin' className='button-27'>Admin</Link>     
        </div>
     </body>
     )
}

export default Home