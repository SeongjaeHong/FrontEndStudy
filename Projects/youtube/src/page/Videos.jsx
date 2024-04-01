import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { useYoutubeAPI } from "../context/YoutubeApiContext.jsx";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeAPI();
  const { data, error, isLoading } = useQuery({
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
        {error & <p>Error occurred</p>}
        {data && (
          <ul>
            {data.map((result) => (
              <VideoCard
                key={result.id}
                video={result}
              />
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
