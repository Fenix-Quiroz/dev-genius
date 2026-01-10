import { Field, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface UISelectProps {
  label: string;
  name: string;
  value: string;
  options: string[];
  defaultValue: string;
  onChange: (name: string, value: string) => void;
}

export function UISelect(props: UISelectProps) {
  const { label, name, value, options, defaultValue, onChange } = props;
  return (
    <Field className="mb-2">
      <FieldLabel>{label}</FieldLabel>
      <Select
        name={name}
        value={value}
        onValueChange={(value) => onChange(name, value)}
      >
        <SelectTrigger>
          <SelectValue placeholder={defaultValue} />
        </SelectTrigger>
        <SelectContent>
          {options.map((identifier) => (
            <SelectItem key={identifier} value={identifier}>
              {identifier}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  );
}
