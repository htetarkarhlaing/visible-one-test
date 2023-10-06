import { Outlet } from 'react-router-dom'
import Footer from './footer'
import Header from './header'

const Wrapper = () => {
  return (
    <div className='w-full min-h-screen'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Wrapper
