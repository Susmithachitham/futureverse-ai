import { createContext, useContext, useRef } from "react";

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const introRef = useRef(null);

  const pauseIntro = () => {
    if (introRef.current) {
      introRef.current.pause();
    }
  };

  const playIntro = () => {
    if (introRef.current) {
      introRef.current.play();
    }
  };

  return (
    <MusicContext.Provider
      value={{
        introRef,
        pauseIntro,
        playIntro,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => useContext(MusicContext);