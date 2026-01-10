import { Field, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

interface UITextareaProps {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (name: string, value: string) => void;
}

export function UITextarea(props: UITextareaProps) {
  const { label, name, value, placeholder, onChange } = props;
  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <Textarea
      className="h-32 w-full resize-none overflow-y-auto scrollbar-hide"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(name, event.target.value)}
      />
    </Field>
  );
}
