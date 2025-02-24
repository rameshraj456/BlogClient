import React, { useState } from 'react'

function Login() {
    const [userName,setUserName] = useState()
    const [password,setPassword] = useState()


  return (
    <div>
      <form>
        <h1>Welcome Back</h1>
        <h4>Login To your blog account</h4>
        <label>userName :</label>
        <input type='text' placeholder='username'  onChange={(e) => setUserName(e.target.value)}/>
        <br />

        <label>Password :</label>
        <input type='password'  placeholder='password' onChange={(e) => setPassword(e.target.value)}/>

        <button onClick>
            submit
        </button> 

      </form>
    </div>
  )
}

export default Login
