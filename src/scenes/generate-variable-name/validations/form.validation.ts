import { FormValidationResult } from "@/common/validations/validation.model";
import { FormResults, FormResultsErrors } from "../form.types";
import {
  validateDescription,
  validateIdentificator,
  validateLanguage,
  validateNomenclature,
} from "./filed.validations";

export const validateForm = (
  results: FormResults
): FormValidationResult<FormResultsErrors> => {
  const fieldValidationResults = [
    validateIdentificator(results.identificator),
    validateLanguage(results.language),
    validateNomenclature(results.nomenclature),
    validateDescription(results.description),
  ];
  return {
    succeeded: fieldValidationResults.every((result) => result.succeeded),
    errors: {
      identificator: fieldValidationResults[0].errorMessage ?? "",
      language: fieldValidationResults[1].errorMessage ?? "",
      nomenclature: fieldValidationResults[2].errorMessage ?? "",
      description: fieldValidationResults[3].errorMessage ?? "",
    },
  };
};
