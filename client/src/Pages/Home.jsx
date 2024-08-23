import React from 'react'

const Home = () => {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>Welcome to my Auth App!</h1>
      <p className='mb-4 text-slate-700'>
        In a MERN (MongoDB, Express.js, React, Node.js) application, authentication is a critical component
        that ensures secure access and management of user data. Typically, authentication is handled using
        JSON Web Tokens (JWT) or session-based methods.
      </p>
      <p className='mb-4 text-slate-700'>
        On the client side, React handles authentication through state management and routing. Using libraries
        like React Router, the application can control access to different routes based on the user's authentication status.
      </p>
      <p className='mb-4 text-slate-700'>
        On the server side, Node.js and Express.js play a pivotal role in managing authentication. The server is responsible
        for handling login and registration requests, validating credentials, and generating tokens or managing sessions.
        Middleware functions can be employed to protect routes and ensure that only authenticated users can access certain endpoints.
      </p>
    </div>
  )
}

export default Home