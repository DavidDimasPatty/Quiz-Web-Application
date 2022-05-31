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
    const [answer, setAnswer]=useState('');
    const [category, setCategory]=useState([]);
    const [category2, setCategory2]=useState("");
    const history=useHistory();
    const {id}=useParams();
    const UpdateQuiz = async (e)=>{
        const devEnv = process.env.NODE_ENV !== "production";
        e.preventDefault();
        await axios.patch(`${devEnv  ? process.env.REACT_APP_DEV_URL : process.env.REACT_APP_PROD_URL}update`,{
        
            data:{
                id:id,
                question:question,
                option1:option1,
                option2:option2,
                option3:option3,
                option4:option4,
                answer:answer,
                category:category2
            }
        }).then( window.location.href="/admin");
    }

    useEffect(()=>{
        getIdQuiz();
        getAllCategory();
    },[]);

    const getIdQuiz = async ()=>{
        console.log(id)
        const devEnv = process.env.NODE_ENV !== "production";
        await axios.get(`${devEnv  ? process.env.REACT_APP_DEV_URL : process.env.REACT_APP_PROD_URL}/getid`,{
            params:{
                id:id
            }
        }).then((response)=>{
            setQuestion(response.data.soal);
            setoption1(response.data.option1);
            setoption2(response.data.option2);
            setoption3(response.data.option3);
            setoption4(response.data.option4);
            setAnswer(response.data.jawaban);
            setCategory2(response.data.category);
        });
        
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
                    <select  onChange={(e) =>setCategory2(e.target.value)} > 
                   
                    { category.map((category,key)=>(
                        <option value={category._id} selected={(category2=== category._id) ? true : false} >{category.name}</option>
                     ))}
                      
                    </select>
                </div>

                <div className='field'>
                        <button className='button is-primary'>Update</button>
                 </div>
            </form>
          
    </div>
    
  )
}

export default EditQuiz