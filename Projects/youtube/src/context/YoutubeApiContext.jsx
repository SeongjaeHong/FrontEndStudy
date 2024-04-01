import { createContext, useContext } from "react";
import Youtube from "../api/youtube";
import fakeYoutube from "../api/fakeYoutube";

export const YoutubeApiContext = createContext();

const youtube = new fakeYoutube();
// const youtube = new Youtube();
export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeAPI() {
  return useContext(YoutubeApiContext);
}
