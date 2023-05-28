import React, {useContext}from 'react';
import './Login.css';
import avatar from '../../images/avatar.png';
import fbLogo from '../../images/fb.png';
import {UserContext}from'../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import {auth,googleProvider} from"./firebase.js";
import {createUserWithEmailAndPassword,signInWithPopup,signOut}  from "firebase/auth";
import { useState } from 'react';



function Login() {
  const [admin,setAdmin]=useContext(UserContext);
  const [loggedInUser,setloggedInUser]=useContext(UserContext);
  // console.log(admin);
  // console.log(localStorage.getItem('email'));
  // console.log(localStorage.getItem('password'));
  const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
const signInWithGoogle=async()=>{
  try{
    await signInWithPopup(auth,googleProvider);
    var email=auth?.currentUser?.email;
    setloggedInUser(email);
    console.log(email);
    localStorage.setItem("email",email);
    // localStorage.setItem("name",firstName);

  }
  catch(err){
    console.error(err)
  }
} 


// const signInWithGoogle= () => {
//   firebase.auth().signInWithPopup(provider)
//       .then(result => {
//           var token = result.credential.accessToken;
//           var user = result.user;
//           localStorage.setItem("email",user.email)
//       })
//       .catch(error => {
//           var errorCode = error.code;
//           var errorMessage = error.message;
//           var email = error.email;
//           var credential = error.credential;
//           console.log(errorMessage)

//       });
// }

const logout=async()=>{
  try{
    await signInWithPopup(auth,googleProvider);
  }catch(err){
    console.error(err);
  }
}
  const setEmail=(value)=>{
    const email={
      email:value,
      password:admin.password
    }
    setAdmin(email);
  }
  const setPassword=(value)=>{
    const password={
      email:admin.email,
      password:value
    }
    setAdmin(password);
  }

    
   const handleLogin = (event) => {

    if(admin.email==='absoft570@gmail.com'&&admin.password==='P@ssword570'){
    localStorage.setItem('email',admin.email);
    localStorage.setItem('password',admin.password);
      history.replace(from)
      

  }
  else if(localStorage.getItem('email')==='absoft570@gmail.com'&& localStorage.getItem('password')==='P@ssword570'){
    history.replace(from)
  }
  else{
    const alert={
      email:admin.email,
      password:admin.password,
      message: 'yes'
    }
    setAdmin(alert)
  }
  event.preventDefault()
   }
    return (
        <>
        {/* <Nav></Nav> */}

        <div className="login-container">
         <form class="modal-content animate my-login">
    <div class="imgcontainer">
      <img src={avatar} alt=" " class="avatar" />
    </div>
    <div class="container" >
      <label for="uname"><b>Email</b></label>
      <input type="text" placeholder="Enter your email"  onBlur={event => setEmail(event.target.value)} name="uname" required />
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter your Password"onBlur={event => setPassword(event.target.value)}  name="psw" required />  
      <button type="submit" className='LoginButton' onClick={handleLogin}   >Login</button>
      { admin.message==='yes' &&<p style={{color: 'red'}}>
          your email & password doesn't match
        </p> }
    </div>

     
  </form>


  <div className="d-flex justify-content-center" onClick={signInWithGoogle}>
                    <button className="login-btn text-left" >
                        <img width="30px" src="https://img.icons8.com/color/48/000000/google-logo.png" />
                        <b className="pr-5">Continue with Google</b>
                    </button><br />
                </div>

                <div className="d-flex justify-content-center">
                    <button className="login-btn text-left" >
                        <img width="30px" src={fbLogo} />
                        <b className="pr-5">Continue with Facebook</b>
                    </button>
                </div>
        </div>

        {/* <Footer></Footer> */}

        </>
    )
}

export default Login