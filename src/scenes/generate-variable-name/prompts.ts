export const PROMPTS = {
  PROMPT: (
    identificator: string,
    nomenclature: string,
    language: string,
    description: string
  ) => `Genera exactamente 5 nombres de ${identificator} en ingles relacionados con ${description}, 
        utilizando la convención de nomenclatura ${nomenclature}. 
        No incluyas funciones adicionales, comillas, comentarios, explicaciones ni formato Markdown. 
        Es para un proyecto desarrollado con ${language}. 
        Devuélvelos uno por línea, sin ningún texto adicional.`,
};
