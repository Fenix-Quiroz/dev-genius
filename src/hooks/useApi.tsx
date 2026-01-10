import { useState } from "react";

export function useApi() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<string>("");

  const fetchData = async (prompt: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt,
        }),
      });
      if (!res.ok) {
        throw new Error("Error al conectar con la API");
      }
      const data = await res.json();
      setData(data.text);
    } catch (error) {
      throw new Error("Error al conectar con la API", { cause: error });
    } finally {
      setLoading(false);
    }
  };

  return { loading, fetchData, data };
}
