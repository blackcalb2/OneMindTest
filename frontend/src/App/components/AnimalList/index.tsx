import React, { useEffect } from 'react'
import style from './index.style'
import useAxios from '../../hooks/useAxios'
import AnimalItem from '../AnimalItem'

const AnimalList: React.FC = () => {
  const classes = style()
  const { data: animals, error, loading, fetchData } = useAxios<[string]>()
  const url = '/animal/list'
  useEffect(() => {
    fetchData(url)
  }, [fetchData])

  if (loading) return <h1>Loading...</h1>

  if (error || !animals) return <h1>Error...</h1>
  return (
    <div className={classes.root}>
      {animals.map((animal) => (
        <AnimalItem
          animalName={animal}
          srcAvatar={
            'https://cdn4.iconfinder.com/data/icons/animal-2-1/100/animal-03-512.png'
          }
        />
      ))}
    </div>
  )
}

export default AnimalList
