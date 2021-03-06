import React from 'react';
//import NavBar from "./NavBar";
import { connect } from 'react-redux';
//import './../css/LoginForm.css';
import { navigateContactPage, navigateAboutPage, navigateHomePage, openLoginForm, closeLoginForm, openSignupForm, closeSignupForm } from '../redux';
//import Popup from 'reactjs-popup';

import Dialog from "@material-ui/core/Dialog";
// import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
// import promoralogo from '.../..'
// import promoralogo from '../../public/images/';

// import { makeStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function LoginForm(props) {

  const [state, setState] = React.useState({

    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (

    <Dialog open={props.showLoginForm} onClose={props.closeLoginForm} style={{ width: "100%" }}>
      <DialogTitle>{"LOG IN"}</DialogTitle>
      <DialogContent style={{ marginLeft: "70px", width: "70%", height: "400px" }}>
        <Avatar alt="promoralogo" src="../../images/Prolog.jpeg" style={{ marginLeft: "100px", height: "150px", width: "150px" }} />

        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Username"
          type="text"
          fullWidth
          variant="outlined"
        />

        {/* <TextField
                
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="outlined"
            />  */}

        <TextField
          margin="dense"
          id="password"
          label="Password"
          type="text"
          fullWidth
          variant="outlined"
        />
        <FormControlLabel
          control={
            <Checkbox
              // checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
          label="Remember Me"
        />
        <p style={{float: "right", position:"relative", fontStyle:"italic", color:"black", paddingTop: "8px",}}>Forgot Password?</p>

        <Button variant="contained" color="primary" margin="dense" style={{ marginTop: "20px", width: "100%" }}>
          LOG IN
        </Button>
        <span>Not Registered? <a href='#' onClick={props.openSignupForm}>Create an account</a></span>

        {/* <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          /> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={props.closeLoginForm}
          color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog >

  )

}
const mapStateToProps = state => {
  return {
    page: state.page,
    showLoginForm: state.showLoginForm,
    showSignupForm: state.showSignupForm
  }
}
const mapDespatchToProps = dispatch => {
  return {
    navigateHomePage: () => dispatch(navigateHomePage()),
    navigateContactPage: () => dispatch(navigateContactPage()),
    navigateAboutPage: () => dispatch(navigateAboutPage()),
    openLoginForm: () => dispatch(openLoginForm()),
    closeLoginForm: () => dispatch(closeLoginForm()),
    openSignupForm: () => dispatch(openSignupForm()),
    closeSignupForm: () => dispatch(closeSignupForm())
  }
}

export default connect
  (mapStateToProps, mapDespatchToProps)(LoginForm)


