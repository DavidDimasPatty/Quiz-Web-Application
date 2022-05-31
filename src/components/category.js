import React, { useEffect, useState } from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom";
import './quiz.css';
import { ReactSession }  from 'react-client-session';


const Category = () => {
    const [category,setCategory]=useState([]);
    const history = useHistory();
    useEffect(()=>{
        getAllCategory();
    },[])

    const getAllCategory= async()=>{
        const devEnv = process.env.NODE_ENV !== "production";
        await axios.get(`${devEnv  ? process.env.REACT_APP_DEV_URL : process.env.REACT_APP_PROD_URL}/getcategory`).
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
                  <button  onClick={()=>window.location.href='/end/'+category._id}  className='button is-medium is-danger mr-2' value={index+1} >{category.name}</button>
                 ))}
          </div>
          </p> 
                
          
      </div>
  )
}

export default Category
