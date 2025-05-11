import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import { useSearchParams } from 'react-router';
import FakeYoutube from '../api/fakeYoutube';
import Youtube from '../api/youtube';

function Videos() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('search_keyword');
  const {
    isFetching,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['videos', keyword],
    // queryFn: () => new Youtube().search(keyword),
    queryFn: () => new FakeYoutube().search(keyword),
    staleTime: Infinity,
  });

  return (
    <section className='videos'>
      {isFetching && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {videos && (
        <ul>
          {videos.map((video) => {
            return <VideoCard video={video} key={video.id} />;
          })}
        </ul>
      )}
    </section>
  );
}

export default Videos;
