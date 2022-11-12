import React,{useState} from 'react'
import axios from 'axios'
import { BASE_URL } from '../constant';

import { useNavigate,Link } from 'react-router-dom';
import {Button, useToast } from '@chakra-ui/react';
import { DataState } from '../context/Provider';

const AddMovie = () => {

    // const [loading,setLoading]=useState(false);

    let[movieName,setmovieName]=useState("");
    let[type,setType]=useState("");
    let[trailer,setTrailer]=useState("");
    let[language,setLanguage]=useState("");
    let[about,setAbout]=useState("");
    let[releaseDate,setreleaseDate]=useState("");
    let[poster,setPoster]=useState("");
    let[categori,setCategori]=useState("");
    let[like,setlike]=useState("");
    let[duration,setDuration]=useState("");

    const {user,movies} = DataState();

    const navigate=useNavigate();

    let handleSubmit=async ()=>{
        // setLoading(true)
        let data={
            movieName,
            type,
            trailer,
            language,
            releaseDate,
            about,
            poster,
            categori,
            // like,
            duration
      }
      let res=await axios.post(`${BASE_URL}postmovie`,data)
      if (res.status === 201)
       navigate('/home')
    }

  return (
    
    <div className=''>
        <h3 className='d-flex justify-content-center fw-bold text-dark'>ADD MOVIE</h3>
      
        <div  className="d-back">
   <Link to="/home">
 <Button bg="#1cb61c" color="white" 
           _hover={{
             background:"#50ce50",
             color:"white",
           }}
    >back</Button>
  </Link>
 </div>
 <div className=' container'>
 <div className='py-5'>
 <div className='col-lg-12'>
      <div className="mb-3">
        <label  className="form-label">MovieName</label>
         <input type="text" className="form-control" placeholder="Enter Movie Name" onChange={(e)=>setmovieName(e.target.value)} required/>
     </div>
     <div className="mb-3">
        <label  className="form-label">Movie Type</label>
         <input type="text" className="form-control" placeholder="Enter Type (like U ,U A,A)" onChange={(e)=>setType(e.target.value)} required/>
     </div>
     <div className="mb-3">
        <label  className="form-label">Trailer</label>
         <input type="text" className="form-control" placeholder="Paste Trailer Link" onChange={(e)=>setTrailer(e.target.value)} required/>
     </div>
     <div className="mb-3">
        <label  className="form-label">Language</label>
         <input type="text" className="form-control" placeholder="Enter Language" onChange={(e)=>setLanguage(e.target.value)} required/>
     </div>
     <div className="mb-3">
        <label  className="form-label">Date</label>
         <input type="text" className="form-control" placeholder="Enter Release Date" onChange={(e)=>setreleaseDate(e.target.value)} required/>
     </div>
     <div className="mb-3">
        <label  className="form-label">About</label>
         <textarea type="textarea" className="form-control" placeholder="About Movie" onChange={(e)=>setAbout(e.target.value)} required/>
     </div>
     <div className="mb-3">
        <label  className="form-label">Poster</label>
         <input type="text" className="form-control" placeholder="Paste poster link" onChange={(e)=>setPoster(e.target.value)} required/>
     </div>
     <div className="mb-3">
        <label  className="form-label">Category</label>
         <input type="text" className="form-control" placeholder="Enter Movie Category" onChange={(e)=>setCategori(e.target.value)} required/>
     </div>
     {/*   */}
     <div className="mb-3">
        <label  className="form-label">Duration</label>
         <input type="text" className="form-control" placeholder="Enter Duration of Movie" onChange={(e)=>setDuration(e.target.value)} required/>
     </div>
     <Button 
    // isLoading={loading}
    // loadingText='Loading..'
    colorScheme='red'
    variant='outline'
    onClick={()=>handleSubmit()} >
    Submit
  </Button>
     </div>
     </div>
     </div>
    </div>
  )
}

export default AddMovie