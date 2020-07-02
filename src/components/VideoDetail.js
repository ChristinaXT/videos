import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="ui segment">
        {video.snippet.title}
      </div>
    </div>
  );
};

export default VideoDetail;
