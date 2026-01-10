"use client";

import { useApi } from "@/hooks/useApi";
import { Form } from "./components/form";
import { FormResults } from "./form-types";
import { PROMPTS } from "./prompts";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { HomeButton } from "@/components/home-button";

export function ExplainCodeScene() {
  const { loading, fetchData, data } = useApi();

  const onSubmitForm = async (value: FormResults) => {
    const { language, description } = value;
    await fetchData(PROMPTS.PROMPT(language, description));
  };

  return (
    <div>
      <section className="mb-3">
        <HomeButton />
      </section>
      <div className="h-[calc(100dvh-120px)] w-full px-4 lg:px-10 flex flex-col lg:flex-row gap-4 overflow-hidden">
        <section className="w-full lg:w-90 shrink-0 border border-border rounded-lg p-4 bg-background/50">
          <Form onSubmitForm={onSubmitForm} loading={loading} />
        </section>
        <section className="flex-1 border border-border rounded-lg bg-[#1e1e1e] overflow-hidden">
          <div className="h-full overflow-auto scrollbar-hide">
            <SyntaxHighlighter
              showLineNumbers
              wrapLongLines
              language="tsx"
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: "16px",
                background: "transparent",
                fontSize: "13px",
                lineHeight: "1.6",
                width: "100%",
                minHeight: "100%",
              }}
            >
              {data || "// Aquí se mostrará el código / explicación..."}
            </SyntaxHighlighter>
          </div>
        </section>
      </div>
    </div>
  );
}
