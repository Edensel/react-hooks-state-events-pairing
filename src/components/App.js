import React from 'react';
import VideoDetails from './VideoDetails';
import Comments from './Comments';
import ToggleCommentsButton from './ToggleCommentsButton';
import videoData from '../data/video';

function App() {
  const [showComments, setShowComments] = React.useState(true);

  const toggleComments = () => {
    setShowComments((prevState) => !prevState);
  };

  return (
    <div className="App">
      <VideoDetails video={videoData} />
      {showComments && <Comments comments={videoData.comments} />}
      <ToggleCommentsButton showComments={showComments} onClick={toggleComments} />
    </div>
  );
}

export default App;
