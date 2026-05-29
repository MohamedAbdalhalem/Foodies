"use client";
import React, { useActionState } from 'react'
import MealsFormSubmition from './MealsFormSubmition'
import ImagePicker from './ImagePicker'
import { shareMeal } from '@/lib/action';
import classes from './ShareMealForm.module.css'
export default function ShareMealForm() {
  const [formState, formAction] = useActionState(shareMeal, { errors: null });
  return (
    <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={
                  formState.savedValues && formState.savedValues?.creator
                }
              />
              {formState.errors && <span style={{color:"red"}}>{formState.errors?.creatorError}</span>}
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" defaultValue={
                  formState.savedValues && formState.savedValues?.creator_email
                } />
                {formState.errors && <span style={{color:"red"}}>{formState.errors?.creatorError}</span>}
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={
                  formState.savedValues && formState.savedValues?.title
                } />
                {formState.errors && <span style={{color:"red"}}>{formState.errors?.titleError}</span>}
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" defaultValue={
                  formState.savedValues && formState.savedValues?.summary
                } />
                {formState.errors && <span style={{color:"red"}}>{formState.errors?.summaryError}</span>}
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              defaultValue={
                  formState.savedValues && formState.savedValues?.instructions
                }
            ></textarea>
            {formState.errors && <span style={{color:"red"}}>{formState.errors?.instructionsError}</span>}
          </p>
          <ImagePicker label="your meal image" name="image" id="image" />
          {formState.errors && <span style={{color:"red"}}>{formState.errors?.imageError}</span>}
          <p className={classes.actions}>
            <MealsFormSubmition />
          </p>
        </form>
  )
}
