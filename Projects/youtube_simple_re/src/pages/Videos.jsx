import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import { useSearchParams } from 'react-router';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { v4 as uuidv4 } from 'uuid';
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
    queryFn: () => youtube.search(keyword),
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
              video.id = uuidv4();
            }
            return <VideoCard video={video} key={video.id} />;
          })}
        </ul>
      )}
    </section>
  );
}

export default Videos;
