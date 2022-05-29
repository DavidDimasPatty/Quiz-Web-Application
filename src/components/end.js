import React from 'react'
import {useState} from 'react'
import axios from "axios";
import { useHistory, useParams} from 'react-router-dom';
import { ReactSession }  from 'react-client-session';

const EndQuiz = () => {
    const [name, setName]=useState('');
    const history=useHistory();
    const {id}=useParams();
    console.log( ReactSession.get("score"))
    const saveScore = async ()=>{
      
        await axios.post("http://localhost:5000/addscore",{
            name:name,
            score:ReactSession.get("score"),
            time:Date.now(),
            category:id
            
        }).then(  window.location.href="/" )
    }
  return (
    <div className='buttons'>
            <form onSubmit={saveScore} action="/">
                <div className='field'>
                    <label className='label' style={{color:"white"}}>Insert Your Name</label>
                    <input className="input"
                     type="text"
                     placeholder="question"
                     value={name}
                     onChange={(e) =>setName(e.target.value)}
                     ></input>
                </div>
                

                        <button className='button is-primary'>Save</button>
                
            </form>
       
    </div>
  )
}

export default EndQuiz