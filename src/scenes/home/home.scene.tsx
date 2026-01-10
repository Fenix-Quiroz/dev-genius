import { tools } from "@/lib/constants/tools";
import { Card } from "./componentes/card";

export function HomeScene() {
  return (
    <div className="min-h-full">
      <section className="w-full max-w-6xl mx-auto grid lg:grid-cols-[repeat(auto-fit,minmax(450px,1fr))]  gap-6 justify-items-center">
        {tools.map((tool) => (
          <Card key={tool.id} tool={tool} />
        ))}
      </section>
    </div>
  );
}
