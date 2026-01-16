import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { FormResults, FormResultsErrors } from "../form-types";
import {
  createEmptyResultsFormErrors,
  createResultsFormEmpty,
} from "../form-defaults";
import { useState } from "react";
import { validateForm } from "../validations/form-validations";

interface FormProps {
  onSubmitForm: (value: FormResults) => void;
  loading: boolean;
}
export function Form(props: FormProps) {
  const { onSubmitForm, loading } = props;
  const [errors, setErrors] = useState<FormResultsErrors>(
    createEmptyResultsFormErrors()
  );
  const [formResults, setFormResults] = useState<FormResults>(
    createResultsFormEmpty()
  );

  const HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFormResults({ ...formResults, [name]: value });
    const validation = validateForm({ ...formResults, [name]: value });
    setErrors(validation.errors);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formValidationResults = validateForm(formResults);
    setErrors(formValidationResults.errors);
    if (formValidationResults.succeeded) {
      onSubmitForm(formResults);
    }
  };
  return (
    <form className="w-full " onSubmit={handleSubmit}>
      <h4 className="text-3xl font-semibold mb-2">Color converter</h4>
      <p className="mb-2 text-zinc-400">
        Pega o escribe un color, ya sea en formato hexadecimal, RGB, HSL o CMYK.
        También puedes usar colores básicos en inglés (red, blue, green...).
      </p>
      <div className="w-full flex flex-col  max-w-sm items-start gap-2 relative">
        <Label>Color:</Label>
        <Input
          onChange={HandleChange}
          type="text"
          id="color"
          name="color"
          value={formResults.color}
          placeholder="#fff"
        />
        <div
          className="w-5 h-5 absolute bottom-2 right-2 rounded-full"
          style={{ backgroundColor: formResults.color }}
        ></div>
      </div>
      <p className="text-red-500">{errors.color}</p>
      <Button
        className="mt-4 cursor-pointer"
        variant="outline"
        disabled={loading}
      >
        {loading && <Spinner />}
        {loading ? "Cargando..." : "✨Convertir"}
      </Button>
    </form>
  );
}
