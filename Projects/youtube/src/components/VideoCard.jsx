import React from "react";
import { format } from "timeago.js";

export default function VideoCard({ videoKey, video }) {
  const publishTime = video?.publishTime
    ? video.publishTime
    : video.publishedAt;

  return (
    <li key={videoKey}>
      <img
        className="w-full"
        src={video.thumbnails.medium.url}
        alt="thumbnail"
      />
      <div>
        <p className="line-clamp-2 font-semibold my-2">{video.title}</p>
        <p className="text-sm opacity-80">{video.channelTitle}</p>
        <p className="text-sm opacity-80">{format(publishTime)}</p>
      </div>
    </li>
  );
}
