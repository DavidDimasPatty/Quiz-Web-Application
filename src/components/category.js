import React, { useEffect, useState } from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom";
import './quiz.css';

const Category = () => {
    const [category,setCategory]=useState([]);
    const history = useHistory();
    useEffect(()=>{
        getAllCategory();
    },[])

    const deleteQuiz= async(id)=>{
        await axios.delete(`http://localhost:5000/delete`,{
               data:{ 
                   id:id
                },
         }).then( window.location.href="/admin")
    }

    const getAllCategory= async()=>{
        await axios.get('http://localhost:5000/getcategory').
        then((res)=>{
             console.log(res.data)
             if (res.data.length!=0){
                setQuiz(res.data);
                }
        }).catch((e)=>{
            //window.location.reload();
        });
        

    }
  
    return (
      <div>    
       
                { category.map((category,index)=>(
               
                    <button /* onClick={()=>deleteQuiz(quiz._id)} */ className='button is-small is-danger' value={category.name}></button>
             
                ))}
                
          
    </div>
  )
}

export default Category
