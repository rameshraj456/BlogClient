import React, { useEffect, useState } from 'react';
import './Login.css';

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
  

    // async function getData() {
    //     const url = process.env.REACT_APP_SERVER_URL;
    //     let data = await fetch(`${url}/users/all-users`);
    //     data = await data.json();
    //     setAllusers(data);
    // }

    // useEffect(() => {
    //     getData();
    // }, []);
    const url = process.env.REACT_APP_SERVER_URL || "http://localhost:4000"
    async  function login(e) {
        e.preventDefault();

        const resp = await fetch(`${url}/admin/login`,{
            method:'POST',
            headers:{'Content-Type' :'application/json'},
            body:JSON.stringify({userName,password})
        });

        const data = await  resp.json();
        console.log(data.success)

        if(data.success){
            alert("login successfull")
            console.log("Admin data :",data)
        }else{
            alert("invalid")
        }
    }

    return (
        <div className='loginBody'>
              <div className='loginPage'>
                <form>
                    <h1>Welcome Back Admin</h1>
                    
                    
                    <label>Username :</label>
                    <input type='text' placeholder='username' onChange={(e) => setUserName(e.target.value)} />
                    <br />

                    <label>Password :</label>
                    <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                    <br />


                    <button onClick={login}>
                        Submit
                    </button>

                    <br/>
                    <a href='http://localhost:3000/login'>login as User</a>
                </form>
            </div>
        </div>
      
    );
}

export default Login;
