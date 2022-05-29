import React, { useEffect, useState } from 'react';
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom";
import { ReactSession }  from 'react-client-session';

const Play= () => {
    const [score,setScore]=useState('');
    const [quiz,setQuiz]=useState([]);
    const history = useHistory();
    const {id,idus,ques}=useParams();
    var scoreFinal=0;
    useEffect(()=>{
        checkTenQuiz();
        redirect();
        getIdQuiz();
    },[])

    function checkTenQuiz() {
        if (ques==10){
            window.location.href=`/result/${id}/${idus}`
        }
    }

 
    const getIdQuiz= async()=>{
        await axios.get(`http://localhost:5000/getquizc`,{
            params:{
                idc:id,
                q:ques
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
    
    const redirect = async ()=>{
      
        await axios.get("http://localhost:5000/getiduser",{
            
        }).then((res)=>{
          setScore(res.data[0].score)
        })  
            
    }

    const UpdateScore = async (e)=>{
     
        await axios.patch(`http://localhost:5000/updatescore`,{
        
            data:{
                id:idus,
                score:scoreFinal
            }
        }).then(   window.location.href=`/play/${id}/${idus}/${parseInt(ques)+1}`);
    }


    function change(pilih,ans) {
        if(pilih==ans){
           scoreFinal =parseInt(score)+10
           UpdateScore()
        }
        else{
            window.location.href=`/play/${id}/${idus}/${parseInt(ques)+1}`
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
