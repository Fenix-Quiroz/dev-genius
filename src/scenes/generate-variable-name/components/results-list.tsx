import { CopyButton } from "@/components/copy-button";

interface ResultsListProps {
  list: string[];
}
export function ResultsList(props: ResultsListProps) {
  const { list } = props;
  return (
    <div className="flex flex-col  gap-2  p-4">
      <p className="font-medium">Resultados:</p>
      <p className="text-zinc-400">Haz click en los nombres para copiarlos.</p>
      {list.map((item, index) => (
        <CopyButton key={index} text={item} />
      ))}
    </div>
  );
}
