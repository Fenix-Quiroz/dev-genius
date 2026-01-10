"use client";
import { useState } from "react";
import {
  IDENTIFIERS,
  TYPES_OF_LANGUAGES,
  VARIABLE_NOMENCLATURE,
} from "../consts";
import {
  createEmptyResultsFormErrors,
  createResultsFormEmpty,
} from "../form.defaults";
import { FormResults, FormResultsErrors } from "../form.types";
import { validateForm } from "../validations/form.validation";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { UISelect } from "../../../components/select";
import { UITextarea } from "../../../components/textarea";

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
  const handler = (name: string, value: string) => {
    setFormResults({ ...formResults, [name]: value });
    const validation = validateForm({ ...formResults, [name]: value });
    setErrors(validation.errors);
  };

  const handleSubmit =  (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formValidationResults = validateForm(formResults);
    setErrors(formValidationResults.errors);
    if (formValidationResults.succeeded) {
      onSubmitForm(formResults);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-full w-[-webkit-fill-available] p-3 md:p-4 lg:p-5 md:border-r md:border-zinc-700"
    >
      <UISelect
        label="Identificador"
        name="identificator"
        value={formResults.identificator}
        options={IDENTIFIERS}
        defaultValue="Variable"
        onChange={handler}
      />
      <p className="text-red-500 font-medium text-sm">{errors.identificator}</p>
      <UISelect
        label="Lenguaje"
        name="language"
        value={formResults.language}
        options={TYPES_OF_LANGUAGES}
        defaultValue="JavaScript"
        onChange={handler}
      />
      <p className="text-red-500 font-medium text-sm">{errors.language}</p>

      <UISelect
        label="Nomenclatura"
        name="nomenclature"
        value={formResults.nomenclature}
        options={VARIABLE_NOMENCLATURE}
        defaultValue="camelCase"
        onChange={handler}
      />
      <p className="text-red-500 font-medium text-sm">{errors.nomenclature}</p>
      <UITextarea
        label="Descripción"
        name="description"
        value={formResults.description}
        placeholder="Para nombres de usuarios de un banco..."
        onChange={handler}
      />
      <p className="text-red-500 font-medium text-sm">{errors.description}</p>
      <Button
        className="w-full mt-4 cursor-pointer"
        variant="outline"
        disabled={loading}
      >
        {loading && <Spinner />}
        {loading ? "Cargando..." : "✨Generar Nombres"}
      </Button>
    </form>
  );
}
