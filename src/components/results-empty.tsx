import { ResultsEmptyIcon } from "@/components/icons";
interface UIResultsEmptyProps {
  description: string;
}
export function UIResultsEmpty(props: UIResultsEmptyProps) {
  const { description } = props;
  return (
    <div className="h-full w-full grid place-items-center py-3">
      <div className="grid place-items-center gap-2">
        <ResultsEmptyIcon />
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
}
