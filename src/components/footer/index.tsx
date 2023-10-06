import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, LinkedIn, Mail, Twitter } from '@/icons'
import { Button } from '../ui/button'
import footerData from './data'

const Footer = () => {
  return (
    <div className='w-full bg-[url("sg-bg.png")] bg-cover bg-center'>
      <div className='w-full px-20 py-10 text-white bg-black bg-opacity-70'>
        <div className='w-full grid grid-cols-4 mb-8'>
          {footerData.map((data, key: React.Key) => {
            return (
              <div key={key} className='col-span-1'>
                <h3 className='uppercase text-xl mb-2 h-10'>{data.label}</h3>
                <ul className='ml-6'>
                  {data.list.map((list, key) => {
                    return (
                      <li key={key} className='list-disc cursor-pointer py-1'>
                        <Link to={list.link}>{list.name}</Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
          <div className='col-span-1'>
            <h3 className='uppercase text-xl mb-2 h-10'>
              Visible One Singapore
            </h3>
            <span className='text-xl font-bold'>+65 6248 0838</span>
            <Link to='/' className='flex items-center space-x-2 mt-2'>
              <Mail />
              <span className='block'>info@visibleone.com</span>
            </Link>
            <p className='mt-2'>
              24 Sin Ming Lane Midview City #07-93. Singapore 573970
            </p>
            <p className='mt-2'>Office Hour: Mon-Fri (9am-6pm)</p>
            <div className='mt-4 flex justify-between'>
              <Button className='bg-[#25A9E0] rounded-none'>Contact Us</Button>
              <Button variant='ghost' className='text-[#25A9E0]'>
                Contact HK Office
              </Button>
            </div>
          </div>
        </div>
        <div className='w-full border-t border-b py-2 flex justify-between'>
          <div className='flex items-center space-x-2'>
            <img src='shopify_partner.png' className='w-[130px] h-[50px]' />
            <img src='paypal.png' className='w-[120px] h-[40px]' />
            <img src='ad-words-certified.png' className='w-[120px] h-[50px]' />
            <img src='google-analytics.png' className='w-[150px] h-[80px]' />
            <img
              src='Google-Street-View-Trusted.png'
              className='w-[150px] h-[80px]'
            />
          </div>
          <div>
            <span className='text-xs'>
              Scribe to our news, tips and guidelines
            </span>
            <div className='space-x-2'>
              <input
                placeholder='123@test.com'
                className='bg-transparent border h-10 w-[300px] pl-2 outline-none ring-0 appearance-none cursor-pointer text-sm text-gray-400'
              />
              <Button className='bg-[#25A9E0] rounded-none'>Submit</Button>
            </div>
          </div>
        </div>
        <div className='mt-4'>
          <div className='flex items-center justify-center mb-2'>
            <Button variant='ghost'>
              <Facebook className='text-4xl' />
            </Button>
            <Button variant='ghost'>
              <Twitter className='text-4xl' />
            </Button>
            <Button variant='ghost'>
              <Instagram className='text-4xl' />
            </Button>
            <Button variant='ghost'>
              <LinkedIn className='text-4xl' />
            </Button>
          </div>
          <div className='flex justify-center'>
            <ul className='flex space-x-8'>
              <li>Shopping T&C</li>
              <li className='list-disc'>Terms & Conditions</li>
              <li className='list-disc'>Privacy Policy</li>
              <li>&copy; 2018 - Visible One</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
