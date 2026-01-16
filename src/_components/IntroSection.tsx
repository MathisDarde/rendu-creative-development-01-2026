export const IntroSection = () => {
  return (
    <section className="relative w-full h-[90vh] md:h-screen overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src="./src/assets/img/banneruzi.jpg"
          alt="Lil Uzi Vert Banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 bg-linear-to-t from-black/80 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center gap-8">
        <img
          src="./src/assets/img/liluzivertlogowhite.webp"
          alt="Logo Lil Uzi vert"
          className="w-72 md:w-125 lg:w-175 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
        />

        <div className="space-y-4">
          <p className="text-pink-500 font-Funnel_Display font-bold text-xl md:text-3xl uppercase tracking-wider">
            New album out now !
          </p>

          <div className="text-white font-Montserrat text-lg md:text-xl max-w-2xl">
            <p className="">
              Get your own cover edition <br className="hidden md:block" />{" "}
              <a
                href="#album"
                className="text-pink-500 font-bold underline-offset-8 cursor-pointer hover:text-white transition-all"
              >
                right here !
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
