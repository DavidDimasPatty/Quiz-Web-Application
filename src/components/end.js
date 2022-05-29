import React from 'react'
import {useState} from 'react'
import axios from "axios";
import { useHistory, useParams} from 'react-router-dom';
import { ReactSession }  from 'react-client-session';

const EndQuiz = () => {
    const [name, setName]=useState('');
    const history=useHistory();
    const {id}=useParams();

    const saveScore = async ()=>{
      
        await axios.post("http://localhost:5000/addscore",{
            name:name,
            score:0,
            time:Date.now(),
            category:id
            
        }).then(  
          redirect()
        )
    }

    const redirect = async ()=>{
      
      await axios.get("http://localhost:5000/getiduser",{
          
      }).then((res)=>{
        console.log(res.data[0]._id);
        window.location.href=`/play/${id}/${res.data[0]._id}/1`
      })  
          
  }


  return (
    <div className='buttons'>
            
                <div className='field'>
                    <label className='label' style={{color:"white"}}>Insert Your Name</label>
                    <input className="input"
                     type="text"
                     placeholder="question"
                     value={name}
                     onChange={(e) =>setName(e.target.value)}
                     ></input>
                </div>
                

                        <button className='button is-primary' onClick={saveScore}>Save</button>
                
          
       
    </div>
  )
}

export default EndQuiz