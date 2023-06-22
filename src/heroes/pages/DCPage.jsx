import React from 'react'
import { HeroList } from '../components/HeroList'

export const DCpage = () => {
  return (
    <>
        <h1>DC Comics</h1>
        <hr />

        <HeroList publisher = {'DC Comics'}/>
        
    </>
  )
}
