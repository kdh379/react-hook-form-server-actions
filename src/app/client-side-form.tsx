"use client";

import { useFormState, useFormStatus } from "react-dom";

import { type FormValues, submitForm } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useFormAction } from "@/hooks/useFormAction";

export default function ClientSideForm() {

  const [state, dispatch] = useFormState(submitForm, null);
  const form = useFormAction<FormValues>({
    state,
    defaultValues: {
      email: "",
      password: "",
    },
    onSuccess: () => {
      toast({
        title: "Form submitted successfully!",
        duration: 5000,
      });
    },
  });

  return (
    <Form {...form}>
      <form
        action={dispatch}
        className="space-y-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center justify-between">
                Email
                <FormMessage />
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="abc@abc.com"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center justify-between">
                Password
                <FormMessage />
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  placeholder="********"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <SubmitButton />
        </div>
      </form>
    </Form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      isLoading={pending}
    >
      Submit
    </Button>
  );
}