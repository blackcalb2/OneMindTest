import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export default makeStyles((theme: Theme) =>
  createStyles({
    avatarL: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      marginRight: theme.spacing(4)
    },
    title: {
      textTransform: 'capitalize'
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      height: '80px'
    }
  })
)
