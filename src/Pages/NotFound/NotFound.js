import React from 'react';
import Error from '../../images/notFound.jpg'

const NotFound = () => {
    return (
        <div>
        <div className='mt-5'>
        <h3 className='text-red'>Sorry woring Page Please try Again</h3>
        <img style={{height:'400px',width:'400px'}} className="img-fluid pt-3" src={Error}   alt="" />
    </div>
        
    </div>
    );
};

export default NotFound;