

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

    // for pagination
    const cardsPerPage = 6; // Set number of cards per page
    const totalPages = Math.ceil(allPackages.length / cardsPerPage); // Calculate total number of pages
    const [currentPage, setCurrentPage] = useState(1); // Track the current page

    // Get the cards for the current page
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = allPackages.slice(indexOfFirstCard, indexOfLastCard);

    // Handle page change
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div>
            <div className='w-screen'>
                <img className='w-full h-[40vh] lg:h-[85vh]' src={img} alt="" />
            </div>
            <div className='text-center space-y-2 my-8'>
                <h2 className='text-2xl md:text-4xl font-bold text-orange-400'>--- Select your favourite Package ---</h2>
                <p className='text-gray-600 font-semibold'>Here you can see all of packages</p>
            </div>
            <div className='mx-2 md:mx-8 grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-8 my-8'>
                {
                    currentCards?.map(item => <PackageCard key={item?.id} item={item}></PackageCard>)
                }
            </div>
            {/* Pagination Controls */}
            <div className="flex justify-center my-4">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-orange-500 text-white rounded-l"
                >
                    Prev
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        className={`px-4 mx-1 py-2 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-orange-500 text-white rounded-r"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Packages;