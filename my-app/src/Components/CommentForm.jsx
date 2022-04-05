import React, { useState } from 'react';

function CommentForm({ create }) {
   const [comment, setComment] = useState({ name: '', body: '' });

   const addComment = () => {
      create(comment);
      setComment({ name: '', body: '' })
   }

   return (
      <div className='comment__add'>
         <input
            type="text"
            placeholder='Назва'
            value={comment.name}
            onChange={(e) => setComment({ ...comment, name: e.target.value })}
         />
         <br />
         <input
            type="text"
            placeholder='Опис'
            value={comment.body}
            onChange={(e) => setComment({ ...comment, body: e.target.value })}
         />
         <br />
         <button onClick={addComment}>Создати коментар</button>
      </div>
   )
}

export default CommentForm;