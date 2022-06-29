import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import LoginPage from '../../../images/login.webp'


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value);
    }

    if(user){
        navigate('/');
    }

    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Your two passwords did not match');
            return;
        }
        if(password.length <6){
            setError('Password must be 6 characters or longer');
            return;
        }
        
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='mt-5'>
           
        <div>
        <h3 style={{color:'#6c757d'}} className="fw-bold" >Please Register</h3>
        <div className="container">
            <div className="row align-items-center">
            <div className="col-12 col-md-6">
                    <img className='img-fluid h-100 w-100' src={LoginPage} alt="" />

                </div>
                <div className="col-12 col-md-6">
                    <form onSubmit={handleCreateUser} >
                        <div class="mb-3">
                            <input

                                type="email"
                                class="form-control"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                onBlur={handleEmailBlur}
                                style={{border:'1px solid #A25B0F'}}
                                
                                required />
                        </div>
                        <div class="mb-3">
                            <input
                                type="password"
                                name="password" 
                                class="form-control"
                                id="password"
                                onBlur={handlePasswordBlur}
                                placeholder="Your Password"
                                style={{border:'1px solid #A25B0F'}}
                                required />
                        </div>
                        <div class="mb-3">
                            <input
                                type="password"
                                class="form-control"
                                id="password"
                                name="confirm-password" 
                                placeholder="Re-Type-Password"
                                onBlur={handleConfirmPasswordBlur}
                                style={{border:'1px solid #A25B0F'}}
                                required />
                        </div>
                        {/* <p style={{color: 'red'}}>{error}</p> */}
                        <div class="mb-3">
                            <button type="submit" class="form-control text-white fw-bold" style={{ background: '#6c757d' }} >SingUp</button>
                        </div>
                    </form>
                </div>
                <p>
                Already Have an account?<Link className='' to="/login">logIn</Link>
            </p>
            </div>
        </div>
    </div>
        
    </div>
    );
};

export default Register;