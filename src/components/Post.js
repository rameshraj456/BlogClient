import React from 'react'
import Image from '../UI/Image'

function Post({post}) {

  return (
    <div 
    style={{backgroundColor:"#497D74",borderRadius:"10px",padding:"10px",margin:"10px",textAlign:"left",width:"300px"}}
    >
        <p>{post.postedOn}</p>
        <h4>{post.title}</h4>
        {
            post.body.map( (item,idx) => {
              if(item.type == "text"){
                return <p>{item.value}</p>
              }else if(item.type == "image"){
                return <Image url={item.value} />
              }
            })
        }


        {
            post.tags.map((tag) =>{
                return <Tag  name={tag}/>
            })
        }
    </div>
  )
}

function Tag( { name } )
{
  return <label 
  style={{backgroundColor:"#71BBB2",borderRadius:"10px",padding:"3px",margin:"5px",fontSize:"12px"}}
  >{name}</label>
}

export default Post
