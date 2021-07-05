import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const style = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: '20px',
      borderRadius: '25px',
      paddingLeft: '25px',
      paddingTop: '20px',
      background:
        'linear-gradient(to right top, rgba(255,255,255,0.6),rgba(255,255,255,0.1))'
    }
  })
)

export default style
