import type { Title } from "./Tracklist";

interface Props {
  activeTitle: Title | null;
}

export default function TracklistSingle({ activeTitle }: Props) {
  if (!activeTitle) return null;

  return (
    <div key={activeTitle.index} className="flex items-center w-full">
      <div className="relative w-[250px] h-[500px] overflow-hidden flex-shrink-0">
        <img
          src={activeTitle.imageUrl}
          alt={activeTitle.title}
          className="absolute top-1/2 left-0 h-[500px] w-[500px] max-w-none 
                     -translate-y-1/2 -translate-x-1/2 object-contain 
                     animate-[spin_30s_linear_infinite]"
        />
      </div>

      <div className="flex flex-col gap-4 text-white ml-10 flex-grow max-w-xl">
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

        <div className="mt-5 w-full">
          <div className="relative">
            <div className="h-2 w-full bg-white/20 rounded-full"></div>
            <div className="absolute top-0 left-0 h-2 w-48 bg-pink-500 rounded-full shadow-[0_0_10px_#ec4899]"></div>
          </div>

          <div className="flex gap-6 mt-4 justify-center items-center">
            <button className="text-4xl hover:text-pink-500 transition-colors">
              &#9208;
            </button>
            <button className="text-4xl hover:scale-110 transition-transform">
              ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
