import './App.css'
import Bookmark from './Components/Bookmark/Bookmark'
import Courses from './Components/Courses/Courses'

function App() {

  return (
    <div>
      <h1 className='text-3xl font-bold text-[#1C1B1B] text-center pb-10'>Course Registration</h1>
      <div className='grid grid-cols-4 gap-5'>
        <div className='col-span-3'><Courses></Courses></div>
        <div><Bookmark></Bookmark></div>
      </div>
    </div>
  )
}

export default App
