export interface Keyword {
  id: number;
  value: string;
}

export default interface AppContext {
  imageSearchKeywords: Keyword[];
  videoSearchKeywords: Keyword[];
  setImageSearchKeywords: (cb: React.SetStateAction<Keyword[]>) => void;
  setVideoSearchKeywords: (cb: React.SetStateAction<Keyword[]>) => void;
}