import React , {useState} from 'react'
import {useNavigate,Link} from 'react-router-dom'

import './index.css'

const Register = () => {
    const navigate = useNavigate();
    const [userInput,setInput] = useState({
        username:"",
        password:""
    });
    const onSubmitForm = (e) => {
        e.preventDefault();
        localStorage.setItem("user",JSON.stringify(userInput))
        navigate("/login")
    }
    return (
      <div className="login-container">
        <form className="login-form" onSubmit={onSubmitForm}>
          <h1 className="login-heading">Register</h1>
          <div className="input-field-container">
        <label htmlFor="username" className="login-input-label">
          USERNAME
        </label>
        <input
          name = "username"
          value={userInput.username}
          onChange={(e) => setInput({...userInput,[e.target.name]:e.target.value})}
          id="username"
          placeholder='Enter Your Username'
          type="text"
          className="login-input-field"
        />
      </div>
      <div className="input-field-container">
        <label htmlFor="password" className="login-input-label">
          PASSWORD
        </label>
        <input
        name = "password"
        value={userInput.password}
        onChange={(e) => setInput({...userInput,[e.target.name]:e.target.value})}
          placeholder="Enter Your Password"
          id="password"
          type="password"
          className="login-input-field"
        />
      </div>
          <div>
            <button type="submit" className="login-button">
              Register
            </button>
          </div>
          <p className='login-input-label'>Have already an account? <Link to='/login'><u>Login here</u></Link></p>
        </form>
      </div>
    )
  }

export default Register