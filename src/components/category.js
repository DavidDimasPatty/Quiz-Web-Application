import React, { useEffect, useState } from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom";
import './quiz.css';
import { ReactSession }  from 'react-client-session';


const Category = () => {
    console.log(ReactSession.get("score")); 
    const [category,setCategory]=useState([]);
    const history = useHistory();
    useEffect(()=>{
        getAllCategory();
    },[])

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
                  <button  onClick={()=>window.location.href='/play/'+category._id}  className='button is-medium is-danger mr-2' value={index+1} >{category.name}</button>
                 ))}
          </div>
          </p> 
                
          
      </div>
  )
}

export default Category
