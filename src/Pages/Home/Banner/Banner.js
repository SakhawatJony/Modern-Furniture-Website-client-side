import React from 'react';
import { Button } from 'react-bootstrap';
import homeBanner from '../../../images/Bg.jpg'


const Banner = () => {

 
    
    return (
        <div style={{background:'#F1EBEA',height:'500px'}}>
        <div className="container pt-5 ">
            <div className="row  d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-6">
            
            <div className='text-black text-start'>
                 <div>
                 <h2 className='fw-bold pb-1'>Best Modern <span style={{color:'#A25B0F '}}>Furniture Collection</span></h2>
                  <p className='pt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt doloribus odit facilis eum officiis ea!!!!</p>
                  <Button className='border-0 fw-bold mt-2' style={{background:'#A25B0F'}} size="sm">
          Stock Now
        </Button>
                 </div>
                 </div>

                </div>
                <div className="col-12 col-md-6">
                <img src={homeBanner} class="img-fluid" alt="..." />

                </div>
            </div>
        </div>
    </div>
 
    );
};

export default Banner;