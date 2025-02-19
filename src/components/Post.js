import React from 'react'

function Post(post) {
  return (
    <div>
      <div>
        <p>{post.postedOn}</p>
        <h4>{post.title}</h4>
        {
            post.body.map((b) =>{
                return <div>
                        <p>{b.value}</p>
                    </div>

            })
        }


        {
            post.tags.map((tag) =>{
                return <div>
                    <button>{tag}</button>
                    </div>
            })
        }
      </div>
    </div>
  )
}

export default Post
