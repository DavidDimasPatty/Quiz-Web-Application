import React, { useEffect, useState } from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom";
import './quiz.css';

const QuizList = () => {
    const [quiz,setQuiz]=useState([]);
    const history = useHistory();
    useEffect(()=>{
        getAllQuiz();
    },[])

    const deleteQuiz= async(id)=>{
        await axios.delete(`http://localhost:5000/delete`,{
               data:{ 
                   id:id
                },
         }).then( window.location.href="/admin")
    }

    const getAllQuiz= async()=>{
        await axios.get('http://localhost:5000/get').
        then((res)=>{
             console.log(res.data)
             if (res.data.length!=0){
                setQuiz(res.data);
                }
        }).catch((e)=>{
            window.location.reload();
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
                <tr key={quiz._id}>
                <td>{index+1}</td>
                <td>{quiz._id}</td>
                <td>{quiz.soal}</td>
                <td>{quiz.option1}</td>
                <td>{quiz.option2}</td>
                <td>{quiz.option3}</td>
                <td>{quiz.option4}</td>
                <td>
                    <Link to={`/edit/${quiz._id}`} className='button is-small is-info'>Edit</Link>
                    <button onClick={()=>deleteQuiz(quiz._id)} className='button is-small is-danger'>Delete</button>
                </td>

                </tr>

                ))}
                
            </tbody>
        </table>
    </div>
  )
}

export default QuizList
