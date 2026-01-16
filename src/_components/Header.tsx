export const Header = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
      <ul
        className="
        flex justify-around items-center 
        rounded-full 
        border border-white/20 
        bg-black/20 backdrop-blur-md 
        shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] 
        px-2 md:px-6 py-1
        overflow-hidden
      "
      >
        {["Menu", "Album", "Opinions", "Tracklist"].map((item) => (
          <li key={item} className="flex-1">
            <a
              href={`#${item.toLowerCase()}`}
              className="
                block text-center 
                py-3 md:py-4 
                px-1 md:px-4
                text-white font-Montserrat 
                text-[10px] sm:text-xs md:text-sm
                uppercase tracking-widest
                hover:text-pink-500 hover:-translate-y-0.5
                transition-all duration-300 
                cursor-pointer
              "
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
