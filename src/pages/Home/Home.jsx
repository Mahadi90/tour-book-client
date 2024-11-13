/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from './banner/Banner';
import TrendingNow from './trendingNow/TrendingNow';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <TrendingNow/>
        </div>
    );
};

export default Home;