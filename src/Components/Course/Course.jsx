import PropTypes from 'prop-types';

const Course = ({ course }) => {

    const { cover, title, courseDetails, price, credit } = course;
    return (
        <div className='w-[312px] h-[402px]'>
            <img src={cover} alt="" />
            <h3>{title}</h3>
            <p>{courseDetails}</p>
            <p><span>price: {price}</span><span>credit: {credit}</span></p>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired
}

export default Course;