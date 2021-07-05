import { Accordion } from '@material-ui/core'
import React, { useCallback, useState } from 'react'
import { AnimalItemDetail } from './AnimalItemDetail'
import { AnimalItemHeader } from './AnimalItemHeader'

interface AnimalCardProps {
  srcAvatar: string
  animalName: string
}

const AnimalCard: React.FC<AnimalCardProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const handleChange = useCallback(() => {
    setIsExpanded((prevState) => !prevState)
  }, [])
  return (
    <Accordion
      expanded={isExpanded}
      onChange={handleChange}
      style={{
        marginBottom: '20px',
        borderRadius: '25px',
        background:
          'linear-gradient(to right top, rgba(255,255,255,0.6),rgba(255,255,255,0.1))'
      }}>
      <AnimalItemHeader {...props} />
      <AnimalItemDetail {...props} showDetail={isExpanded} />
    </Accordion>
  )
}

export default AnimalCard
