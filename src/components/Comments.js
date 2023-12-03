import React, { useState } from 'react';

function Comments({ comments }) {
  const [sortedComments, setSortedComments] = useState([...comments]);

  const handleUpvote = (commentId) => {
    const updatedComments = sortedComments.map((comment) =>
      comment.id === commentId ? { ...comment, upvotes: comment.upvotes + 1 } : comment
    );
    setSortedComments(updatedComments);
  };

  const handleDownvote = (commentId) => {
    const updatedComments = sortedComments.map((comment) =>
      comment.id === commentId ? { ...comment, downvotes: comment.downvotes + 1 } : comment
    );
    setSortedComments(updatedComments);
  };

  const handleRemoveComment = (commentId) => {
    const updatedComments = sortedComments.filter((comment) => comment.id !== commentId);
    setSortedComments(updatedComments);
  };

  const handleSortByUpvotes = () => {
    const sortedByUpvotes = [...sortedComments].sort((a, b) => b.upvotes - a.upvotes);
    setSortedComments(sortedByUpvotes);
  };

  const handleSortByDownvotes = () => {
    const sortedByDownvotes = [...sortedComments].sort((a, b) => b.downvotes - a.downvotes);
    setSortedComments(sortedByDownvotes);
  };

  return (
    <div className="comments">
      <h3>Comments</h3>
      <div>
        <button onClick={handleSortByUpvotes}>Sort by Upvotes</button>
        <button onClick={handleSortByDownvotes}>Sort by Downvotes</button>
      </div>
      {sortedComments.map((comment) => (
        <div key={comment.id} className="comment">
          <p>{comment.text}</p>
          <p>By: {comment.username}</p>
          <div>
            <button onClick={() => handleUpvote(comment.id)}>👍 {comment.upvotes}</button>
            <button onClick={() => handleDownvote(comment.id)}>👎 {comment.downvotes}</button>
            <button onClick={() => handleRemoveComment(comment.id)}>Remove Comment</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comments;
