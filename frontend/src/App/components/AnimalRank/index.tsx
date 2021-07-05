import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core'
import React, { useEffect } from 'react'
import useAxios from '../../hooks/useAxios'
import { AnimalRankType } from '../../types/AnimalRankType'
import styles from './index.style'
import PetsIcon from '@material-ui/icons/Pets'

export const AnimalRank: React.FC = () => {
  const classes = styles()
  const { data: rank, error, loading, fetchData } = useAxios<[AnimalRankType]>()

  useEffect(() => {
    const url = '/animal/rank'
    fetchData(url)
  }, [fetchData])

  if (loading) return <h1>Loading...</h1>

  if (error || !rank) return <h1>Error...</h1>

  return (
    <Box className={classes.root}>
      <Typography variant="h5">Top 5 Animal</Typography>
      <List>
        {rank.map((item) => {
          return (
            <ListItem>
              <ListItemIcon>
                <PetsIcon />
              </ListItemIcon>
              <ListItemText primary={item.name} secondary={item.count} />
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}

export default AnimalRank
