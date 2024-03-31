import React from "react";

export default function VideoCard({ key, video }) {
  return (
    <div>
      <li key={key}>{video.snippet.title}</li>
    </div>
  );
}
