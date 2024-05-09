"use server";

import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const EXISTS_USER = [
  "abc@abc.com",
];

export type FormValues = z.infer<typeof formSchema>;

export async function submitForm(
  _prevState: any,
  formData: FormData
): Promise<ActionState | void> {

  console.log("server action!!");

  // Delay for 1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const input = formSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!input.success) {

    const { fieldErrors } = input.error.flatten();

    return {
      code: "VALIDATION_ERROR",
      fieldErrors,
    };
  }

  try {

    if( EXISTS_USER.includes(input.data.email) ) {
      return {
        code: "EXISTS_ERROR",
        key: "email",
        message: "User already exists with this email.",
      };
    }

    // object equality check
    return {
      code: "SUCCESS",
      message: "Form submitted successfully!",
    };
  }
  catch (error) {
    return {
      code: "INTERNAL_ERROR",
      err: error,
    };
  }
}