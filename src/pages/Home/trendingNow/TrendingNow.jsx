/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PackageCard from '../../../components/shared/packageCard';

const TrendingNow = () => {
    const [trendingPackages,setTrendingpackages] = useState([])

    useEffect(()=> {
        fetch('package.json')
        .then(res => res.json())
        .then(data => {
            const trending = data.packages.filter(pkg => pkg.category === 'Trending Now')
            setTrendingpackages(trending)
        })
    },[])

   
    return (
        <div className='my-10 mx-2 md:mx-8'>
            <div className='text-center space-y-2'>
                <h2 className='text-4xl font-bold text-orange-400'>--- Trending Now ---</h2>
                <p className='text-gray-600 font-semibold'>Here you can see all our trending packages</p>
            </div>
          <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-8 my-8'>
            {
                trendingPackages.map(pkg => <PackageCard

                key={pkg.id}
                trending={pkg}
                ></PackageCard>)
            }
          </div>
        </div>
    );
};

export default TrendingNow;