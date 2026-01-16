import { useState } from "react";
import TracklistSingle from "./TracklistSingle";
import titles from "../assets/data/titles.json";

export type Title = {
  index: string;
  title: string;
  artist: string;
  imageUrl: string;
  desc: string;
};

export const Tracklist = () => {
  const [activeTitle, setActiveTitle] = useState<Title>(
    titles.find((t: Title) => t.index === "1")!
  );

  const onNext = () => {
    const currentIndex = parseInt(activeTitle.index);
    const nextTitle = titles.find(
      (t: Title) => parseInt(t.index) === currentIndex + 1
    );
    if (nextTitle) {
      setActiveTitle(nextTitle);
    }
  };

  const onPrev = () => {
    const currentIndex = parseInt(activeTitle.index);
    const prevTitle = titles.find(
      (t: Title) => parseInt(t.index) === currentIndex - 1
    );
    if (prevTitle) {
      setActiveTitle(prevTitle);
    }
  };

  return (
    <>
      <h2 className="font-Funnel_Display font-bold text-white text-4xl sm:text-6xl p-8 uppercase text-center">
        Tracklist
      </h2>

      <div className="flex flex-1 flex-col lg:flex-row items-center">
        <div className="grow p-8 lg:p-0">
          <TracklistSingle
            activeTitle={activeTitle}
            onNext={onNext}
            onPrev={onPrev}
          />
        </div>

        <div className="w-75 flex flex-col gap-4 text-white pr-10 h-fit ml-8">
          {titles.map((title: Title) => {
            const isActive = activeTitle?.index === title.index;

            return (
              <div
                key={title.index}
                className={`cursor-pointer transition-all duration-300 ${
                  isActive ? "translate-x-2" : "opacity-50 hover:opacity-100"
                }`}
                onClick={() => setActiveTitle(title)}
              >
                {isActive ? (
                  <p className="font-Montserrat uppercase font-bold text-lg text-pink-500">
                    <span className="mr-2">▶</span> {title.title}
                  </p>
                ) : (
                  <p className="font-Montserrat text-sm">
                    <span className="text-xs text-gray-400 mr-2">
                      {title.index.padStart(2, "0")}
                    </span>
                    {title.title}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
