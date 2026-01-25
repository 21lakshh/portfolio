"use client"

import { useEffect, useRef } from "react";
import { setBackgroundMusicController } from "@/components/ui/resizable-navbar";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setBackgroundMusicController({
      play: () => audioRef.current?.play(),
      pause: () => audioRef.current?.pause(),
    });
  }, []);

  return <audio ref={audioRef} src="/location.mp3" autoPlay loop/>;
};

export default BackgroundMusic;