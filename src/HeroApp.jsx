import React from 'react'
import { NavBar } from './ui/components/NavBar'
import { Outlet } from 'react-router-dom'

export const HeroApp = () => {
  return (
    <>
        <h1>Hero App</h1>
        <NavBar />
        <Outlet />
    </>
  )
}
