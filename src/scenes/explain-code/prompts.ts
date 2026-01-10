export const PROMPTS = {
  PROMPT: (
    language: string,
    description: string
  ) => `Voy a pasarte dos valores desde un formulario:

1. lenguaje: ${language}
2. codigo: ${description}

Primero, verifica si el código en ${description} corresponde al lenguaje ${language}.  
Si no corresponde, responde únicamente con este texto: El codigo no corresponde al lenguaje dado.

Si el lenguaje y el código coinciden, no menciones que sí corresponde. Solo haz lo siguiente:

Explica el código paso a paso, usando comentarios directamente sobre el bloque de código.

No uses backticks, comillas simples ni dobles.  
No uses formato Markdown.  
No agregues encabezados ni secciones, solo ve explicando y mostrando el código comentado una parte tras otra.

Haz saltos de línea para que la respuesta sea fácil de leer y no se vea tan larga de corrido.

Para cada parte importante:

- Da una explicación clara y breve en forma de COMENTARIO justo antes del código relacionado.

Ejemplo del formato:

Primero, se importa React y el hook useState para manejar el estado.  
import React, { useState } from 'react';

`,
};
