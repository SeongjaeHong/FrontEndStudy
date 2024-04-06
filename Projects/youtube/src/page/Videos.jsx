import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { useYoutubeAPI } from "../context/YoutubeApiContext.jsx";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeAPI();
  const {
    data: videos,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () => {
      return youtube.search(keyword);
    },
    staleTime: Infinity,
  });

  return (
    <>
      <section>Videos {keyword ? `🔍${keyword}` : "🔥"}</section>
      <section>
        {isLoading && <p>Loading</p>}
        {error && <p>Error occurred</p>}
        {videos && (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 gap-y-4">
            {videos.map((video) => (
              <VideoCard
                videoKey={video.id}
                video={video.snippet}
              />
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
