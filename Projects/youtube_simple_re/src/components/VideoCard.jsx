import { Link } from 'react-router';

function VideoCard({ video }) {
  const videoId = video.id?.videoId ? video.id.videoId : video.id;
  return (
    <Link
      to={{ pathname: '/watch', search: '?v=' + videoId }}
      className='video-card'
    >
      <div className='video-thumbnail'>
        <img src={video.snippet.thumbnails.high.url} />
      </div>
      <div className='video-info'>
        <p id='video-title'>{video.snippet.title}</p>
        <p id='video-channel'>{video.snippet.channelTitle}</p>
        <p id='video-created'>{ConvertTime(video.snippet.publishedAt)}</p>
      </div>
    </Link>
  );
}

export default VideoCard;

function ConvertTime(createdTime) {
  const _createdTime = new Date(createdTime);
  const timeDiff = Math.trunc((Date.now() - _createdTime.getTime()) / 1000);
  const min = Math.trunc(timeDiff / 60);
  const hour = Math.trunc(min / 60);
  const day = Math.trunc(hour / 24);
  const month = Math.trunc(day / 31);
  const year = Math.trunc(month / 12);

  if (min < 1) {
    return '방금 전';
  } else if (hour < 1) {
    return min + '분 전';
  } else if (day < 1) {
    return hour + '시간 전';
  } else if (month < 1) {
    return day + '일 전';
  } else if (year < 1) {
    return month + '달 전';
  } else {
    return year + '년 전';
  }
}
