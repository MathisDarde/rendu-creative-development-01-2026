import { RandomSlider } from "../planet-generation/RandomSlider";
import colorsList from "../../assets/data/colors.json";

type Props = {
  shapeCount: number;
  handleSliderChange: (newCount: number) => void;
  currentColorPattern: number;
  setColorPattern: (id: number) => void;
};

export const Step3 = ({
  shapeCount,
  handleSliderChange,
  currentColorPattern,
  setColorPattern,
}: Props) => {
  return (
    <div className="w-full space-y-6">
      <div>
        <h3 className="text-pink-500 font-bold mb-4 uppercase font-Montserrat text-xs md:text-sm tracking-widest text-center lg:text-left">
          Choose your planet pattern
        </h3>
        <RandomSlider
          shapeCount={shapeCount}
          handleSliderChange={handleSliderChange}
        />
      </div>

      <div className="w-full">
        <h3 className="text-pink-500 font-bold mb-4 uppercase font-Montserrat text-xs md:text-sm tracking-widest text-center lg:text-left">
          Color Palette
        </h3>
        {/* Grid flexible : 4 colonnes sur mobile, 5 sur tablette/desktop */}
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-5 gap-3">
          {colorsList.map((palette) => {
            const id = Number(palette.id);

            return (
              <button
                key={id}
                onClick={() => setColorPattern(id)}
                className={`group relative aspect-square rounded-full border-2 transition-all p-1 outline-none ${
                  currentColorPattern === id
                    ? "border-pink-500 scale-110 shadow-[0_0_15px_rgba(236,72,153,0.3)] z-10"
                    : "border-gray-800 hover:border-pink-500/50"
                }`}
              >
                <div className="w-full h-full rounded-full overflow-hidden grid grid-cols-2 rotate-45 group-hover:rotate-90 transition-transform duration-500">
                  <div
                    className="w-full h-full"
                    style={{ backgroundColor: palette.backgroundColor }}
                  />
                  <div
                    className="w-full h-full"
                    style={{ backgroundColor: palette.color1 }}
                  />
                  <div
                    className="w-full h-full"
                    style={{ backgroundColor: palette.color2 }}
                  />
                  <div
                    className="w-full h-full"
                    style={{ backgroundColor: palette.color3 }}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
