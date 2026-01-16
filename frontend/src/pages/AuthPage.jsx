import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser, registerUser, reset } from "../redux/auth/authSlice";

function AuthPage() {

  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isSuccess || user) {
      setTimeout(() => {
    navigate('/profile');
  }, 1000);
      
    }

    dispatch(reset())

  }, [user, isSuccess, dispatch, navigate])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      dispatch(loginUser({
        email: formData.email,
        password: formData.password
      }));
    } else {
      dispatch(registerUser(formData));
    }
  };

  return (
    <div className='flex-1 bg-pink-100 flex justify-center items-center'>
      <div className='flex text-center w-1/3 px-4 py-10 bg-amber-200 rounded-3xl'>
        <div className="form w-full">

          <h2 className='text-2xl font-semibold text-center mb-5'>
            {isLogin ? 'Login' : 'Register'}
          </h2>

          <form onSubmit={handleSubmit} className='flex flex-col items-center'>

            {!isLogin && (
              <input
                name='name'
                value={formData.name}
                type="text"
                onChange={handleChange}
                placeholder='Name'
                className='mb-5 w-full p-2 bg-amber-100 rounded-3xl pl-3'
                required
              />
            )}

            <input
              name='email'
              value={formData.email}
              type="email"
              onChange={handleChange}
              placeholder='Email'
              className='mb-5 w-full p-2 bg-amber-100 rounded-3xl pl-3'
              required
            />

            <input
              name='password'
              value={formData.password}
              type="password"
              onChange={handleChange}
              placeholder='Password'
              className='mb-5 w-full p-2 bg-amber-100 rounded-3xl pl-3'
              required
            />

            <button
              disabled={isLoading}
              className='bg-green-300 w-full p-2 rounded-3xl font-medium'
            >
              {isLoading ? "Loading..." : isLogin ? "Login" : "Register"}
            </button>

          </form>

          {isError && (
            <p className="text-red-600 text-center mt-3">
              {message}
            </p>
          )}

          {isSuccess && (
            <p className="text-green-600 text-center mt-3">
              {message}
            </p>
          )}

          <p className="text-center mt-4 text-sm">
            {isLogin ? "Don't you have an account?" : "Do you already have an account?"}

            <span
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-indigo-600 cursor-pointer font-medium"
            >
              {isLogin ? "Register" : "Login"}
            </span>
          </p>

        </div>
      </div>
    </div>
  )
}

export default AuthPage;
