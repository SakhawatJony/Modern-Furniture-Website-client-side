import React from 'react';

const Footer = () => {
    return (
        <div className='mt-5 h-100' style={{background:'#F1EBEA',height:''}}>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4 ">
                    <div className="col">
                        <ul className='list-unstyled text-black'>
                            <h5>Company Information</h5>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Review</li>
                            
                        </ul>
                    </div>
                    <div className="col">
                        <ul className='list-unstyled text-black'>
                            <h5>Company Helpful Links</h5>
                            <li>Services</li>
                            <li>Supports</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className='list-unstyled text-black'>
                            <h5>Company Address!!!!</h5>
                            <li>Address: Feni Bangladesh</li>
                            <li>Email: funiture@gmail.com</li>
                            <li>Phone: ++++888*****</li>
                        </ul>
                    </div>

                </div>
                <div className='text-blacks text-center'>
                <hr />
                <p className='pb-3 text-bold'>copyRight@modernfurniture2022</p>
                </div>
            </div>

            
        </div>
    );
};

export default Footer;