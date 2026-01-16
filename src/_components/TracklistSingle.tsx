import { useEffect, useRef, useState } from "react";
import type { Title } from "./Tracklist";

interface Props {
  activeTitle: Title | null;
  onNext: () => void;
  onPrev: () => void;
}

export default function TracklistSingle({
  activeTitle,
  onNext,
  onPrev,
}: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;

      setIsPlaying(false);
      setProgress(0);
    }
  }, [activeTitle]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      if (duration > 0) {
        setProgress((current / duration) * 100);
      }
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!activeTitle) return null;

  return (
    <div
      key={activeTitle.index}
      className="flex flex-col lg:flex-row items-center w-full"
    >
      <audio
        ref={audioRef}
        src="./src/assets/music/lil-uzi-vert-do-what-i-want.mp3"
        onTimeUpdate={handleTimeUpdate}
        onEnded={onNext}
      />

      <div className="relative w-full lg:w-62.5 h-64 sm:h-80 lg:h-125 overflow-visible lg:overflow-hidden shrink-0 flex justify-center items-center lg:block">
        <img
          src={activeTitle.imageUrl}
          alt={activeTitle.title}
          className="
            h-full w-auto 
            lg:absolute lg:top-1/2 lg:left-0 lg:h-125 lg:w-125 lg:max-w-none 
            lg:-translate-y-1/2 lg:-translate-x-1/2 
            object-contain 
            animate-[spin_30s_linear_infinite]
          "
        />
      </div>

      <div className="flex flex-col gap-4 text-white text-center lg:text-left mt-8 lg:mt-0 lg:ml-10 grow max-w-xl">
        <div>
          <h3 className="font-Funnel_Display text-4xl font-bold uppercase tracking-tighter">
            {activeTitle.title}
          </h3>
          <p className="font-Montserrat italic text-pink-500 text-xl mt-1">
            {activeTitle.artist}
          </p>
        </div>

        <p className="font-Montserrat text-gray-300 leading-relaxed">
          {activeTitle.desc}
        </p>

        {/* Music player */}
        <div className="mt-5 w-full">
          {/* Barre de progression */}
          <div className="relative h-2 w-full bg-white/20 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-pink-500 shadow-[0_0_10px_#ec4899] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="flex gap-10 mt-6 justify-center items-center">
            {/* Prev */}
            <button
              onClick={onPrev}
              className="text-2xl text-white hover:text-pink-500 w-10 transition-colors opacity-70 hover:opacity-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path
                  d="M105.4 297.4C92.9 309.9 92.9 330.2 105.4 342.7L265.4 502.7C277.9 515.2 298.2 515.2 310.7 502.7C323.2 490.2 323.2 469.9 310.7 457.4L173.3 320L310.6 182.6C323.1 170.1 323.1 149.8 310.6 137.3C298.1 124.8 277.8 124.8 265.3 137.3L105.3 297.3zM457.4 137.4L297.4 297.4C284.9 309.9 284.9 330.2 297.4 342.7L457.4 502.7C469.9 515.2 490.2 515.2 502.7 502.7C515.2 490.2 515.2 469.9 502.7 457.4L365.3 320L502.6 182.6C515.1 170.1 515.1 149.8 502.6 137.3C490.1 124.8 469.8 124.8 457.3 137.3z"
                  fill="#fff"
                />
              </svg>
            </button>

            {/* Play / Pause Toggle */}
            <button
              onClick={togglePlay}
              className="text-4xl hover:scale-110 transition-transform w-12"
            >
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path
                    d="M176 96C149.5 96 128 117.5 128 144L128 496C128 522.5 149.5 544 176 544L240 544C266.5 544 288 522.5 288 496L288 144C288 117.5 266.5 96 240 96L176 96zM400 96C373.5 96 352 117.5 352 144L352 496C352 522.5 373.5 544 400 544L464 544C490.5 544 512 522.5 512 496L512 144C512 117.5 490.5 96 464 96L400 96z"
                    fill="#fff"
                  />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path
                    d="M187.2 100.9C174.8 94.1 159.8 94.4 147.6 101.6C135.4 108.8 128 121.9 128 136L128 504C128 518.1 135.5 531.2 147.6 538.4C159.7 538.4 174.8 545.9 187.2 539.1L523.2 355.1C536 348.1 544 334.6 544 320C544 305.4 536 291.9 523.2 284.9L187.2 100.9z"
                    fill="#fff"
                  />
                </svg>
              )}
            </button>

            {/* Next */}
            <button
              onClick={onNext}
              className="text-2xl text-white hover:text-pink-500 w-10 transition-colors opacity-70 hover:opacity-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path
                  d="M535.1 342.6C547.6 330.1 547.6 309.8 535.1 297.3L375.1 137.3C362.6 124.8 342.3 124.8 329.8 137.3C317.3 149.8 317.3 170.1 329.8 182.6L467.2 320L329.9 457.4C317.4 469.9 317.4 490.2 329.9 502.7C342.4 515.2 362.7 515.2 375.2 502.7L535.2 342.7zM183.1 502.6L343.1 342.6C355.6 330.1 355.6 309.8 343.1 297.3L183.1 137.3C170.6 124.8 150.3 124.8 137.8 137.3C125.3 149.8 125.3 170.1 137.8 182.6L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7z"
                  fill="#fff"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
