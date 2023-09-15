import { useState } from 'react'
import './App.css'
import Bookmarks from './Components/Bookmark/Bookmarks'
import Courses from './Components/Courses/Courses'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [creditAvailable, setCreditAvailable] = useState(0)
  const [creditRemaining, setCreditRemaining] = useState(20)
  const [price, setPrice] = useState(0)

  const handleSelect = course => {
    const isAvailable = bookmarks.find(bookmark => bookmark.id === course.id)

    if (creditAvailable + course.credit > 20) {
      return toast.error("Credit can not be taken more than 20!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }
    else if (isAvailable) {
      return toast.error("Course already added!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }
    else {
      setBookmarks([...bookmarks, course]);
      setCreditAvailable(creditAvailable + course.credit)
      setCreditRemaining(creditRemaining - course.credit)
      setPrice(price + course.price)
      return toast.success('Course successfully added!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

  }

  return (
    <div className='py-7 px-5 lg:px-16'>
      <h1 className='text-3xl font-bold text-[#1C1B1B] text-center pb-10'>Course Registration</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
        <div className='md:col-span-1 lg:col-span-3'><Courses handleSelect={handleSelect}></Courses></div>
        <div className='col-span-1'><Bookmarks bookmarks={bookmarks} creditAvailable={creditAvailable} creditRemaining={creditRemaining} price={price}></Bookmarks></div>
      </div>
      <ToastContainer position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
    </div >
  )
}

export default App
