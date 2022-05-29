import React, { useEffect, useState } from 'react';
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom";
import { ReactSession }  from 'react-client-session';

const Play= () => {
    const [quiz,setQuiz]=useState([]);
    const history = useHistory();
    const {id}=useParams();
    useEffect(()=>{
        getIdQuiz();
    },[])

 
    const getIdQuiz= async()=>{
        console.log(ReactSession.get("score"));
        await axios.get(`http://localhost:5000/getquizc`,{
            params:{
                idc:id
            }
        }).
        then((res)=>{
             console.log(res.data)
             if (res.data.length!=0){
                setQuiz(res.data);
                }
        }).catch((e)=>{

        });
    }

    function change(pilih,ans) {
        if(pilih==ans){
            var scoretemp= ReactSession.get("score")+10;
            ReactSession.set("score", scoretemp);
            console.log( ReactSession.get("score"))
            //window.location.href=`/end/${id}`
        }
        else{
           // window.location.href=`/end/${id}`
        }
    }

    
  
    return (
        
                 <div className='buttons'>
                 <h2 className='columns is-centered' style={{color: "white", fontSize:"40px"}}>{quiz.soal}</h2>
                 <button  onClick={()=>change(quiz.option1,quiz.jawaban)}  className='button-27'>{quiz.option1}</button>
                <button  onClick={()=>change(quiz.option2,quiz.jawaban)}  className='button-27'>{quiz.option2}</button>
                <button  onClick={()=>change(quiz.option3,quiz.jawaban)}  className='button-27'>{quiz.option3}</button>
                <button  onClick={()=>change(quiz.option4,quiz.jawaban)}  className='button-27'>{quiz.option4}</button>
                 
        </div>
             
                
     )
}

export default Play
