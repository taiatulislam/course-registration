import PropTypes from 'prop-types';

const Bookmarks = ({ bookmarks }) => {

    return (
        <div className="bg-white rounded-lg p-4">
            <h3 className="text-lg font-bold text-[#2F80ED] border-b-2 py-3">Credit Hour Remaining hr</h3>
            <h3 className="text-lg font-bold py-4">Course Name: {bookmarks.length}</h3>
            <ol className='list-decimal pl-5 pb-5'>
                {
                    bookmarks.map(bookmark => <li key={bookmark.id}>{bookmark.title}</li>)
                }
            </ol>
            <h3 className="text-md text-[#1C1B1BCC] font-medium border-y-2 py-3">Total Credit Hour: </h3>
            <h3 className="text-md text-[#1C1B1BCC] font-medium py-4">Total Price :</h3>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;