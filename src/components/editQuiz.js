import React from 'react'
import {useState,useEffect} from 'react'
import axios from "axios";
import { useHistory,useParams} from 'react-router-dom';

const EditQuiz = () => {
    const [question, setQuestion]=useState('');
    const [option1, setoption1]=useState('');
    const [option2, setoption2]=useState('');
    const [option3, setoption3]=useState('');
    const [option4, setoption4]=useState('');
    const history=useHistory();
    const {id}=useParams();

    const UpdateQuiz = async (e)=>{
        e.preventDefault();
        await axios.patch(`http://localhost:5000/${id}`,{
            question:question,
            option1:option1,
            option2:option2,
            option3:option3,
            option4:option4
        })
        history.push("/");
    }

    useEffect(()=>{
        getIdQuiz();
    },[]);

    const getIdQuiz = async ()=>{
        const response= await axios.get(`http://localhost:5000/${id}`);
        setQuestion(response.data.question);
        setoption1(response.data.option1);
        setoption2(response.data.option2);
        setoption3(response.data.option3);
        setoption4(response.data.option4);
    }
  return (
    <div>
            <form onSubmit={UpdateQuiz}>
                <div className='field'>
                    <label className='label'>Question</label>
                    <input className="input"
                     type="text"
                     placeholder="question"
                     value={question}
                     onChange={(e) =>setQuestion(e.target.value)}
                     ></input>
                </div>
                <div className='field'>
                    <label className='label'>Option 1</label>
                    <input className="input" 
                    type="text"
                     placeholder="option 1"
                     value={option1}
                     onChange={(e) =>setoption1(e.target.value)}
                     ></input>
                </div>
                <div className='field'>
                    <label className='label'>Option 2</label>
                    <input className="input" 
                    type="text"
                     placeholder="option 2"
                     value={option2}
                     onChange={(e) =>setoption2(e.target.value)}
                     ></input>
                </div>
                <div className='field'>
                    <label className='label'>Option 3</label>
                    <input className="input" type="text" 
                    placeholder="option 3"
                    value={option3}
                     onChange={(e) =>setoption3(e.target.value)}
                    ></input>
                </div>

                <div className='field'>
                    <label className='label'>Option 4</label>
                    <input className="input" 
                    type="text" 
                    placeholder="option 4"
                    value={option4}
                     onChange={(e) =>setoption4(e.target.value)}
                    ></input>
                </div>

                <div className='field'>
                        <button className='button is-primary'>Update</button>
                 </div>
            </form>
            {question} - {option1} -{option2} -{option3} - {option4}
    </div>
  )
}

export default EditQuiz