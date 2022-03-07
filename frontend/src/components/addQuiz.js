import React from 'react'
import {useState} from 'react'
import axios from "axios";
import { useHistory} from 'react-router-dom';

const AddQuiz = () => {
    const [question, setQuestion]=useState('');
    const [option1, setoption1]=useState('');
    const [option2, setoption2]=useState('');
    const [option3, setoption3]=useState('');
    const [option4, setoption4]=useState('');
    const history=useHistory();

    const saveQuiz = async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:5000/create",{
            question:question,
            option1:option1,
            option2:option2,
            option3:option3,
            option4:option4
        })
        history.push("/");
    }
  return (
    <div>
            <form onSubmit={saveQuiz}>
                <div className='field'>
                    <label className='label'>Question</label>
                    <input class="input"
                     type="text"
                     placeholder="question"
                     value={question}
                     onChange={(e) =>setQuestion(e.target.value)}
                     ></input>
                </div>
                <div className='field'>
                    <label className='label'>Option 1</label>
                    <input class="input" 
                    type="text"
                     placeholder="option 1"
                     value={option1}
                     onChange={(e) =>setoption1(e.target.value)}
                     ></input>
                </div>
                <div className='field'>
                    <label className='label'>Option 2</label>
                    <input class="input" 
                    type="text"
                     placeholder="option 2"
                     value={option2}
                     onChange={(e) =>setoption2(e.target.value)}
                     ></input>
                </div>
                <div className='field'>
                    <label className='label'>Option 3</label>
                    <input class="input" type="text" 
                    placeholder="option 3"
                    value={option3}
                     onChange={(e) =>setoption3(e.target.value)}
                    ></input>
                </div>

                <div className='field'>
                    <label className='label'>Option 4</label>
                    <input class="input" 
                    type="text" 
                    placeholder="option 4"
                    value={option4}
                     onChange={(e) =>setoption4(e.target.value)}
                    ></input>
                </div>

                <div className='field'>
                        <button className='button is-primary'>Save</button>
                 </div>
            </form>
            {question} - {option1} -{option2} -{option3} - {option4}
    </div>
  )
}

export default AddQuiz