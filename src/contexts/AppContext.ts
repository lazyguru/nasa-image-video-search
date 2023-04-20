import { createContext } from "react";
import AppContext from "../types/AppContext";

export default createContext<AppContext>({
  imageSearchKeywords: [],
  videoSearchKeywords: [],
  setImageSearchKeywords(imageSearchKeywords) {
    return imageSearchKeywords
  },
  setVideoSearchKeywords(videoSearchKeywords) {
    return videoSearchKeywords
  }
});
