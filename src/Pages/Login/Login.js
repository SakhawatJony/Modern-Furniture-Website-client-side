import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginPage from '../../images/login.webp'
import Google from '../../images/Google.png'

const Login = () => {
    return (
        <div className='mt-5'>

        <div>
            <h4 >Please LogIn</h4>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <form>
                            <div class="mb-3">
                                <input
                                    type="email"
                                    name="email"
                                    class="form-control"
                                    id="email"
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
                            {/* <p style={{ color: 'red' }}>{error?.message}</p>
                            {
                                loading && <p>Loading...</p>
                            } */}
                            <div class="mb-3">
                                <button type="submit" class="form-control text-white fw-bold" style={{ background: '#A25B0F' }} >LogIn</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-md-6">
                        <img className='img-fluid h-100 w-100' src={LoginPage} alt="" />

                    </div>
                    <p>
                        New to Modern-Furniture? <Link className='' to="/register">Create an account</Link>
                    </p>
                </div>
            </div>


            <Button
            className='fw-bold'
            
             style={{ background: '#A25B0F', border: 'none' }}>
                  <img style={{ height: '30px' }} src={Google} alt="" /> GoogleSingIn</Button>

        </div>

    </div>
    );
};

export default Login;