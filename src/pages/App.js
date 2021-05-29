import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  submitLogin = (e) => {
    e.preventDefault()
    console.log(this.state.username, this.state.password)
  }

  actHandleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { classes } = this.props
    function Copyright() {
      return (
        <Typography variant='body2' color='textSecondary' align='center'>
          {'Copyright © '} <Link color='inherit' href='#'>MyPelindo</Link>{' '} {new Date().getFullYear()}
        </Typography>
      )
    }
    return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Authentication
          </Typography>
          <form className={classes.form} onSubmit={this.submitLogin} noValidate required>
            <TextField variant='outlined' margin='normal' required fullWidth id='username' label='Username / NIPP' name='username'  value={this.state.username} autoComplete='username' autoFocus onChange={this.actHandleChange} />
            <TextField variant='outlined' margin='normal' required fullWidth name='password' label='Password' type='password' id='password'  value={this.state.password} autoComplete='current-password' onChange={this.actHandleChange} />
            <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' checked={true} />
            <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>Sign In</Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    )
  }
}

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
})

export default withStyles(styles, { withTheme: true })(App)