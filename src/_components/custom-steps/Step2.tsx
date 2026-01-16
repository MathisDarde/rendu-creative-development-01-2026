export const Step2 = ({
  setCharacter,
  currentCharacter,
}: {
  setCharacter: React.Dispatch<number>;
  currentCharacter: number;
}) => {
  return (
    <div className="w-full">
      <h3 className="text-pink-500 font-bold mb-4 uppercase font-Montserrat text-sm">
        Choose character
      </h3>
      <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
        {[1, 2, 3, 4, 5].map((id) => (
          <div
            key={id}
            onClick={() => setCharacter(id)}
            className={`cursor-pointer aspect-square rounded-full border-2 transition-all p-1 ${
              currentCharacter === id
                ? "border-pink-500 scale-110"
                : "border-gray-800 hover:border-pink-300"
            }`}
          >
            <img
              className="w-full h-full rounded-full object-cover"
              src={`./src/assets/img/uzis/uzi${id}.png`}
              alt={`Cover ${id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
