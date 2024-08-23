import React from 'react'

const About = () => {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>About</h1>
      <p className='mb-4 text-slate-700'>
        Welcome to our MERN application! We are a dedicated team of developers and designers committed to creating a
        seamless and secure digital experience. Our mission is to leverage the power of modern web technologies to
        build applications that are not only functional but also user-friendly and engaging.
      </p>
      <p className='mb-4 text-slate-700'>
        Our application is designed with your security and convenience in mind. We use robust authentication mechanisms
        to ensure that your data and interactions are protected. Through the use of JSON Web Tokens (JWT),
        we securely manage user sessions and access control, providing a safe environment for all users.
      </p>
      <p className='mb-4 text-slate-700'>
        We believe in continuous improvement and strive to keep our application at the forefront of technology trends.
        Our team is dedicated to refining and expanding our features to enhance your experience.
      </p>
    </div>
  )
}

export default About