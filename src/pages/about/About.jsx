// eslint-disable-next-line no-unused-vars
import React from 'react';
import img from '../../assets/images/TourBook Profile (With BG) (1).png'
import StickySocialIcons from '../../components/StickyIcon';

const About = () => {
    return (
        <div>
            <StickySocialIcons></StickySocialIcons>
            <div className='w-screen'>
                <img className='w-full h-[40vh] lg:h-[85vh]' src={img} alt="" />
            </div>

            <div className='mx-2 md:mx-8 my-10'>
                <h3 className='text-4xl font-bold my-4'>About Us</h3>
                <p className='text-justify'>At <b>Tour Book</b>, we believe in creating unforgettable journeys that go beyond the ordinary. With a passion for exploration and a dedication to personalized service, we craft unique travel experiences for adventurers, families, and wanderers alike. Our team of travel experts works closely with local partners around the globe to bring you authentic, carefully curated trips that let you explore the world your way. From breathtaking landscapes to hidden cultural gems, let us turn your travel dreams into memories that last a lifetime. Embark on a journey with us and discover a world of endless possibilities!</p>
                <br /> 
                Cooming soon more..............................
            </div>
        </div>
    );
};

export default About;