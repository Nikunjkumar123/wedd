import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
// import login from './image/loinin.avif'

const Login = () => {
  const email = "samuhikvivah@gmail.com"
  const password = "Sitaram@2207"
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const getInputData = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const postData = async (e) => {
    e.preventDefault()
    try {
      if (email === data.email && password === data.password) {
        sessionStorage.setItem("login", true)
        toast.success("Login sucessfully")
        navigate("/home")
        window.location.href = '/home'
      }
      else {
        toast.error("Invaild Username Or Password")
      }
    } catch (error) {
      toast.error("invaild username or password")
    }
  }

  return (
    <>
      <div className="container maindiv">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 mt-5">
            <div className="login-container">
              <h5>Login</h5>
              <p>If you have an account with us, please log in.</p>
              <form onSubmit={postData}>
                <label for="username">Email</label>
                <input type="text" className='form-control' placeholder='Enter Email Address' name="email" required onChange={getInputData} />
                <label for="password">Password</label>
                <input type="password" className='form-control' placeholder='******' name="password" required onChange={getInputData} />
                <button type="submit" className='button'>Login</button>
                <Link className='float-end text-dark mt-2' to="/forgetpassword1">forget Password?</Link>
              </form>
            </div>
          </div>
          {/* <div className="col-md-4 mt-5">
            <div className="login-container">
              <h5>NEW CUSTOMER?</h5>
              <p className='mt-4'>Registering for this site allows you to access your order status and history. We’ll get a new account set up for you in no time. For this will only ask you for information necessary to make the purchase process faster and easier</p>
              <button className='button mt-3'> <Link to='/createaccount' className='text-light' >Create An Account</Link></button>
            </div>
          </div> */}
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  )
}

export default Login