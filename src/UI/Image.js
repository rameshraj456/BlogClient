import React from 'react'

function Image( { url } ) {
  return (
    <div>
        <img
        style={{backgroundColor:"#71BBB2",borderRadius:"10px",padding:"5px",margin:"5px"}}
        src={url} 
        />
    </div>
  )
}

export default Image