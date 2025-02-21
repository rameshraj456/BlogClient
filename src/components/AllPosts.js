import React, { useEffect, useState } from 'react'
import Post from './Post'

function AllPosts() {
    const [posts,setPosts] = useState([])

    async function  getData(){
        const url = process.env.REACT_APP_SERVER_URL
        let data = await fetch(`${url}/posts/all-posts`)
        data = await data.json()
        setPosts = data
        console.log(data)
    }



    useEffect(() =>{
        getData()
    },[])
  return (
    <div>
      
      <div style={{display:"flex" , justifyContent:"space-around" , alignItems:"center" , flexWrap:"wrap" }}>
        {
            posts.map( ( post, idx) => <Post post= {post} idx={idx}/>)  
        }
      </div>    
    </div>
  )
}

export default AllPosts
