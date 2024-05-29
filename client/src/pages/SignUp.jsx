import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {

  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  // console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      setErrors(false)
      const res = await fetch('http://localhost:8500/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      console.log(data)
      setLoading(false)
      if(data.success === false){
        setErrors(true)
        return;
      }
    } catch (error) {
      setLoading(false)
      setErrors(true)
    }

  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type="text"
          placeholder='Username'
          id='username'
          className='bg-slate-100 p-3 rounded-lg '
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder='Email'
          id='email'
          className='bg-slate-100 p-3 rounded-lg '
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder='Password'
          id='password'
          className='bg-slate-100 p-3 rounded-lg '
          onChange={handleChange}
        />
        <button 
          disabled={loading}
          className=' bg-slate-700 text-white py-2 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? 'Loading...' : 'SignUp'}
        </button>
      </form>
      <div className='flex gap-2 mt-5 '>
        <p>Have an account ?</p>
        <Link to='/signin'>
          <span className='text-blue-500'>Sign in</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>{errors && "Something went wrong"}</p>
    </div>
  )
}

export default SignUp