

import { useEffect, useState } from 'react';
import img from '../../assets/images/TourBook Profile (With BG) (1).png'
import PackageCard from '../../components/shared/packageCard';

const Packages = () => {

    const [allPackages, setAllPackages] = useState([])

    useEffect(() => {
        fetch('package.json')
            .then(res => res.json())
            .then(data => setAllPackages(data.packages))
    }, [])
    return (
        <div>
            <div className='w-screen'>
                <img className='w-full h-[85vh]' src={img} alt="" />
            </div>
            <div className='text-center space-y-2 my-8'>
                <h2 className='text-4xl font-bold text-orange-400'>--- Select your favourite District Packages ---</h2>
                <p className='text-gray-600 font-semibold'>Here you can see all of our District wise packages</p>
            </div>
            <div className='mx-2 md:mx-8 grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-8 my-8'>
                {
                    allPackages?.map(item => <PackageCard key={item?.id} item={item}></PackageCard>)
                }
            </div>
        </div>
    );
};

export default Packages;