import { Button } from '@/components/ui/button'

const Projects = () => {
  return (
    <div className='w-full h-screen px-20 mt-[300px] items-center grid grid-cols-2 gap-10'>
      <div data-aos='fade' data-aos-duration='500'>
        <div>
          <h3 className='text-4xl font-bold uppercase'>
            About <span className='text-[#25A9E0]'>Trippro</span>
          </h3>
          <div className='w-[150px] h-[3px] bg-[#25A9E0] mt-3' />
        </div>

        <p className='my-5'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae optio
          quis labore dolore mollitia culpa et similique. Quisquam beatae iste
          dolorem, inventore eligendi, deserunt possimus aperiam neque impedit
          dolor maiores. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Beatae optio quis labore dolore mollitia culpa et similique.
          Quisquam beatae iste dolorem, inventore eligendi, deserunt possimus
          aperiam neque impedit dolor maiores.
        </p>

        <Button className='uppercase text-xl font-semibold p-9 rounded-full bg-gradient-to-r from-[#2EC5E8] to-[#39E6AD] text-white'>
          Tour To Website
        </Button>
      </div>

      <div className='relative' data-aos='fade-left' data-aos-duration='500'>
        <img src='red-cycle.png' />
        <img
          src='tablet-view.png'
          className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-auto h-[450px]'
        />
      </div>
    </div>
  )
}

export default Projects
