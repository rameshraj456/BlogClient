import React, { useEffect, useState } from 'react';
import './Login.css';

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [allusers, setAllusers] = useState([]);

    async function getData() {
        const url = process.env.REACT_APP_SERVER_URL;
        let data = await fetch(`${url}/users/all-users`);
        data = await data.json();
        setAllusers(data);
    }

    useEffect(() => {
        getData();
    }, []);

    function login(e) {
        e.preventDefault();
        const user = allusers.find((user) => user.userName === userName);

        if (!user) {  // Use "!user" instead of "user.length == 0" because find() returns undefined if not found
            alert('User does not exist');
        } else {
            if (user.password === password) {
                alert('Login successful');
            } else {
                alert('Invalid password');
            }
        }
    }

    return (
        <div className='loginPage'>
            <form>
                <h1>Welcome Back</h1>
                <h4>Login To your blog account</h4>
                
                <label>Username :</label>
                <input type='text' placeholder='username' onChange={(e) => setUserName(e.target.value)} />
                <br />

                <label>Password :</label>
                <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                <br />

                <label>------or------</label>
                <br />
          

                <button onClick={login}>
                    Submit
                </button>

                <a href=''>login as user</a>
            </form>
        </div>
    );
}

export default Login;
