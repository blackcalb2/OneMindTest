import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export default makeStyles((theme: Theme) =>
  createStyles({
    item: {
      paddingTop: 0,
      paddingBottom: 0
    },
    item__avatar: {
      width: '30px',
      height: '30px',
      background: theme.palette.primary.main
    },
    container__button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
)
