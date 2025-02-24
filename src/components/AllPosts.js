import React, { useEffect, useState } from 'react'
import Post from './Post'

function AllPosts() {
    const [posts,setPosts] = useState([])
    const url = process.env.REACT_APP_SERVER_URL || 'http://localhost:4000'
    async function  getData(){
        
        const resp = await fetch(`${url}/posts/all-posts`)
        const  data = await resp.json()
        setPosts (data.data)
        console.log(data.data)
        console.log(data.da)
    }



    useEffect(() =>{
        getData()
    },[])
  return (
    <div>
      
      <div style={{display:"flex" , justifyContent:"space-around" , alignItems:"center" , flexWrap:"wrap" }}>
          {
            posts.map((post) => <Post key={post._id} post={post} />)   
          }
      </div>    
    </div>
  )
}

export default AllPosts
