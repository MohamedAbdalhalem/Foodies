"use server";

import { redirect } from "next/navigation";
import { createMeal } from "./meals";
import { revalidatePath } from "next/cache";

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  let errors = {
    titleError: null,
    summaryError: null,
    instructionsError: null,
    imageError: null,
    creatorError: null,
    creatorEmailError: null,
  };
  if (meal.title.trim() === "") {
    errors.titleError = "this field is required";
  }
  if (meal.summary.trim() === "") {
    errors.summaryError = "this field is required";
  }
  if (meal.instructions.trim() === "") {
    errors.instructionsError = "this field is required";
  }
  if (meal.creator.trim() === "") {
    errors.creatorError = "this field is required";
  }
  if (meal.creator_email.trim() === "") {
    errors.creatorEmailError = "this field is required";
  }
  if (!meal.image || meal.image.size === 0) {
    errors.imageError = "you must pick an image";
  }

  if (
    errors.titleError ||
    errors.creatorEmailError ||
    errors.creatorError ||
    errors.imageError ||
    errors.instructionsError ||
    errors.summaryError
  ) {
    return {
      errors,
      savedValues: meal,
    };
  }
  await createMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
