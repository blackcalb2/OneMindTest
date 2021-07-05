import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const theme = createMuiTheme({
  palette: {
    background: {
      default: 'white'
    }
  }
})

const Theme: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          minWidth: '100vw',
          minHeight: '100vh',
          width: '100%',
          height: '100%',
          background:
            'radial-gradient( circle farthest-corner at 10% 20%,  rgba(161,255,255,1) 11.3%, rgba(6,255,255,1) 41.2%, rgba(0,216,216,1) 77.8% )'
        }}>
        <CssBaseline />
        {children}
      </div>
    </ThemeProvider>
  )
}

export default Theme
