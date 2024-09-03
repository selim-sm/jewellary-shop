import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "minimum 3 character" })
    .max(25, { message: "maximum 25 character" }),
  email: z
    .string()
    .email({ message: "invalid email address" })
    .refine((val) => val.endsWith("gmail.com"), {
      message: "email must end with gmail.com",
    }),
  address: z.string().min(3, { message: "" }),

  number: z
    .string()
    .min(10, { message: "incorrect phone Number" })
    .max(10, { message: "maximum 10 number" }),
});

export type SchemaType = z.infer<typeof formSchema>;
