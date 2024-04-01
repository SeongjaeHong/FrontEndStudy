import React from "react";
import SearchHeader from "./components/SearchHeader";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";

const queryClient = new QueryClient();
export default function App() {
  return (
    <>
      <SearchHeader />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}
