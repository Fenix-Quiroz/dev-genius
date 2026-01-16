import { CopyButton } from "@/components/copy-button";
import { ColorConversion } from "../form-types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ColorConversionsProps {
  colorConversions: ColorConversion[];
}

export function ColorConversions(props: ColorConversionsProps) {
  const { colorConversions } = props;
  return (
    <div className="border border-zinc-700 p-4  rounded-lg mt-3">
      <h4 className="text-xl font-semibold">Resultados:</h4>
      <p>Vista previa del color:</p>
      <div
        className="w-full rounded-lg  h-30 md:h-25 my-3"
        style={{ backgroundColor: colorConversions[0].value }}
      ></div>
      <Tabs defaultValue={colorConversions[0].type}>
        <TabsList className="flex gap-2   w-full">
          {colorConversions.map((item, index) => (
            <TabsTrigger key={index} value={item.type}>
              {item.type}
            </TabsTrigger>
          ))}
        </TabsList>
        <p className="text-slate-500">Click para copiar ⬇️</p>
        {colorConversions.map((item, index) => (
          <TabsContent key={index} value={item.type}>
            <CopyButton text={item.value} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
