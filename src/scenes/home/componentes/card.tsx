import { Button } from "@/components/ui/button";
import { Tool } from "@/lib/constants/tools";
import Link from "next/link";

interface CardProps {
  tool: Tool;
}

export function Card(props: CardProps) {
  const { tool } = props;
  return (
    <div className="w-full gap-2 p-3 border-2 border-border rounded-md">
      <div className="">
        <span className=" text-4xl lg:text-5xl">{tool.icon}</span>
        <h1 className="text-2xl font-bold">{tool.name}</h1>
      </div>
      <p className="">{tool.description}</p>
      <Button className="mt-4 text-lg p-5" variant="outline" asChild>
        <Link href={tool.path}>Probar</Link>
      </Button>
    </div>
  );
}
