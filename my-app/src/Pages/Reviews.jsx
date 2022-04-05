import React, { useEffect, useState } from 'react';
import PostService from '../API/PostService';
import CommentForm from '../Components/CommentForm';
import ReviewsList from '../Components/ReviewsList';

function Reviews() {
   const [comments, setComments] = useState([]);

   useEffect(() => {
      loadComments();
   }, [])

   const loadComments = async () => {
      const data = await PostService.getComments();
      setComments(data);
   }

   const createComment = (newComment) => {
      setComments([...comments, newComment]);
   }

   return (
      <>
         <CommentForm create={createComment} />
         <ReviewsList comments={comments} />
      </>
   )
}

export default Reviews;