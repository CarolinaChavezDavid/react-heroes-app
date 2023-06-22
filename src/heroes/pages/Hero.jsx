import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById';

export const Hero = () => {

    const {id} = useParams();
    const hero = getHeroById(id)
    const heroImageUrl =  `/src/assets/heroes/${id}.jpg`;


    if(!hero) {
        return <Navigate to= "/marvel"/>;
    }

  return (
    <div className='row mt-5'>
        <div className='col-4'>
            <img 
                src ={heroImageUrl}
                alt= { hero.superhero}
                className='img-thumbnail'
            />
        </div>
        <div className='col-8'>
            <h3>{hero.superhero}</h3>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item'> <b>Alter ego:</b>{hero.alter_ego}</li>
                <li className='list-group-item'> <b>Publisher:</b>{hero.publisher}</li>
                <li className='list-group-item'> <b>First appereance</b>{hero.first_appearance}</li>
            </ul>

            <h5 className='mt-3'>Characters</h5>
            <p>{hero.character}</p>
        </div>

    </ div>
  )
}
