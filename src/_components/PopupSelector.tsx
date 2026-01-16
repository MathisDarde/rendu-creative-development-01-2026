import { useEffect, useRef, useState } from "react";
import { Step1 } from "./custom-steps/Step1";
import { Step2 } from "./custom-steps/Step2";
import { toPng } from "html-to-image";
import { Step3 } from "./custom-steps/Step3";

type Props = {
  onClose: any;
  bg: number;
  character: number;
  colorPattern: number;
  setBg: React.Dispatch<number>;
  setCharacter: React.Dispatch<number>;
  setColorPattern: React.Dispatch<number>;
  shapeCount: number;
  handleSliderChange: (newCount: number) => void;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
};

export const PopupSelector = ({
  onClose,
  bg,
  character,
  colorPattern,
  setBg,
  setCharacter,
  setColorPattern,
  shapeCount,
  handleSliderChange,
  canvasRef,
}: Props) => {
  const [step, setStep] = useState(1);
  const coverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const downloadCover = async () => {
    if (coverRef.current === null) return;

    try {
      const dataUrl = await toPng(coverRef.current, { cacheBust: true });
      const link = document.createElement("a");
      link.download = "ma-cover-lil-uzi-vert.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Erreur lors de la génération de l'image", err);
    }
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-black border-2 md:border-3 border-pink-500 rounded-lg flex flex-col overflow-hidden max-h-[98vh] md:max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-pink-500 text-3xl hover:scale-110 transition-transform z-20"
        >
          ✗
        </button>

        {/* Header & Stepper - Fixe en haut */}
        <div className="p-4 md:p-6 border-b border-white/5">
          <h2 className="font-Funnel_Display text-white text-center uppercase font-bold text-lg md:text-2xl mb-4 px-8">
            Customize your cover
          </h2>

          <div className="flex items-center justify-between max-w-md mx-auto w-full">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="flex items-center flex-1 last:flex-none"
              >
                <div
                  onClick={() => setStep(num)}
                  className={`flex items-center justify-center w-7 h-7 md:w-10 md:h-10 rounded-full font-Funnel_Display font-bold cursor-pointer transition-colors text-xs md:text-base ${
                    step >= num
                      ? "bg-pink-500 text-white"
                      : "bg-gray-700 text-gray-400"
                  }`}
                >
                  {num}
                </div>
                {num < 4 && (
                  <div
                    className={`flex-1 h-0.5 mx-1 md:mx-2 ${
                      step > num ? "bg-pink-500" : "bg-gray-700"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Zone centrale : Cover + Options */}
        <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
          {/* Preview de la Cover - Centrée, réduit sur mobile */}
          <div className="bg-zinc-900/30 p-4 flex items-center justify-center lg:border-r lg:border-white/5">
            <div
              className="relative w-40 sm:w-56 md:w-72 lg:w-80 aspect-square overflow-hidden shrink-0 border border-white/10 shadow-2xl"
              ref={coverRef}
            >
              <img
                src={`./src/assets/img/covers/cover${bg}.png`}
                alt="Background"
                className="w-full h-full object-cover"
              />
              <canvas
                ref={canvasRef}
                width={500}
                height={500}
                className="absolute -bottom-10 left-1/2 -translate-x-1/2"
                style={{
                  width: "90%",
                  height: "90%",
                  borderRadius: "50%",
                }}
              />
              <img
                className="absolute bottom-0 left-1/2 -translate-x-1/2 aspect-square w-9/12 object-contain"
                src={`./src/assets/img/uzis/uzi${character}.png`}
                alt="Character"
              />
              <img
                className="absolute bottom-2 left-2 w-8 md:w-12"
                src="./src/assets/img/parentaladvisory.png"
                alt="parental advisory"
              />
            </div>
          </div>

          {/* Options de personnalisation - Scrollable sur mobile */}
          <div className="flex-1 flex flex-col min-h-0">
            <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
              {step === 1 && <Step1 setBg={setBg} currentBg={bg} />}
              {step === 2 && (
                <Step2
                  setCharacter={setCharacter}
                  currentCharacter={character}
                />
              )}
              {step === 3 && (
                <Step3
                  shapeCount={shapeCount}
                  handleSliderChange={handleSliderChange}
                  currentColorPattern={colorPattern}
                  setColorPattern={setColorPattern}
                />
              )}
              {step === 4 && (
                <div className="flex flex-col items-center justify-center animate-fadeIn w-full space-y-6">
                  <p className="text-white text-center font-Funnel_Display text-xl font-bold uppercase tracking-widest">
                    Your work is done !
                  </p>
                  <button
                    onClick={downloadCover}
                    className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-bold transition-all flex items-center gap-3 font-Montserrat cursor-pointer active:scale-95"
                  >
                    Download my cover
                  </button>
                  {/* Share buttons stack on mobile */}
                  <div className="w-full border-t border-white/10 pt-6">
                    <p className="text-white text-center font-Funnel_Display text-lg font-bold uppercase mb-4">
                      Share
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                      {/* Twitter */}
                      <button
                        onClick={() => {
                          /*...*/
                        }}
                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                      >
                        <svg
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </button>
                      {/* Link */}
                      <button
                        onClick={() => {
                          /*...*/
                        }}
                        className="px-4 py-2 border border-white/20 rounded-full text-white text-xs font-Montserrat hover:bg-white hover:text-black transition-all"
                      >
                        🔗 Copy Link
                      </button>
                      {/* WA */}
                      <button
                        onClick={() => {
                          /*...*/
                        }}
                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-green-500 transition-all"
                      >
                        <span className="text-lg">💬</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons - Fixes en bas de la zone d'options */}
            <div className="p-4 md:p-6 border-t border-white/5 flex justify-between bg-black">
              <button
                className={`px-6 py-2 text-white font-Montserrat rounded-sm transition-all cursor-pointer hover:bg-white/10 ${
                  step === 1 ? "opacity-0 pointer-events-none" : ""
                }`}
                onClick={prevStep}
              >
                Previous
              </button>
              <button
                className="bg-pink-500 hover:bg-pink-600 px-8 py-2 text-white font-Montserrat rounded-sm font-bold transition-all cursor-pointer active:scale-95"
                onClick={step === 4 ? onClose : nextStep}
              >
                {step === 4 ? "Done" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
