import React, { useEffect, useState } from 'react';
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom";
import { ReactSession }  from 'react-client-session';

const Result= () => {
    const [score,setScore]=useState('');
    const [user,setUser]=useState([]);
    const {id,idus}=useParams();
    useEffect(()=>{
       getScore()
    },[])

    const getScore = async (e)=>{
     
        await axios.get(`http://localhost:5000/getscoreuser`,{
        
            params:{
                id:idus
            }
        }).then((res)=>{
            setScore(res.data.score)
            setUser(res.data.name)
        }   
        );
    }
   
  
    return (
        <body>
         
        <div className='buttons'>
        <h1 style={{color:"white",fontSize:"20px"}}>{user}'s Final Score :</h1>
        <h1 style={{color:"white",fontSize:"15px"}}>{score}</h1>
        <Link to={`/category`} id='start'className='button-27'>Play Again</Link>
        <Link to={`/`} id='scoreboard' className='button-27'>Back to Home</Link>    
        </div>
     </body>
             
                
     )
}

export default Result
