import React, { useState } from 'react'

const Reply = ({setShowReply,addComment,id }) => {
    const [reply,setReply] = useState("");

    const handlePostReply = () => {
        addComment(reply,id);
        console.log(reply);
        setReply("");
        setShowReply(false);
    }

  return (
    <div className='reply-box-container'>
        <textarea className='post-reply' placeholder='Enter your Comment'
        value = {reply}
        onChange={(ev)=> {setReply(ev.target.value)}}
        >

        </textarea>
        <button className='post-reply-btn' onClick={handlePostReply}>Post</button>
    </div>
  )
}

export default Reply