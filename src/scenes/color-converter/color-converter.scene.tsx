"use client";
import { HomeButton } from "@/components/home-button";
import { useState } from "react";
import { Form } from "./components/form";
import { ColorDataArray, FormResults } from "./form-types";
import { ColorConversions } from "./components/color-conversions";
import { ColorHarmony } from "./components/color-harmony";

export function ColorConverterScene() {
  const [loading, setLoading] = useState(false);
  const mockData: ColorDataArray = {
    colorConversions: [
      { type: "RGB", value: "rgb(255, 0, 0)" },
      { type: "HEX", value: "#FF0000" },
      { type: "HSL", value: "hsl(0, 100%, 50%)" },
      { type: "CMYK", value: "cmyk(0%, 100%, 100%, 0%)" },
    ],
    colorHarmonies: [
      "#FF6666",
      "#FF0000",
      "#990000",
      "#FF3333",
      "#CC0000",
      "#FF9999",
    ],
  };
  const [data, setData] = useState<ColorDataArray>(mockData);
  const onSubmitForm = async (value: FormResults) => {
    const { color } = value;
    setLoading(true);
    try {
      const res = await fetch("/api/color-converter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          color: color,
        }),
      });

      if (!res.ok) {
        throw new Error("Error al conectar con la API");
      }
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <HomeButton />
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4  mx-5">
        <section className="border lg:col-span-1 border-zinc-700 flex justify-between items-center-zinc-700 p-4 rounded-lg mt-4">
          <Form onSubmitForm={onSubmitForm} loading={loading} />
        </section>
        <section className="md:col-span-2">
          <ColorConversions colorConversions={data.colorConversions} />
        </section>
      </section>
      <div className="mx-5">
        <ColorHarmony colorHarmonies={data.colorHarmonies} />
      </div>
    </div>
  );
}
