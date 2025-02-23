import React, { useState } from "react";
import Reply from "./Reply";

const Comment = ({comment, allComments,addComment,deleteComment }) => {
    const [showReply,setShowReply] = useState(false);
    const handleReply = () => {
        setShowReply(!showReply);
    }
  return (
    <>
    <div className="comment-container">
      <div className="comment-header">
        <p className="comment"> {comment.value} </p>
        <div className="comment-action">
            <button onClick={handleReply}> { showReply?"Cancel" : "Reply"}  </button>
            <button onClick={() => deleteComment(comment.id)} >delete</button>
        </div>
      </div>

    </div>
       { showReply &&  <Reply setShowReply={setShowReply}  addComment={addComment} id={comment.id}/>}

       <div className="nested-comment">
        {comment.children.map((childId)=> {
            return (<><Comment comment = {allComments[childId]}  allComments={allComments} addComment = {addComment}  deleteComment={deleteComment} /></>)
        })}
       </div>
    </>
  );
};

export default Comment;
 