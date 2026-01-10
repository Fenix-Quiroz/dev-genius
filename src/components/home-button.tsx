import Link from "next/link";
import { Button } from "./ui/button";

export function HomeButton() {
  return (
    <Button className="mt-4 ml-4 cursor-pointer text-xl" variant="outline" asChild>
      <Link href="/">Inicio</Link>
    </Button>
  );
}
