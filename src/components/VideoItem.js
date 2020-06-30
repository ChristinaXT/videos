import React from 'react';

const VideoItem = ({ video }) => {
  return (
    <div className="item">
      <img className="ui image" src={video.snippet.thumbnails.medium.url} />
      {video.snippet.title}

    </div>
  );
};

export default VideoItem;
