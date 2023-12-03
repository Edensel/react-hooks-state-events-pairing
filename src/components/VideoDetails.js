import React from 'react';

function VideoDetails({ video, handleUpvote, handleDownvote }) {
  return (
    <div className="video-details">
      <iframe title="Video Player" width="560" height="315" src={"../data.video.videoUrl"} frameBorder="0" allowFullScreen></iframe>
      <h2>{video.title}</h2>
      <p>{video.views} views</p>
      <div>
        <button onClick={handleUpvote}>👍 {video.upvotes}</button>
        <button onClick={handleDownvote}>👎 {video.downvotes}</button>
      </div>
    </div>
  );
}

export default VideoDetails;
