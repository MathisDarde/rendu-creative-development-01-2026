type Props = {
  bg: number;
  character: number;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
};

export const AlbumContent = ({ bg, character, canvasRef }: Props) => {
  return (
    <div className="relative w-75 aspect-square mx-auto overflow-hidden mb-4">
      <img
        src={`./src/assets/img/covers/cover${bg}.png`}
        alt="Background album"
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
        className="absolute bottom-0 left-1/2 -translate-x-1/2 aspect-square w-9/12"
        src={`./src/assets/img/uzis/uzi${character}.png`}
        alt="Lil Uzi Vert Cartoon"
      />

      <img
        className="absolute bottom-2 left-2 aspect-video w-12"
        src="./src/assets/img/parentaladvisory.png"
        alt="parental advisory"
      />
    </div>
  );
};
