export const Header = () => {
  return (
    <div className="fixed w-full left-1/2 -translate-x-1/2 top-10 z-50">
      <ul className="rounded-full px-4 py-0 bg-black text-white border border-white flex justify-around items-center w-[calc(100%-200px)] mx-auto overflow-hidden">
        {["Menu", "Album", "Bio", "Tracklist"].map((item) => (
          <li key={item} className="flex-1 flex justify-center">
            <a
              href={`#${item.toLowerCase()}`}
              className="w-full text-center py-4 px-2 inline-flex items-center justify-center cursor-pointer hover:text-pink-500 hover:-translate-y-1 hover:scale-105 transition-all duration-300 font-Montserrat text-sm"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
