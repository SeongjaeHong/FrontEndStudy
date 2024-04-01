import React from "react";

export default function VideoCard({ videoKey, video }) {
  const publishTime = video?.publishTime
    ? video.publishTime
    : video.publishedAt;
  return (
    <li key={videoKey}>
      <div>
        <img
          src={video.thumbnails.default.url}
          alt="thumbnail"
        />
        <h4>{video.title}</h4>
        <p>{video.channelTitle}</p>
        <p>{publishTime}</p>
      </div>
    </li>
  );
}
