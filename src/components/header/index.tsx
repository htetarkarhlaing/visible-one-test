import BottomMenu from '@/components/header/BottomMenu'
import TopMenu from '@/components/header/TopMenu'

const Header = () => {
  return (
    <div className='fixed top-0 w-full z-50'>
      <div className='relative shadow-sm'>
        <div className='w-full h-10 flex justify-between items-center bg-gray-200 px-20'>
          <div
            aria-label='logo-placeholder'
            className='w-[254px] -ml-[2px] h-full border-2 border-t-0 border-b-0 border-gray-500'
          />
          <TopMenu />
        </div>
        <header className='w-full h-10 flex justify-end items-center bg-white px-20'>
          <BottomMenu />
        </header>
        <div className='absolute top-0 left-20 flex items-center space-x-2 bg-white'>
          <img src='/visible-one.png' alt='logo' width={250} height={50} />
        </div>
      </div>
    </div>
  )
}

export default Header
