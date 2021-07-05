import {
  AccordionDetails,
  Avatar,
  Box,
  Grid,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'
import React, { useCallback, useEffect, useState } from 'react'
import useAxios from '../../hooks/useAxios'
import { TopUserPeerAnimal } from '../../types/TopUserPeerAnimal.type'
import styles from './AnimalItemDetail.style'

interface AnimalItemDetailProps {
  srcAvatar: string
  animalName: string
  showDetail: boolean
}
export const AnimalItemDetail: React.FC<AnimalItemDetailProps> = ({
  animalName,
  showDetail
}) => {
  const classes = styles()
  const [counter, setCounter] = useState<number>(10)
  const { data, error, loading, fetchData } = useAxios<[TopUserPeerAnimal]>()

  const url = `/animal/top${counter}/${animalName}`
  useEffect(() => {
    if (showDetail) {
      fetchData(url)
    }
  }, [showDetail, fetchData, url])

  const handlerShowMore = useCallback(
    () => setCounter((prevCounter) => prevCounter + 5),
    []
  )
  const handlerShowLess = useCallback(
    () => setCounter((prevCounter) => Math.max(prevCounter - 5, 3)),
    []
  )

  if (loading) return <h1>Loading...</h1>

  if (error || !data) return <h1>Error...</h1>

  return (
    <AccordionDetails>
      <Grid container>
        {data.map((user, idx) => {
          return (
            <Grid item key={user.id} xs={6} md={3}>
              <ListItem className={classes.item} component="div">
                <ListItemAvatar>
                  <Avatar className={classes.item__avatar}>{idx + 1}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={user.name}
                  secondary={`points: ${user.points}`}
                />
              </ListItem>
            </Grid>
          )
        })}
        <Grid item xs={12}>
          <Box component="div" className={classes.container__button}>
            <IconButton
              onClick={handlerShowLess}
              disabled={counter === 3}
              color="primary"
              component="span">
              <RemoveCircleIcon />
            </IconButton>
            <Typography variant="button">users</Typography>
            <IconButton
              onClick={handlerShowMore}
              color="primary"
              component="span">
              <AddCircleIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </AccordionDetails>
  )
}
