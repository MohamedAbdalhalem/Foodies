'use client'
import React from "react";
import { useFormStatus } from "react-dom";

export default function MealsFormSubmition() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Sharing" : "Share Meal"}
    </button>
  );
}
