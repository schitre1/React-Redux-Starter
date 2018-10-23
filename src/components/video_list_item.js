import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => { //or have props here in top and comment below.
    //const video = props.video; Use es6 equivalent
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className = "media-object" src={imageUrl}></img>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    )
};

export default VideoListItem;