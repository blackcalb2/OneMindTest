import React from 'react'
import { AccordionSummary, Avatar, Box, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import style from './AnimalItemHeader.style'

interface AnimalItemHeaderProps {
  srcAvatar: string
  animalName: string
}

export const AnimalItemHeader: React.FC<AnimalItemHeaderProps> = ({
  animalName,
  srcAvatar
}) => {
  const classes = style()
  return (
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls={`${animalName}-content`}
      id={`${animalName}-header`}>
      <Box className={classes.container}>
        <Avatar alt={animalName} src={srcAvatar} className={classes.avatarL} />
        <Typography variant="h4" className={classes.title}>
          {animalName}
        </Typography>
      </Box>
    </AccordionSummary>
  )
}
