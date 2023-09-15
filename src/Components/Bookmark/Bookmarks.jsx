import PropTypes from 'prop-types';

const Bookmarks = ({ bookmarks, creditAvailable, creditRemaining, price }) => {

    return (
        <div className="bg-white rounded-lg p-4">
            <h3 className="text-lg font-bold text-[#2F80ED] border-b-2 py-3">Credit Hour Remaining {creditRemaining} hr</h3>
            <h3 className="text-lg font-bold py-4">Course Name</h3>
            <ol className='list-decimal pl-5 pb-5'>
                {
                    bookmarks.map(bookmark => <li key={bookmark.id} className='text-[#1C1B1BCC]'>{bookmark.title}</li>)
                }
            </ol>
            <h3 className="text-md text-[#1c1b1bb5] font-semibold border-y-2 py-3">Total Credit Hour: {creditAvailable}</h3>
            <h3 className="text-md text-[#1c1b1bb5] font-semibold py-4">Total Price: {price} USD</h3>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    creditAvailable: PropTypes.number,
    creditRemaining: PropTypes.number,
    price: PropTypes.number
}

export default Bookmarks;