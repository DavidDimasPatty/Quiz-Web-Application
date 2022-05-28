import React, { useEffect, useState } from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom";
import './quiz.css';

const Score = () => {
    const [score,setScore]=useState([]);
    const history = useHistory();
    useEffect(()=>{
        getAllScore();
    },[])

    const deleteQuiz= async(id)=>{
        await axios.delete(`http://localhost:5000/delete`,{
               data:{ 
                   id:id
                },
         }).then( window.location.href="/admin")
    }

    const getAllScore= async()=>{
        await axios.get('http://localhost:5000/getscore').
        then((res)=>{
             console.log(res.data)
             if (res.data.length!=0){
                setScore(res.data);
                }
        }).catch((e)=>{
            
        });
        

    }
  
    return (
      <div>    
        <table className='table is-stripped is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Play Id</th>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Time Finish</th>
                    <th>Time Taken</th>
                    <th>Quiz Category</th>
                </tr>
            </thead>
            <tbody>
                { score.map((score,index)=>(
                <tr key={score._id}>
                <td>{index+1}</td>
                <td>{score._id}</td>
                <td>{score.name}</td>
                <td>{score.score}</td>
                <td>{score.timeTaken}</td>
                <td>{score.time}</td>
                <td>{score.category}</td>
                </tr>

                ))}
                
            </tbody>
        </table>
    </div>
  )
}

export default Score
