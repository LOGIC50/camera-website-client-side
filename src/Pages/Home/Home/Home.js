import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import Banner from '../../Home/Banner/Banner';
import Footer from '../Footer/Footer';
import ImageDrawer from '../ImageDrawer/ImageDrawer';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Banner></Banner>
            <Products></Products>
            <ImageDrawer></ImageDrawer>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;