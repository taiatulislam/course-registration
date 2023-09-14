import PropTypes from 'prop-types';
import { FiDollarSign } from 'react-icons/fi';
import { BsBook } from 'react-icons/bs';

const Course = ({ course }) => {

    const { cover, title, courseDetails, price, credit } = course;
    return (
        <div className='rounded-lg bg-white p-4'>
            <img src={cover} alt={title} className='w-screen h-[150px] mx-auto' />
            <h3 className='text-xl text-[#1C1B1B] font-semibold mt-4'>{title}</h3>
            <p className='text-md text-justify text-[#1c1b1ba5] mt-2'>{courseDetails}</p>
            <div className='flex justify-between mt-3 mb-5'>
                <div className='flex gap-2 items-center'>
                    <p className='text-xl'><FiDollarSign></FiDollarSign></p>
                    <p>price: {price}</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <p className='text-xl'><BsBook></BsBook></p>
                    <p>credit: {credit}hr</p>
                </div>
            </div>
            <button className='bg-[#2F80ED] text-white py-2 w-full rounded-lg items-end'>Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired
}

export default Course;