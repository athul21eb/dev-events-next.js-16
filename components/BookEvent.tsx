
"use client"
import React, { useState } from "react";


const BookEvent = () => {

  const handleSubmit   = async (e:React.FormEvent<HTMLFormElement>)=>{

    e.preventDefault();

    setTimeout(()=>{
      setSubmitted(true);
    },4000)
  }

  const [email,setEmail] = useState('');
  const [submitted,setSubmitted] = useState(false);
  return (
    <div id="book-event">
      {submitted?<p className="text-sm"> thankyou for Booking your slot !</p>:
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter your email address"/>
        </div>
        <button type="submit"  className="button-submit">Submit</button>
        </form>}
    </div>
  )
}

export default BookEvent