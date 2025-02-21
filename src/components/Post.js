import React from 'react'

function Post({post}) {
  return (
    <div>
      <div>
        <h2 >{post.title}</h2>
        <p >Posted on: {post.postedOn}</p>
        <div className="mt-2">
          {post.body.map((content, index) =>
            content.type === "text" ? (
              <p key={index}>{content.value}</p>
            ) : (
              <img key={index} src={content.value} alt="blog" className="w-full h-40 object-cover" />
            )
          )}
        </div>
        <p >Tags: {post.tags.join(", ")}</p>
      </div>
    </div>
  )
}

export default Post
