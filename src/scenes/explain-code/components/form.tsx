"use client";
import { UISelect } from "@/components/select";
import { UITextarea } from "@/components/textarea";
import { LANGUAGES } from "../consts";
import { FormResults, FormResultsErrors } from "../form-types";
import { useState } from "react";
import {
  createEmptyResultsFormErrors,
  createResultsFormEmpty,
} from "../form-defaults";
import { validateForm } from "../validations/form-validations";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

interface FormProps {
  onSubmitForm: (value: FormResults) => void;
  loading: boolean;
}

export const Form = (props: FormProps) => {
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
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formValidationResults = validateForm(formResults);
    setErrors(formValidationResults.errors);
    if (formValidationResults.succeeded) {
      onSubmitForm(formResults);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <UISelect
        label="Lenguaje"
        name="language"
        value={formResults.language}
        options={LANGUAGES}
        defaultValue="JavaScript"
        onChange={handler}
      />
      <p className="text-red-500">{errors.language}</p>
      <UITextarea
        label="Descripción"
        name="description"
        value={formResults.description}
        placeholder="Pega tu codigo aquí..."
        onChange={handler}
      />
      <p className="text-red-500">{errors.description}</p>
      <Button
        className="w-full mt-4 cursor-pointer"
        variant="outline"
        disabled={loading}
      >
        {loading && <Spinner />}
        {loading ? "Cargando..." : "✨Explicame"}
      </Button>
    </form>
  );
};
