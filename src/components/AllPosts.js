import React, { useEffect, useState } from 'react'
import Post from './Post'

function AllPosts() {
    const [posts,setPosts] = useState([])

    async function  getData(){
        const url = process.env.REACT_APP_SERVER_URL;
        // console.log(url);
        let data = await fetch(`${url}/posts/all-posts`)
        // console.log(data);
        data = await data.json()
        console.log(data)
        setPosts(data.data)
    }



    useEffect(() =>{
        getData()
    },[])
  return (
    <div>
      
      <div style={{display:"flex" , justifyContent:"space-around" , alignItems:"center" , flexWrap:"wrap" }}>
        {
            posts.length == 0 ?
            <h1>No posts yet !</h1>
            :
            posts?.map( ( post, idx) => <Post post= {post} idx={idx}/>)  
        }
      </div>    
    </div>
  )
}

export default AllPosts
