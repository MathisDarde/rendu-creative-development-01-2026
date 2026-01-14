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
  return (
    <>
      <h2 className="font-Funnel_Display font-bold text-white text-6xl p-8 uppercase text-center">
        Tracklist
      </h2>

      <div className="flex flex-1 items-center">
        <div className="flex-grow">
          <TracklistSingle activeTitle={activeTitle} />
        </div>

        <div className="w-[300px] flex flex-col gap-4 text-white pr-10 h-fit ml-8">
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
