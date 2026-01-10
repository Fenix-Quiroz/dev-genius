"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
export default function ColorConverterPage() {
  const [loading, setLoading] = useState(false);

  const changeColor = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt:
            "Cuéntame una historia corta de amor, en 1 párrafo de 4 líneas",
        }),
      });

      const data = await res.json();
      console.log("STATUS:", res.status);
      console.log("DATA:", data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false); // ✅ aquí se apaga cuando termina
    }
  };

  return (
    <div className="flex flex-col h-full items-center justify-center gap-4 p-4">
      <span>Dev genius</span>

      <Button variant="outline" onClick={changeColor} disabled={loading}>
        {loading && <Spinner />}
        {loading ? "Cargando..." : "Click me"}
      </Button>
    </div>
  );
}
