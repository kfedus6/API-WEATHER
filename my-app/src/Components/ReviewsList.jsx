import React from 'react';
import ReviewsItem from './ReviewsItem';

function ReviewsList({ comments }) {
   return (
      <div className='comments__block'>
         <h2>Comments</h2>
         {comments.map((item, index) => {
            return <ReviewsItem comment={item} idx={index} key={index} />
         })}
      </div>
   )
}

export default ReviewsList;