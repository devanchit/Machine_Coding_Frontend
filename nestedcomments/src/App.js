// https://www.youtube.com/watch?v=nZhrJsTdeeI&ab_channel=MohdAman
import './App.css';
import Comment from './components/Comment';
import commentData from "./commentsData.json"
import { useState } from 'react';

function App() {
  const [comments,setComments] = useState(commentData.comments)

  const addComment = (value,parentId) => {
    const newId = Date.now();

    const newComment= {id: newId, parentId: parentId, value: value, children: []};
    setComments( (prevComments) => {
      const updatedComment = {...prevComments, [newId]: newComment};
      updatedComment[parentId].children.push(newId);
      return updatedComment; 
    })
  }

  const deleteComment = (id) => {
    
    const parentId = comments[id].parentId;
    setComments((prevComments) => {
      const updatedComments = {...prevComments};
      updatedComments[parentId].children = updatedComments[parentId].children.filter((childId) =>{
        return childId !== id;
      });
      const queue = [id];
      while(queue.length >0){
        const nodeToDelete = queue.shift();
        queue.push(...updatedComments[nodeToDelete].children)
      //   const childrenToDelete = updatedComments[nodeToDelete]?.children || [];
      // queue.push(...childrenToDelete);
        delete updatedComments[nodeToDelete];
      }
      return updatedComments;
    });

  }

  console.log(comments);

  return (
    <div className="App">
     <Comment  comment={comments[0]}  allComments = {comments} addComment={addComment} deleteComment={deleteComment} />
    </div>
  );
}

export default App;
