import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const loginHandler = (e) => {
    e.preventDefault()
  }
  return (
    <div className="login" >
      <div className="login-card">
        <div className="login-text">
          <h1>Join Our Community Today.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugiat modi fugit tenetur perspiciatis possimus eaque vitae excepturi eos mollitia</p>
          <div className='login-signup'>
            <span>Don't you have an account?</span>
            <Link to='/register'>
              <button type='button'>Register</button>

            </Link>


          </div>
        </div>
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={loginHandler}>
            <input type="text" name="username" placeholder='User Name' />
            <input type="email" name="email" placeholder='E-mail' />
            <input type="password" name="password" placeholder='Password' />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login