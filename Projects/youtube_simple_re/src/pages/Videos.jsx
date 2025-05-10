import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import { useSearchParams } from 'react-router';

function Videos() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('search_keyword');
  const {
    isFetching,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['videos', keyword || 'popular'],
    queryFn: async () => {
      const key = keyword ? 'videos.json' : 'popular.json';
      return fetch('/videos/' + key)
        .then((res) => res.json())
        .then((data) => data.items)
        .catch((e) => console.log(`error: ${e}`));
    },
    staleTime: Infinity,
  });

  return (
    <section className='videos'>
      {isFetching && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {videos && (
        <ul>
          {videos.map((video) => {
            const key = video.id?.videoId ? video.id.videoId : video.id;
            return <VideoCard video={video} key={key} />;
          })}
        </ul>
      )}
    </section>
  );
}

export default Videos;
