import React from 'react'
import Image from '../UI/Image'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate();

  return (
    <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"#497D74"}} >
        <div style={{ display:"flex",justifyContent:"space-around",margin:"5px" }}>
            <img width="40px" src={`${process.env.REACT_APP_CLIENT_URL}/logo192.png`}/>
            <b  style={{position:"relative",top:"10px",left:"10px"}}>Ramesh BLOG</b>
        </div>
        <div style={{display:"flex",justifyContent:"space-around"}}>
            {
                [
                    {
                        title:"ALL POSTS",
                        link:""
                    },
                    {
                        title:"Login",
                        link:"./login"
                    },
                    {
                        title:"ADMIN",
                        link:"/admin"
                    },
                    {
                        title:"Profile",
                        link:"./profile"
                    }
                ]
                .map( (item,idx) => <b 
                onClick={()=> navigate(`${item.link}`)}
                style={{cursor:"pointer",margin:"5px",backgroundColor:"#71BBB2",color:"black",borderRadius:"5px",padding:"4px"}}
                >{item.title}</b> )
            }
        </div>
    </div>
  )
}

export default Header