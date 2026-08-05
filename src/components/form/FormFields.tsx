"use client"

import * as React from "react"
import type { Control, FieldPath, FieldValues } from "react-hook-form"

import { Checkbox } from "@/components/ui/checkbox"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

/**
 * Shared props every reusable field takes on top of its own control-specific
 * props. `control` + `name` wire the field into a React Hook Form instance;
 * everything else covers the "consistent features" every field should support.
 */
type BaseFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> = {
  control: Control<TFieldValues>
  name: TName
  label?: React.ReactNode
  description?: React.ReactNode
  required?: boolean
  disabled?: boolean
  className?: string
}

function RequiredMark({ required }: { required?: boolean }) {
  if (!required) return null
  return (
    <span className="text-destructive" aria-hidden="true">
      *
    </span>
  )
}

// ---------------------------------------------------------------------------
// TextField
// ---------------------------------------------------------------------------

type TextFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> = BaseFieldProps<TFieldValues, TName> &
  Omit<React.ComponentProps<typeof Input>, "name" | "defaultValue" | "disabled">

export function TextField<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  description,
  required,
  disabled,
  className,
  ...inputProps
}: TextFieldProps<TFieldValues, TName>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && (
            <FormLabel>
              {label}
              <RequiredMark required={required} />
            </FormLabel>
          )}
          <FormControl>
            <Input {...field} disabled={disabled} {...inputProps} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

// ---------------------------------------------------------------------------
// TextareaField
// ---------------------------------------------------------------------------

type TextareaFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> = BaseFieldProps<TFieldValues, TName> &
  Omit<
    React.ComponentProps<typeof Textarea>,
    "name" | "defaultValue" | "disabled"
  >

export function TextareaField<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  description,
  required,
  disabled,
  className,
  ...textareaProps
}: TextareaFieldProps<TFieldValues, TName>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && (
            <FormLabel>
              {label}
              <RequiredMark required={required} />
            </FormLabel>
          )}
          <FormControl>
            <Textarea {...field} disabled={disabled} {...textareaProps} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

// ---------------------------------------------------------------------------
// SelectField
// ---------------------------------------------------------------------------

type SelectFieldOption = {
  label: React.ReactNode
  value: string
  disabled?: boolean
}

type SelectFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> = BaseFieldProps<TFieldValues, TName> & {
  options: SelectFieldOption[]
  placeholder?: string
}

export function SelectField<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  description,
  required,
  disabled,
  className,
  options,
  placeholder,
}: SelectFieldProps<TFieldValues, TName>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && (
            <FormLabel>
              {label}
              <RequiredMark required={required} />
            </FormLabel>
          )}
          <Select
            onValueChange={field.onChange}
            value={field.value ?? ""}
            disabled={disabled}
          >
            <FormControl>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

// ---------------------------------------------------------------------------
// CheckboxField
// ---------------------------------------------------------------------------

type CheckboxFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> = BaseFieldProps<TFieldValues, TName>

export function CheckboxField<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  description,
  required,
  disabled,
  className,
}: CheckboxFieldProps<TFieldValues, TName>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("flex flex-row items-start gap-3", className)}>
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              disabled={disabled}
            />
          </FormControl>
          <div className="grid gap-1 leading-none">
            {label && (
              <FormLabel className="font-normal">
                {label}
                <RequiredMark required={required} />
              </FormLabel>
            )}
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  )
}

// ---------------------------------------------------------------------------
// SwitchField
// ---------------------------------------------------------------------------

type SwitchFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> = BaseFieldProps<TFieldValues, TName>

export function SwitchField<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  description,
  required,
  disabled,
  className,
}: SwitchFieldProps<TFieldValues, TName>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={cn(
            "flex flex-row items-center justify-between gap-4 rounded-lg border border-border p-3",
            className
          )}
        >
          <div className="grid gap-1 leading-none">
            {label && (
              <FormLabel>
                {label}
                <RequiredMark required={required} />
              </FormLabel>
            )}
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </div>
          <FormControl>
            <Switch
              checked={field.value}
              onCheckedChange={field.onChange}
              disabled={disabled}
            />
          </FormControl>
        </FormItem>
      )}
    />
  )
}
