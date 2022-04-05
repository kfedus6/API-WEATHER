import React from 'react';

function ReviewsItem(props) {
   return (
      <div className='comments'>
         <div className='comments__content'>
            <strong>{props.idx + 1}. {props.comment.name}</strong>
         </div>
         <div>
            {props.comment.body}
         </div>
         <div className='commemt__remove'>
            <button>Видалити</button>
         </div>
      </div>
   )
}

export default ReviewsItem;