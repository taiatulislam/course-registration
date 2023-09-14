import { useState } from 'react'
import './App.css'
import Bookmarks from './Components/Bookmark/Bookmarks'
import Courses from './Components/Courses/Courses'

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [creditAvailable, setCreditAvailable] = useState(0)
  const [price, setPrice] = useState(0)

  const handleSelect = course => {
    const isAvailable = bookmarks.find(bookmark => bookmark.id === course.id)

    if (creditAvailable + course.credit > 20) {
      return alert('Credit can not be taken more than 20');
    }
    else if (isAvailable) {
      return alert('Already selected');
    }
    else {
      setBookmarks([...bookmarks, course]);
      setCreditAvailable(creditAvailable + course.credit)
      return setPrice(price + course.price)
    }

  }

  return (
    <div>
      <h1 className='text-3xl font-bold text-[#1C1B1B] text-center pb-10'>Course Registration</h1>
      <div className='grid grid-cols-4 gap-5'>
        <div className='col-span-3'><Courses handleSelect={handleSelect}></Courses></div>
        <div className='col-span-1'><Bookmarks bookmarks={bookmarks} creditAvailable={creditAvailable} price={price}></Bookmarks></div>
      </div>
    </div>
  )
}

export default App
