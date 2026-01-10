import { FormResults, FormResultsErrors } from "./form-types";

export const createResultsFormEmpty = (): FormResults => ({
  language: "",
  description: "",
});

export const createEmptyResultsFormErrors = (): FormResultsErrors => ({
  language: "",
  description: "",
});
