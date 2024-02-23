import * as z from "zod";

const genericFormSchema = z.object({
  //   beginDate: z.date(),
  //   endDate: z.date().nullish(),
  dates: z.object({
    from: z.date(),
    to: z.date().optional(),
  }),
});

export default genericFormSchema;

export type GenericFormValues = z.infer<typeof genericFormSchema>;
