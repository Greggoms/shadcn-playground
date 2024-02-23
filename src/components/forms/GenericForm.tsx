"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "sonner";

import genericFormSchema, {
  GenericFormValues,
} from "./schemas/generic-form-schema";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "@radix-ui/react-icons";

const GenericForm = () => {
  const form = useForm<GenericFormValues>({
    resolver: zodResolver(genericFormSchema),
    defaultValues: {
      dates: {
        from: new Date(),
        to: undefined,
      },
    },
  });

  const watchBeginDate = useWatch({
    control: form.control,
    name: "dates.from",
  });
  const watchEndDate = useWatch({ control: form.control, name: "dates.to" });

  const onSubmit = (values: GenericFormValues) => {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="dates"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date(s)</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      id="date"
                      variant={"outline"}
                      className={cn(
                        "w-[300px] justify-start text-left font-normal",
                        !watchBeginDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {watchBeginDate ? (
                        watchEndDate ? (
                          <>
                            {format(watchBeginDate, "LLL dd, y")} -{" "}
                            {format(watchEndDate, "LLL dd, y")}
                          </>
                        ) : (
                          format(watchBeginDate, "LLL dd, y")
                        )
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={new Date()}
                    selected={field.value}
                    onSelect={field.onChange}
                    numberOfMonths={1}
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>Select a time range.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default GenericForm;
