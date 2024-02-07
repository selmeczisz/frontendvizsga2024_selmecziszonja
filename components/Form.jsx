import React from 'react'
import  { useState } from 'react'
import { Könyv } from '../src/class/Könyv.class'

export const Form = () => {

    const [cim, setCim] = useState("")
    const [isbn, setIsbn] = useState(0)
    const lista=[ ]
  
    const handleSubmit=()=>{
        const book = new Könyv(cim,isbn)
        lista.push(book)
  console.log(lista);
    }
  return (
   
    <div><div className='container'>
        <h2>Új könyv felvétele</h2>
    <div className='mb-2'>
      <label className='form-label' htmlFor='title'>Cím</label>
      <input type='text' className='form-control' id='title' value={cim}
      onChange={(e)=> setCim(e.target.value)} />
    </div>
    <div className='mb-2'>
      <label className='form-label' htmlFor='isbn'>ISBN</label>
      <input type='text' className='form-control' id='isbn'value={isbn}
      onChange={(e)=>setIsbn(e.target.value)}/>
    </div>
    <div className='alert alert-danger'> [[ A hibaüzenet helye ]] </div>
    <div className='mb-2'>
      <input type='button' className='btn btn-primary' value='Új könyv'  onClick={handleSubmit}/>
    </div>
  </div>
      
  </div>
  )
}
