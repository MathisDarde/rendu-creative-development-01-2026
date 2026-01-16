type Props = {
  shapeCount: number;
  handleSliderChange: (newCount: number) => void;
};

export const RandomSlider = ({ shapeCount, handleSliderChange }: Props) => {
  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md">
      <input
        type="range"
        min={0}
        max={100}
        value={shapeCount}
        onChange={(e) => handleSliderChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-pink-500"
      />
      <div className="flex justify-between w-full text-white/60 text-sm font-Montserrat">
        <span>0</span>
        <span>100</span>
      </div>
    </div>
  );
};
