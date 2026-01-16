import { FormResults, FormResultsErrors } from "./form-types";

export const createResultsFormEmpty = (): FormResults => ({
  color: "",
});
export const createEmptyResultsFormErrors = (): FormResultsErrors => ({
  color: "",
});
