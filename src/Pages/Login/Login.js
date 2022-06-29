import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoginPage from '../../images/login.webp'
import Google from '../../images/Google.png'
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';
    
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then( () =>{
            navigate(from, {replace: true})
        })
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
        console.log(signInWithEmailAndPassword)
    }

   
  

    return (
        <div className='mt-5'>

        <div>
            <h4 style={{color:'#6c757d'}} className='fw-bold' >Please LogIn</h4>
            <div className="container">
                <div className="row align-items-center">
                <div className="col-12 col-md-6">
                        <img className='img-fluid h-100 w-100' src={LoginPage} alt="" />

                    </div>
                    <div className="col-12 col-md-6">
                        <form onSubmit={handleUserSignIn}>
                            <div class="mb-3">
                                <input
                                    type="email"
                                    name="email"
                                    class="form-control"
                                    id="email"
                                    onBlur={handleEmailBlur}
                                    placeholder="Your Email"
                                    style={{border:'1px solid #A25B0F'}}
                                    required />
                            </div>
                            <div class="mb-3">
                                <input
                                    type="password"
                                    name="password"
                                    class="form-control"
                                    id="password"
                                    onSubmit={handlePasswordBlur}
                                    style={{border:'1px solid #A25B0F'}}
                                    placeholder="Your Password"
                                    required />
                            </div>
                            <p style={{ color: 'red' }}>{error?.message}</p>
                            {
                                loading && <p>Loading...</p>
                            }
                            <div class="mb-3">
                                <button type="submit" class="form-control text-white fw-bold" style={{ background: '#6c757d' }} >LogIn</button>
                            </div>
                        </form>
                    </div>
                    
                    <p>
                        New to Modern-Furniture? <Link className='' to="/register">Create an account</Link>
                    </p>
                </div>
            </div>


            <Button
            onClick={handleGoogleSignIn}
            className='fw-bold'
            
            
             style={{ background: '#6c757d', border: 'none' }}>
                  <img style={{ height: '30px' }} src={Google} alt="" /> GoogleSingIn</Button>

        </div>

    </div>
    );
};

export default Login;