const HeroSection = () => {
  return (
    <div className='relative w-full h-[680px] pt-20'>
      <div className='relative w-full h-full z-10 flex flex-col justify-center items-center text-center text-white px-20 pb-[200px]'>
        <h2
          data-aos='fade-down'
          data-aos-duration='1000'
          className='text-6xl font-light'
        >
          TRIPPRO - AN ECOMMERCE SOLUTION
        </h2>
        <p className='text-md mt-10'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
          consequatur repudiandae error non impedit, voluptatum quo odit
          reiciendis alias. Nobis nostrum est explicabo quas expedita
          praesentium fugit, sapiente veritatis ratione!
        </p>

        <div className='flex mt-10'>
          <div className='flex items-center space-x-2 border-r-2 border-white px-4 last:border-0'>
            <span className='block font-bold text-lg'>Built For:</span>
            <img src='/responsive.svg' alt='built-for' />
          </div>

          <div className='flex items-center space-x-2 border-r-2 border-white px-4 last:border-0'>
            <div className='text-start'>
              <span className='block text-lg'>Technology:</span>
              <span className='block font-bold text-lg'>Wordpress</span>
            </div>
            <img src='/wordpress.svg' alt='built-for' />
          </div>

          <div className='flex items-center space-x-2 border-r-2 border-white px-4 last:border-0'>
            <div className='text-start'>
              <span className='block text-lg'>Industry:</span>
              <span className='block font-bold text-lg'>Ecommerce</span>
            </div>
            <img src='/shopping-cart.svg' alt='built-for' />
          </div>
        </div>
      </div>
      <div className='absolute top-0 left-0 w-full h-full z-0'>
        <img
          src='hero-bg.png'
          alt='Background'
          className='w-full h-full object-cover filter brightness-50 blur-[2px]'
        />
      </div>
      <div className='absolute inset-0 bg-black opacity-20'></div>

      {/* Mock */}
      <div
        data-aos='fade-up'
        data-aos-duration='1000'
        className='absolute -bottom-[35%] w-full h-[680] flex justify-center'
      >
        <div className='relative w-[725px] h-[450px] overflow-hidden'>
          <img
            src='macbook-pro.png'
            className='absolute z-20 w-[725px] h-[450px]'
          />
          <img
            src='hero-laptop-content.png'
            className='absolute z-10 w-[550px] h-[350px] top-[28px] left-[70px]'
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
