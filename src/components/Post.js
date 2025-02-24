import React, { useState } from 'react';

function Post({ post }) {
  

 
  return (
    <div className="post-container">
      <div>
        <h2>{post.title}</h2>
        <p>Posted on: {post.postedOn}</p>
        <div>
          {post.body.map((content, index) =>
            content.type === "text" ? (
              <p key={index}>{content.value}</p>
            ) : (
              <img key={index} src={content.value} alt="blog" className="w-full h-40 object-cover" />
            )
          )}
        </div>
        <p>Tags: {post.tags.join(", ")}</p>
        
        {/* Like and Comment Buttons */}
        <div className="buttons">
          <button className="like-btn" >Like </button>
          <input
            type="text"
            placeholder="Add a comment..."
            className="comment-input"
          />
          <button className="comment-btn">Comment</button>
        </div>
        
        
      </div>
      
      <style jsx>{`
        .post-container {
          border: 1px solid #ddd;
          padding: 16px;
          border-radius: 8px;
          margin:20px;
          margin-bottom: 20px;
          background: #fff;
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
        }
        .buttons {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 10px;
        }
        .like-btn, .comment-btn {
          padding: 8px 12px;
          border: none;
          background: #007bff;
          color: white;
          border-radius: 4px;
          cursor: pointer;
        }
        .like-btn:hover, .comment-btn:hover {
          background: #0056b3;
        }
        .comment-input {
          flex: 1;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .comments-section {
          margin-top: 10px;
        }
        .comment {
          padding: 5px;
          border-bottom: 1px solid #eee;
        }
      `}</style>
    </div>
  );
}

export default Post;
