import React, { useEffect, useState } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import './quiz.css';

const QuizList = () => {
    const [quiz,setQuiz]=useState([]);
    useEffect(()=>{
        getAllQuiz();
    },[])

    const deleteQuiz= async(id)=>{
        await axios.delete(`http://localhost:5000/${id}`);
        getAllQuiz();
    }

    const getAllQuiz= async()=>{
        await axios.get('http://localhost:5000/get').
        then((res)=>{
            // console.log(res)
            // if (res.data.length!=0){
            //     setQuiz(res.data);
            //     }
        }).catch((e)=>{
            console.log("No data found")
        });
        

    }
  
    return (
      <div>    
        <Link to="add" className='button is-primary mt-2'>Add Quiz</Link>
        <table className='table is-stripped is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Id_question</th>
                    <th>Question</th>
                    <th>Option1</th>
                    <th>Option2</th>
                    <th>Option3</th>
                    <th>Option4</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { quiz.map((quiz,index)=>(
                <tr key={quiz.id}>
                <td>{index+1}</td>
                <td>{quiz.id_question}</td>
                <td>{quiz.question}</td>
                <td>{quiz.option1}</td>
                <td>{quiz.option2}</td>
                <td>{quiz.option3}</td>
                <td>{quiz.option4}</td>
                <td>
                    <Link to={`/edit/${quiz.id}`} className='button is-small is-info'>Edit</Link>
                    <button onClick={()=>deleteQuiz(quiz.id)} className='button is-small is-danger'>Delete</button>
                </td>

                </tr>

                ))}
                
            </tbody>
        </table>
    </div>
  )
}

export default QuizList
