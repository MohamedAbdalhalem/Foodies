import Link from 'next/link'
import React, { Suspense } from 'react'
import classes from "./page.module.css"
import MealsGrid from '@/components/meals/MealsGrid'
import { fetchMeals } from '@/lib/meals'
import LoadingPage from './LoadingPage'

export const metadata = {
  title: "All meals",
  description: "Delicious meals, shared by a food-loving community.",
};

async function Meals(){
  const meals = await fetchMeals()

  return <MealsGrid meals={meals}/>
}

export default async function MealsPage() {
  
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">
          Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<LoadingPage/>}>
          <Meals/>
        </Suspense>
      </main>
    </>
  )
}
