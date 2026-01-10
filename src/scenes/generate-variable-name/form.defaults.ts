import { FormResults, FormResultsErrors } from "./form.types";

export const createResultsFormEmpty = (): FormResults => ({
  identificator: "",
  language: "",
  nomenclature: "",
  description: "",
});

export const createEmptyResultsFormErrors = (): FormResultsErrors => ({
  identificator: "",
  language: "",
  nomenclature: "",
  description: "",
});
