import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { color } = await request.json();

    if (!color || typeof color !== "string") {
      return NextResponse.json({ error: "Color is required" }, { status: 400 });
    }

    const prompt = `Dado el color ${color}, devuélveme exactamente este JSON sin explicaciones ni comentarios:

{
  "colorConversions": [
    { "type": "RGB", "value": "rgb(255, 0, 0)" },
    { "type": "HEX", "value": "#FF0000" },
    { "type": "HSL", "value": "hsl(0, 100%, 50%)" },
    { "type": "CMYK", "value": "cmyk(0%, 100%, 100%, 0%)" }
  ],
  "colorHarmonies": [
    "#FF6666",
    "#FF0000",
    "#990000",
    "#FF3333",
    "#CC0000",
    "#FF9999"
  ]
}

- El formato debe ser exacto: RGB como "rgb(...)", HEX con "#", HSL como "hsl(...)", y CMYK como "cmyk(...)".
- Todos los valores deben ser correctos según el color proporcionado.
- No devuelvas nada fuera del JSON.
- No incluyas etiquetas como \`\`\`json ni \`\`\`.
- No expliques nada. Solo el JSON limpio.
`;

    const { text } = await generateText({
      model: google("gemini-2.5-flash-lite"),
      prompt,
    });

    const cleaned = text
      .trim()
      .replace(/^```(?:json)?\s*/i, "")
      .replace(/```$/i, "")
      .trim();

    let data;
    try {
      data = JSON.parse(cleaned);
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON returned by AI" },
        { status: 502 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("color-converter error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
