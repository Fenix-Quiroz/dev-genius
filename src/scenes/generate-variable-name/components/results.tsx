import { UIResultsEmpty } from "@/components/results-empty";
import { ResultsList } from "./results-list";

interface ResultsProps {
  results: string;
}

export function Results(props: ResultsProps) {
  const { results } = props;
  const resList = results.split("\n");
  return (
    <div className="w-[-webkit-fill-available] border-t border-zinc-700 md:border-t-transparent">
      {results ? (
        <ResultsList list={resList} />
      ) : (
        <div className="lg:w-110 h-full">
          <UIResultsEmpty description="Llena el formulario y haz click en 'Generar Nombres'" />
        </div>
      )}
    </div>
  );
}
