import React from 'react'

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { HeroApp } from '../HeroApp';
import { SearchPage } from '../heroes/pages/SearchPage';
import { MarvelPage } from '../heroes/pages/MarvelPage';
import { DCpage } from '../heroes/pages/DCpage';
import { LoginPage } from '../heroes/pages/LoginPage';
import { Hero } from '../heroes/pages/Hero';



export const HeroAppRouter = () =>{
    return (
        createBrowserRouter([
            {
              path: "/",
              element: <HeroApp />,
              children: [
                {
                  path: "marvel",
                  element: <MarvelPage />, 
                },
                {
                  path: "DC",
                  element: <DCpage />, 
                },
                {
                  path: "search",
                  element: <SearchPage />, 
                },
                {
                    path: "hero/:id",
                    element: <Hero />, 
                  },
              ]
            },{
                path: "login",
                element: <LoginPage />, 
            }
          ])
    );

} 

