import { Container } from '@material-ui/core'
import React from 'react'
import Pages from './Pages'
import Root from './Root'

function App() {
  return (
    <Root>
      <Container maxWidth="lg" style={{ paddingTop: '50px' }}>
        <Pages />
      </Container>
    </Root>
  )
}

export default App
