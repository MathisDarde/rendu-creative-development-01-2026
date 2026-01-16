export const Citation = () => {
  return (
    <div className="w-full flex flex-col sm:my-20 px-4 md:px-10 my-0">
      <h2 className="font-Funnel_Display font-bold text-white text-4xl sm:text-6xl pb-12 uppercase text-center">
        Opinions
      </h2>

      <div className="flex flex-row items-stretch gap-8 max-w-7xl mx-auto w-full">
        {/* Colonne des citations */}
        <div className="flex-1 flex flex-col gap-16">
          <div className="flex flex-col gap-3 max-w-lg self-start">
            <p className="text-white font-Montserrat text-justify italic border-l-2 border-pink-500 pl-6">
              ❝ Cet album, c’est moi sans filtre. J’ai voulu mélanger la rage,
              la mélancolie et l’énergie qui me suivent depuis toujours. Chaque
              morceau, c’est un portail vers un autre état, un autre monde. J’ai
              pas fait ça pour rentrer dans une case. ❞
            </p>
            <p className="text-white font-Montserrat text-xs opacity-70 pl-6">
              Lil Uzi Vert, à propos de la sortie de son nouvel album
            </p>
          </div>

          <div className="flex flex-col gap-3 max-w-lg self-end text-right">
            <p className="text-white font-Montserrat text-justify italic border-r-2 border-pink-500 pr-6">
              ❝ Ça sonne comme un voyage entre l’ancien Uzi et quelque chose de
              totalement nouveau. Clairement un album fait pour être écouté
              d’une traite. ❞
            </p>
            <p className="text-white font-Montserrat text-xs opacity-70 pr-6">
              @uzimag (Twitter/X), fan depuis ses débuts
            </p>
          </div>

          <div className="flex flex-col gap-3 max-w-lg self-start">
            <p className="text-white font-Montserrat text-justify italic border-l-2 border-pink-500 pl-6">
              ❝ Un projet qui redéfinit les codes du genre. Uzi explore des
              sonorités sombres et stellaires tout en gardant cette essence trap
              qui a fait sa légende. Une expérience immersive totale. ❞
            </p>
            <p className="text-white font-Montserrat text-xs opacity-70 pl-6">
              Jefferson from RapAttackMedia
            </p>
          </div>
        </div>

        {/* Colonne Image */}
        <div className="hidden lg:block w-1/3 shrink-0">
          <img
            src="./src/assets/img/uzibio.png"
            alt="Lil Uzi Vert image"
            className="w-full h-full object-cover rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};
