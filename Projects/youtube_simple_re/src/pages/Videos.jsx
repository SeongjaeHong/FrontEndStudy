import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import { useSearchParams } from 'react-router';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import './css/videos.css';

function Videos() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('search_keyword');
  const youtube = useYoutubeApi();
  const {
    isFetching,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: () => youtube.searchVideo(keyword),
    staleTime: Infinity,
  });

  return (
    <section className='videos'>
      {isFetching && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {videos && (
        <ul>
          {videos.map((video) => {
            if (!video.id) {
              // Some ids are undefined.
              return null;
            }
            return (
              <VideoCard video={video} relatedVideos={videos} key={video.id} />
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default Videos;
