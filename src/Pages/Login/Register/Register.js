import React from 'react';
import { Link } from 'react-router-dom';
import LoginPage from '../../../images/login.webp'


const Register = () => {
    return (
        <div className='mt-5'>
           
        <div>
        <h3 >Please Register</h3>
        <div className="container">
            <div className="row align-items-center">
            <div className="col-12 col-md-6">
                    <img className='img-fluid h-100 w-100' src={LoginPage} alt="" />

                </div>
                <div className="col-12 col-md-6">
                    <form>
                        <div class="mb-3">
                            <input
                                type="email"
                                class="form-control"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                required />
                        </div>
                        <div class="mb-3">
                            <input
                                type="password"
                                name="password" 
                                class="form-control"
                                id="password"
                                placeholder="Your Password"
                                required />
                        </div>
                        <div class="mb-3">
                            <input
                                type="password"
                                class="form-control"
                                id="password"
                                name="confirm-password" 
                                placeholder="Re-Type-Password"
                                required />
                        </div>
                        {/* <p style={{color: 'red'}}>{error}</p> */}
                        <div class="mb-3">
                            <button type="submit" class="form-control text-white fw-bold" style={{ background: '#DAA520' }} >SingUp</button>
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