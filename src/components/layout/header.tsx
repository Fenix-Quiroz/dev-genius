import Link from "next/link";
import { Logo } from "../icons";

export function Header() {
  return (
    <header>
      <Link className="flex items-center gap-1" href="/">
        <h1 className="text-3xl md:text-4xl lg:text-5xl  font-bold text-orange-400">
          DevGenius
        </h1>
        <Logo />
      </Link>
      <p>Utilidades inteligentes para desarrolladores modernos.</p>
    </header>
  );
}
