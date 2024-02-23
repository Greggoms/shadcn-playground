import { Metadata } from "next";

import GenericForm from "@/components/forms/GenericForm";

export const metadata: Metadata = {
  title: "Form | shadcn-playground",
  description: "react-hook-form + zod + shadcn.",
};

const FormPage = () => {
  return (
    <section className="container mt-5 mb-10">
      <h2 className="text-2xl font-medium mb-5">
        Here&apos;s a form to fill out
      </h2>

      <GenericForm />
    </section>
  );
};

export default FormPage;
