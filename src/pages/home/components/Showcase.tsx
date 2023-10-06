import { useState } from 'react'
import { Left, Right } from '@/icons'
import { Button } from '@/components/ui/button'

const Showcase = () => {
  const [isDesktop, setIsDesktop] = useState(true)

  return (
    <div className='grid grid-cols-2'>
      <div
        className='w-full h-[400px] z-10'
        data-aos='fade-right'
        data-aos-duration='1000'
      >
        <img
          src={isDesktop ? 'desktop.png' : 'mobile.png'}
          className='w-full h-[400px]'
        />
      </div>
      <div className='h-[400px] -ml-[900px] px-20 pl-[930px] bg-gradient-to-l from-[#2EC5E8] to-[#39E6AD] flex flex-col justify-around'>
        <h3 className='text-2xl text-white font-bold pt-10'>
          Their Old Website & Problems
        </h3>

        <ul className='flex flex-col space-y-4'>
          <li className='flex items-start space-x-4'>
            <Button size='icon' variant='ghost'>
              <img
                src='arrow-pointing-to-right.svg'
                className='w-[20px] h-[20px]'
              />
            </Button>
            <p className='block text-white'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur quas debitis atque, obcaecati nobis maiores aut
            </p>
          </li>
          <li className='flex items-start space-x-4'>
            <Button size='icon' variant='ghost'>
              <img
                src='arrow-pointing-to-right.svg'
                className='w-[20px] h-[20px]'
              />
            </Button>
            <p className='block text-white'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur quas debitis atque, obcaecati nobis maiores aut
            </p>
          </li>
          <li className='flex items-start space-x-4'>
            <Button size='icon' variant='ghost'>
              <img
                src='arrow-pointing-to-right.svg'
                className='w-[20px] h-[20px]'
              />
            </Button>
            <p className='block text-white'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur quas debitis atque, obcaecati nobis maiores aut
            </p>
          </li>
        </ul>

        <div>
          <Button variant='ghost' size='icon'>
            <Left className='text-2xl text-white' />
          </Button>
          <Button variant='ghost' size='icon'>
            <Right className='text-2xl text-white' />
          </Button>
        </div>

        <Button
          className='w-[130px] font-semibold p-4 border border-white rounded-full bg-gradient-to-r from-[#2EC5E8] to-[#39E6AD] text-white flex relative justify-center'
          onClick={() => setIsDesktop(!isDesktop)}
        >
          <span
            className={`absolute w-5 h-5 rounded-full bg-white ${
              isDesktop ? 'right-[10px]' : 'left-[10px]'
            }`}
          />
          <span>{isDesktop ? 'Desktop' : 'Mobile'}</span>
        </Button>
      </div>
    </div>
  )
}

export default Showcase
