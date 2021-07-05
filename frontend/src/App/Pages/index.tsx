import { Grid } from '@material-ui/core'
import React from 'react'
import AnimalList from '../components/AnimalList'
import AnimalRank from '../components/AnimalRank'
import Status from '../components/Status'

interface PagesProps {}

const Pages: React.FC<PagesProps> = () => {
  return (
    <Grid container spacing={4}>
      <Grid
        item
        xs={12}
        sm={8}
        style={{ maxHeight: '100vh', overflowY: 'auto' }}>
        <AnimalList />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Status />
        <AnimalRank />
      </Grid>
    </Grid>
  )
}

export default Pages
