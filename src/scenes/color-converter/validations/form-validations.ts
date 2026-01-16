import { FormValidationResult } from "@/common/validations/validation.model";
import { FormResults, FormResultsErrors } from "../form-types";
import { isValidColor } from "./field.validation";


export const validateForm = (
  results: FormResults
): FormValidationResult<FormResultsErrors> => {
  const fieldValidationResults = [
    isValidColor(results.color),
  ];
  return {
    succeeded: fieldValidationResults.every((result) => result.succeeded),
    errors: {
      color: fieldValidationResults[0].errorMessage ?? "",
    },
  };
};
