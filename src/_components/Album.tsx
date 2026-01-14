import { AlbumContent } from "./AlbumContent";

export const Album = () => {
  return (
    <div className="w-full flex flex-col my-10">
      <h2 className="font-Funnel_Display font-bold text-white text-6xl pb-8 uppercase text-center">
        Nouvel album
      </h2>

      <AlbumContent />

      <button className="border border-pink-500 px-8 py-2 rounded-full text-pink-500 font-Montserrat text-lg mt-4 flex w-fit mx-auto hover:bg-pink-500 hover:text-white transition-all cursor-pointer">
        Personnaliser ma cover
      </button>
    </div>
  );
};
