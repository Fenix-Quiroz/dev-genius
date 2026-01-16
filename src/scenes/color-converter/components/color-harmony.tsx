interface ColorHarmonyProps {
  colorHarmonies: string[];
}

export function ColorHarmony(props: ColorHarmonyProps) {
  const { colorHarmonies } = props;
  return (
    <div className="border border-zinc-700 mt-4 p-4 rounded-md">
      <p className=" md:text-md lg:text-xl font-semibold">
        Harmonia de colores:
      </p>
      <section className="flex flex-wrap justify-center md:justify-evenly gap-4 mt-2">
        {colorHarmonies.map((item, index) => (
          <div className="flex flex-col items-center  gap-2" key={index}>
            <span
              style={{ backgroundColor: item }}
              className="w-20 h-20 font-bold rounded-full flex items-center justify-center "
            ></span>
            <p>{item}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
