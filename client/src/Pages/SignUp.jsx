import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OAuth from '../components/OAuth'

const SignUp = () => {

  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setErrors(false);
      const res = await fetch('/api/auth/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data)
      setLoading(false)
      if (data.success === false) {
        setErrors(true);
        return;
      }
      navigate('/signin')
    } catch (error) {
      setLoading(false)
      setErrors(true)
    }

  }


  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" id="username" placeholder='Username' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange} />
        <input type="email" id="email" placeholder='Email' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange} />
        <input type="password" id="password" placeholder='Password' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange} />
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
        <OAuth/>
      </form>
      <div className='flex mt-5 gap-2'>
        <p>Have an account ?</p>
        <Link to='/signin'><span className='text-blue-500'>Sign In</span></Link>
      </div>
      <p className='text-red-700 mt-5 font-semibold'>{errors && "Something went wrong!"}</p>
    </div>
  )
}

export default SignUp