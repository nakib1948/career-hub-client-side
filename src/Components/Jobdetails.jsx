import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Jobdetails = () => {
    const [alldata,setalldata]=useState([])
    const [singledata,setSingledata]=useState([])
    const {id}= useParams();
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>{
            setalldata(data)
        })
       },[])

    return (
        <div>
            <h1>Job details</h1>
        </div>
    );
};

export default Jobdetails;