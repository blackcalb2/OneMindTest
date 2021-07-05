import { Box, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import useAxios from '../../hooks/useAxios'
import { UserStats } from '../../types/UserStats'
import styles from './index.style'

export const Status: React.FC = () => {
  const classes = styles()
  const { data: status, error, loading, fetchData } = useAxios<UserStats>()

  useEffect(() => {
    const url = '/users'
    fetchData(url)
  }, [fetchData])

  if (loading) return <h1>Loading...</h1>

  if (error || !status) return <h1>Error...</h1>
  const { activeUsers, totalUsers } = status
  return (
    <Box className={classes.root}>
      <Typography>
        User active : <strong>{activeUsers}</strong>
      </Typography>

      <Typography>
        Total users : <strong>{totalUsers}</strong>
      </Typography>
    </Box>
  )
}

export default Status
