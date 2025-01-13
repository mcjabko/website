export const Hero = () => {
  return (
    <div className="bg-[url('/hero.webp')] h-[500px] bg-blend-soft-light bg-gray-900 bg-cover bg-center bg-no-repeat bg-heroimage">
      <div className="font-sans flex h-2/3 flex-col gap-4 mb-10 content-center items-center justify-center pb-10">
        <h1 className="text-5xl lg:text-7xl font-black text-red-400">MCJabko.cz</h1>
        <h3 className="text-2xl lg:text-4xl font-bold text-yellow-300">
          Semi-Vanilla Minecraft Server
        </h3>
      </div>
    </div>
  );
};
