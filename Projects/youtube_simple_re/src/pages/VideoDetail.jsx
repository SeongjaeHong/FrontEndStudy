import React from 'react';
import { useSearchParams } from 'react-router';

function VideoDetail() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');

  return <div>Video Detail: {videoId}</div>;
}

export default VideoDetail;
