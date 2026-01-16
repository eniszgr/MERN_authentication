  import React from 'react'
import { useState } from 'react'



  function AuthPage() {
      const [isLogin, setIsLogin] = useState(true);
      const [formData,setFormData] = useState({
        name:'',
        email:'',
        password:''
      })

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        if(!isLogin){
          console.log(formData.email,formData.password)
        }else{
          console.log(formData)
        }
      }

    return (
      <div className='flex-1 bg-pink flex justify-center align-center items-center'>
        <div className='flex text-center w-1/3 px-2 py-10 bg-amber-200 rounded-3xl'>
          <div className="form w-full h-1/3" >

            {/* Login/Register Header */}
            <h2 className='text-2xl font-semibold text-center mb-15'>{!isLogin ? 'Login' : 'Register'}</h2>

            {/* Login/Register Form */}
            <form action="" className='flex flex-col px-5 pl-8 items-center'>
            
                {isLogin ? (<input name='name' value={formData.name} type="text" onChange={handleChange} placeholder='Name' className='mb-5 w-2/3 p-1 w-full bg-amber-100 rounded-3xl pl-3' required />) : null  }

                <input name='email' value={formData.email} type="email"   onChange={handleChange} placeholder='Email' className='mb-5 w-2/3 p-1 w-full bg-amber-100 rounded-3xl pl-3' required/>

                <input name='password' value={formData.password} type="password" onChange={handleChange} placeholder='Password' className='mb-5 w-2/3 p-1 w-full bg-amber-100 rounded-3xl pl-3' required/>

                <button type='submit' className='bg-green-200 w-2/3 p-1 rounded-3xl' onClick={handleSubmit} >{!isLogin ? 'Login' : 'Register'}</button>


            </form>
            <p className="text-center mt-4 text-sm"> 
              {!isLogin ? "Don't you have an account?" : "Do you already have an account?"}
              <span onClick={()=>setIsLogin(!isLogin)}className="ml-2 text-indigo-600 cursor-pointer font-medium">
                {!isLogin ? "Register" : "Login"}
                </span>
            </p>

          </div>
        </div>
      </div>
    )
  }

  export default AuthPage