import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useLoaderData } from 'react-router-dom';
import DesCard from './DesCard';




const Destinaton = () => {

    const data = useLoaderData()
    const allPackages = data.packages;

    const districts = [`Cox's Bazar`, 'Khulna', 'Rangamati', 'Moulvibazar', 'Naogaon', 'Patuakhali', 'Bandarban', 'Rajshahi', 'Bagerhat', 'Chattogram', 'Munshiganj', 'Comilla', 'Sylhet', 'Dhaka', 'Barisal']

    let allDisPackages = []
    for (const district of districts) {
        const disPackages = allPackages?.find(item => item.district === district)
        allDisPackages.push(disPackages)
    }
    // console.log(allDisPackages)

    // console.log(districts)

    return (
        <div className='my-20'>
            <div className='text-center space-y-2'>
                <h2 className='text-4xl font-bold text-orange-400'>--- Select your Destination ---</h2>
                <p className='text-gray-600 font-semibold'>Here you can see all of our District wise packages</p>
            </div>
            <div className='mx-2 md:mx-8 mt-16'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={100}
                    navigation
                    breakpoints={{
                        // Small screens (e.g., mobile)
                        0: {
                          slidesPerView: 3,
                        },
                        668: {
                            slidesPerView: 4,
                        },
                        990: {
                            slidesPerView: 6,
                        },
                        // Large screens (e.g., desktop)
                        1238: {
                          slidesPerView: 8,
                        },
                      }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {
                        allDisPackages?.map(item => <SwiperSlide key={item?.id}>
                            <DesCard item={item}></DesCard>
                        </SwiperSlide>)
                    }
                </Swiper>

            </div>
        </div>
    );
};

export default Destinaton;