/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from './banner/Banner';
import TrendingNow from './trendingNow/TrendingNow';
import Destinaton from './destination/Destinaton';

import StickySocialIcons from '../../components/StickyIcon';

const Home = () => {
    return (
        <div>
          <StickySocialIcons></StickySocialIcons>
           <Banner></Banner>
           <Destinaton/>
           <TrendingNow/>
        </div>
    );
};

export default Home;