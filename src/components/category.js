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
                setCategory(res.data);
                console.log(res.data)
                }
        }).catch((e)=>{
            //window.location.reload();
        });
        

    }
  
    return (
      <div>    

          <p>
           <div className='columns is-centered mt-5'>     
             
                { category.map((category,index)=>(
                  <button /* onClick={()=>deleteQuiz(quiz._id)} */ className='button is-medium is-danger mr-2' value={index+1} >{category.name}</button>
                 ))}
          </div>
          </p> 
                
          
      </div>
  )
}

export default Category
