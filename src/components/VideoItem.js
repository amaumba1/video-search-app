import React from 'react'
import './VideoItem.css'


const VideoItem = ({ video, onVideoSelect }) => {
  return (
    // Add Event handlers to when user click on the VideoItem, you gonna call a onVideoSelect with the attached video property, we don't want to just invoke onVideoSelect , we want to call it with the video that was passed on VideoItem component. So we will put a arrow function bcoz we want to cal onVideoSelect with some arguments 
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} /> 
        <div className="content">
          <div className="header">
            {video.snippet.title}
          </div>
        </div>
    </div>
  )
}

export default VideoItem