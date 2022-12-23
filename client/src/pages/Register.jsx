import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const registerHandler = (e) => {
    e.preventDefault()
  }
  return (
    <div className="login" id='register'>
      <div className="login-card">

        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={registerHandler}>
            <input type="text" name="username" placeholder='User Name' />
            <input type="email" name="email" placeholder='E-mail' />
            <input type="password" name="password" placeholder='Password' />
            <button>Register</button>
          </form>
        </div>
        <div className="login-text">
          <h1 className='font-bold'>Social App.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugiat modi fugit tenetur perspiciatis possimus eaque vitae excepturi eos mollitia</p>
          <div className='login-signup'>
            <span>Do you have an account?</span>
            <Link to='/login'>
              <button type='button'>Login</button>

            </Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Register