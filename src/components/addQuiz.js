import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useHistory} from 'react-router-dom';

const AddQuiz = () => {
    const [question, setQuestion]=useState('');
    const [option1, setoption1]=useState('');
    const [option2, setoption2]=useState('');
    const [option3, setoption3]=useState('');
    const [option4, setoption4]=useState('');
    const [answer, setAnswer]=useState('');
    const [category, setCategory]=useState([]);
    const [category2, setCategory2]=useState("");
    const history=useHistory();
    useEffect(()=>{
        getAllCategory();
    },[])
    const saveQuiz = async ()=>{
        const devEnv = process.env.NODE_ENV !== "production";
        await axios.post(`${devEnv  ? process.env.REACT_APP_DEV_URL : process.env.REACT_APP_PROD_URL}/add`,{
            question:question,
            option1:option1,
            option2:option2,
            option3:option3,
            option4:option4,
            answer:answer,
            category:category2
        }).then( window.location.href="/admin")
    }

    const getAllCategory= async()=>{
        const devEnv = process.env.NODE_ENV !== "production";
        await axios.get(`${devEnv  ? process.env.REACT_APP_DEV_URL : process.env.REACT_APP_PROD_URL}/getallcategory`).
        then((res)=>{
             console.log(res.data)
             if (res.data.length!=0){
                setCategory(res.data);
                }
        }).catch((e)=>{
           // window.location.reload();
        });
    }

  return (
    <div>
            <form onSubmit={saveQuiz} action="/admin">
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
                    <label className='label'>Answer</label>
                    <input className="input" 
                    type="text" 
                    placeholder="Answer"
                    value={answer}
                     onChange={(e) =>setAnswer(e.target.value)}
                    ></input>
                </div>

                <div className='field'>
                    <label className='label'>Category</label>
                    <select  defaultValue={"Select Categories"} onChange={(e) =>setCategory2(e.target.value)} > 
                    <option value="default" disabled hidden selected>
                        Select categories
                        </option>
                    { category.map((category,key)=>(
                        <option value={category._id} >{category.name}</option>
                        ))}
                      
                    </select>
                </div>

                <div className='field'>
                        <button className='button is-primary'>Save</button>
                 </div>
            </form>
            {category2}
    </div>
  )
}

export default AddQuiz