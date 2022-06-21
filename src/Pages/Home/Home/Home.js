import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Furniture from '../Furniture/Furniture';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Furniture></Furniture>
            <About></About>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;