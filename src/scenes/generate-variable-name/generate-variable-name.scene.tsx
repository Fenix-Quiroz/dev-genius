"use client";
import { useApi } from "@/hooks/useApi";
import { Form } from "./components/form";
import { Header } from "./components/header";
import { PROMPTS } from "./prompts";
import { FormResults } from "./form.types";
import { Results } from "./components/results";
import { HomeButton } from "@/components/home-button";

export function GenerateVariableNameScene() {
  const { loading, fetchData, data } = useApi();

  const onSubmitForm = async (value: FormResults) => {
    const { identificator, nomenclature, language, description } = value;
    await fetchData(
      PROMPTS.PROMPT(identificator, nomenclature, language, description)
    );
  };
  return (
    <section className="lg:mx-23.75 border border-zinc-700 rounded-lg">
        <HomeButton />
      <Header />
      <main>
        <p className="p-3 md:p-4 lg:p-5 border-b border-zinc-700">
          ¿Qué quieres nombrar?
        </p>
        <section className=" flex flex-col md:flex-row justify-between">
          <Form onSubmitForm={onSubmitForm} loading={loading} />
          <Results results={data} />
        </section>
      </main>
    </section>
  );
}
