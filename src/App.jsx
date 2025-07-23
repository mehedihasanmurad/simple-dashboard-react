import './App.css'
import Navbar from './components/Navbar/Navbar'
import SideBar from './components/SideBar/SideBar'

function App() {
  
  return (
    <>
      <div className='flex gap-6'>
        <div className='border border-slate-100 shadow-xl px-3 mt-3 w-[19%]'>
          <SideBar></SideBar>
        </div>
        <div className='border border-slate-100 shadow-xl px-3 mt-3 w-[79%]'>
          <Navbar></Navbar>
        </div>
      </div>
      
    </>
  )
}

export default App
