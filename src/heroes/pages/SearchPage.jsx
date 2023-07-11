import React from 'react'
import { HeroCard } from '../components/HeroCard'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import queryString from 'query-string'
import { getHerosByName } from '../helpers/getHerosByName'

export const SearchPage = () => {
  const navigate = useNavigate()

  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)

  const heroes = getHerosByName(q)

  const { searchText, onInputChange } = useForm({
    searchText: q
  })

  const showSearch = q.length === 0
  const showError = q.length > 0 && heroes.length === 0

  const onSearchSubmit = (event) => {
    event.preventDefault()
    if (searchText.trim().length <= 1) return

    navigate(`?q=${searchText.toLowerCase().trim()}`)
  }

  return (
    <>
      <div className="row">
        <h1>Search page</h1>
        <hr />
        <div className="col-5">
          <h4>Searching</h4>
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resulst</h4>
          <hr />

          <div
            className="alert alert-primary"
            style={{ display: showSearch ? '' : 'none' }}
          >
            Search a hero
          </div>

          <div
            className="alert alert-danger"
            style={{ display: showError ? '' : 'none' }}
          >
            No hero call <b>{q}</b> found
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  )
}
