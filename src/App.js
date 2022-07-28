import React, { useState } from 'react';
import './App.css'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = '993204517237-7ugkv9g11enginni1jruiidpg0ck618h.apps.googleusercontent.com';

function Login() {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const [posts, setPosts] = useState([])
    const onLoginSuccess = (res) => {
        setPosts(res.profileObj)
        setShowloginButton(false);
        setShowlogoutButton(true);
    };
    console.log(posts);

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    return (
        <div>
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}
 <div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="row container d-flex justify-content-center">
<div class="col-xl-6 col-md-12">
          <div class="card user-card-full">
              <div class="row m-l-0 m-r-0">
                  <div class="col-sm-4 bg-c-lite-green user-profile">
                      <div class="card-block text-center text-white">
                          <div class="m-b-25">
                              <img src={posts.imageUrl} class="img-radius" alt="User-Profile-Image"/>
                          </div>
                      </div>
                  </div>
                  <div class="col-sm-8">
                      <div class="card-block">
                          <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                          <div class="row">
                              <div class="col-sm-6">
                                  <p class="m-b-10 f-w-600">Email</p>
                                  <h6 class="text-muted f-w-400">{posts.email}</h6>
                              </div>
                              <div class="col-sm-6">
                                  <p class="m-b-10 f-w-600">Name</p>
                                  <h6 class="text-muted f-w-400">{posts.name}</h6>
                              </div>
                          </div>
                          <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Google Data</h6>
                          <div class="row">
                              <div class="col-sm-6">
                                  <p class="m-b-10 f-w-600">Nick Name</p>
                                  <h6 class="text-muted f-w-400">{posts.givenName}</h6>
                              </div>
                              <div class="col-sm-6">
                                  <p class="m-b-10 f-w-600">Google ID</p>
                                  <h6 class="text-muted f-w-400">{posts.googleId}</h6>
                              </div>
                          </div>
                          <ul class="social-link list-unstyled m-t-40 m-b-10">
                              <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                              <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                              <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
        </div>
          </div>
      </div>
            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }


        </div>
    );
}
export default Login;