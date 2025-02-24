import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    

    const url = process.env.REACT_APP_SERVER_URL || 'http://localhost:4000';

    async function loginWithUserName(e) {
        e.preventDefault();
        
        
       
        const resp = await fetch(`${url}/users/login-with-user-name`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userName, password })
        });
        const data = await resp.json();
        
        if (data.success) {
            alert('Login successful');
            console.log('User data:', data.data);
        } else {
            alert(data.message);
        }
    
        
    }

    async function loginWithEmail(e) {
        e.preventDefault();
        
        
        
        const response = await fetch(`${url}/users/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, photo: '' })
        });
        const data = await response.json();
        
        if (data.success) {
            alert(data.message);
            console.log('User data:', data.data);
        } else {
            alert('Login failed..');
        }
      
        
    }

    return (
        <div className='loginBody'>
            <div className='loginPage'>
                <form>
                    <h1>Welcome Back</h1>
                    <h4>Login to your blog account</h4>
                    
                    <label>Username :</label>
                    <input type='text' placeholder='username' value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <br />

                    <label>Password :</label>
                    <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    
                    <button onClick={loginWithUserName} >
                        Login with Username
                    </button>
                    
                    <br />
                    <label>------or------</label>
                    <br />
                    <label>Email :</label>
                    <input type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    
                    <button onClick={loginWithEmail} >
                        Login with Email
                    </button>

                    <br />
                    <a href='/AdminLogin'>Login as Admin</a>
                </form>
            </div>
        </div>
    );
}

export default Login;
