import { useState } from 'react'
import './App.css'
import Bookmarks from './Components/Bookmark/Bookmarks'
import Courses from './Components/Courses/Courses'

function App() {

  const [bookmarks, setBookmarks] = useState([])

  const handleSelect = course => {
    const isAvailable = bookmarks.find(bookmark => bookmark.id === course.id)
    if (isAvailable) {
      return alert('Already selected')
    }
    else {
      return setBookmarks([...bookmarks, course]);
    }

  }

  return (
    <div>
      <h1 className='text-3xl font-bold text-[#1C1B1B] text-center pb-10'>Course Registration</h1>
      <div className='grid grid-cols-4 gap-5'>
        <div className='col-span-3'><Courses handleSelect={handleSelect}></Courses></div>
        <div className='col-span-1'><Bookmarks bookmarks={bookmarks}></Bookmarks></div>
      </div>
    </div>
  )
}

export default App
