import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import apiCaller from '../utils/apiCaller'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

 export default function SignIn (){
  
  const [txtEmail,settxtEmail] = useState("");
  const [txtPassword,settxtPassword] = useState("");


 const onChangeEmail = (e) =>{
   settxtEmail(e.target.value)
 }
 const onChangePass = (e) =>{
 
  settxtPassword(e.target.value)

}
 const onLogin = (e)=>{
    e.preventDefault()
    apiCaller({txtEmail,txtPassword}).then(res=>{
      console.log(res.data)
    })
    // console.log({txtEmail,txtPassword})
 }



const classes = useStyles();


    return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={onLogin}  noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="txtEmail"
            autoComplete="email"
            autoFocus
            value = {txtEmail}
            onChange = {onChangeEmail}
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="txtPassword"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value = {txtPassword}
            onChange = {onChangePass}
            
          />
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/register" variant="body2">
                Don $apos;t have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      
    </Container>
  );

}