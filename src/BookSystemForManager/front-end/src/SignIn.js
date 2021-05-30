import React,{useState} from 'react';
import {useCookies} from 'react-cookie';
import axios from '../node_modules/axios/index';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
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
export default function SignIn(props) {
  const classes = useStyles();
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [login,setLog] = useState({
    ID : '',
    password : ''
  });
  const onChange = (e) => {
  
    const next = {
      ...login,
      [e.target.name] : e.target.value
    }
    console.log(next);
    setLog(next);
  }
  const onSubmit = () => {
      console.log(login);
      axios.post('/manager-logins', login).then(res=>{
        console.log(res);
        if(res.data.isSuccess) {
          setCookie('token', res.data.result.jwt, {maxAge: 3000});
          console.log(cookies.token);
          alert(res.data.message);
          props.history.push('/S');
        }
        else {
          alert(res.data.message);
        }
    }).catch(err => {console.log(err)});
  }
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="ID"
            name="ID"
            autoComplete="email"
            autoFocus
            onChange={onChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={onChange}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {onSubmit}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={8}>
        
      </Box>
    </Container>
  );
}