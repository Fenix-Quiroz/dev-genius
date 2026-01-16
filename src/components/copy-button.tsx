import { useState } from "react";
import { Button } from "./ui/button";

interface CopyButtonProps {
  text: string;
}

export function CopyButton(props: CopyButtonProps) {
  const { text } = props;
  const [copiado, setCopiado] = useState(false);
  const handlerCoppy = (texto: string) => {
    navigator.clipboard.writeText(texto);
    setCopiado(true);
    setTimeout(() => {
      setCopiado(false);
    }, 1000);
  };
  return (
    <>
      <span className="text-green-400">{copiado ? "Copiado" : ""}</span>
      <Button
        className="cursor-pointer w-full"
        variant="outline"
        onClick={() => handlerCoppy(text)}
      >
        {text}
      </Button>
    </>
  );
}
