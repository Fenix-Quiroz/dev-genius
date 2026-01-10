import { Github, Linkedln, Logo } from "../icons";

export function Footer() {
  return (
    <footer className="flex justify-between items-center ">
      <div className="flex items-center gap-2">
        <p className="text-orange-400 font-bold">DevGenius</p>
        <Logo />
      </div>
      <div className="flex items-center gap-4">
        <a
          title="Github"
          href="https://github.com/Fenix-Quiroz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
        <a
          title="Linkedln"
          href="https://www.linkedin.com/in/fenix-quiroz-b7b960240/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedln />
        </a>
      </div>
    </footer>
  );
}
