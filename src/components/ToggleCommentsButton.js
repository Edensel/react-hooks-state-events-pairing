import React from 'react';

function ToggleCommentsButton({ showComments, toggleComments }) {
  return (
    <div className="toggle-comments-button">
      <button onClick={toggleComments}>{showComments ? 'Hide Comments' : 'Show Comments'}</button>
    </div>
  );
}

export default ToggleCommentsButton;
