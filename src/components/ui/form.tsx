import * as React from "react"
import {
  FormProvider,
  useFormContext,
  type FieldPath,
  type FieldValues,
  type RegisterOptions,
  type UseFormRegisterReturn,
} from "react-hook-form"

import { cn } from "@/lib/utils"

const Form = FormProvider

type FormFieldProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>
  rules?: RegisterOptions<TFieldValues, FieldPath<TFieldValues>>
  render: (props: {
    field: UseFormRegisterReturn
  }) => React.ReactNode
}

function FormField<TFieldValues extends FieldValues>({
  name,
  rules,
  render,
}: FormFieldProps<TFieldValues>) {
  const methods = useFormContext<TFieldValues>()
  return <>{render({ field: methods.register(name, rules) })}</>
}

function FormItem({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-2", className)} {...props} />
}

function FormLabel({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={cn("text-sm font-medium text-cream", className)} {...props} />
}

function FormControl({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("", className)} {...props} />
}

function FormMessage({ className, children }: { className?: string; children?: React.ReactNode }) {
  if (!children) return null
  return <p className={cn("text-xs text-cream-70", className)}>{children}</p>
}

function FormDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-xs text-cream-70", className)} {...props} />
}

export { Form, FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription }
