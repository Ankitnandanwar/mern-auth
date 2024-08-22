import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signinStart, signinSuccess, signinFailed } from '../Redux/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import OAuth from '../components/OAuth'

const SignIn = () => {

  const [formData, setFormData] = useState({})
  const {loading, error} = useSelector((state) => state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signinStart())
      const res = await fetch('/api/auth/signin', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      // console.log(data)
      if (data.success === false) {
        dispatch(signinFailed(data))
        return;
      }
      dispatch(signinSuccess(data))
      navigate('/');
    } catch (error) {
      dispatch(signinFailed(error))
    }

  }


  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="email" id="email" placeholder='Email' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange} />
        <input type="password" id="password" placeholder='Password' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange} />
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? 'Loading...' : 'Sign In'}
        </button>
        <OAuth/>
      </form>
      <div className='flex mt-5 gap-2'>
        <p>Dont have an account ?</p>
        <Link to='/signup'><span className='text-blue-500'>Sign Up</span></Link>
      </div>
      <p className='text-red-700 mt-5 font-semibold'>{error ? error.message || "Something went wrong!" : ""}</p>
    </div>
  )
}

export default SignIn