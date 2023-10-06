import { Link } from 'react-router-dom'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Doc, Down, Mail, Phone, Whatsapp } from '../../icons'
import { Button } from '../ui/button'

const TopMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to='tel:62480238'>
            <Button variant='ghost' size='sm'>
              <Phone className='text-[#25A9E0] mr-1 text-[16px]' />
              <span className='text-[12px]'>62480238</span>
            </Button>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to='tel:62480238'>
            <Button variant='ghost' size='sm'>
              <Whatsapp className='text-[#25A9E0] mr-1 text-[16px]' />
              <span className='text-[12px]'>84849948</span>
            </Button>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to='tel:62480238'>
            <Button variant='ghost' size='sm'>
              <Mail className='text-[#25A9E0] mr-1 text-[16px]' />
              <span className='text-[12px]'>info@visibleone.com</span>
            </Button>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to='/'>
            <Button
              className='bg-[#37B349] text-white h-6 rounded-sm text-[12px]'
              size='sm'
            >
              <Doc className='text-white mr-1 text-[12px]' />
              <span className='text-[12px]'>Quote</span>
            </Button>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to='/'>
            <Button
              variant='outline'
              className='border-[#25A9E0] text-[#25A9E0] h-6 rounded-sm text-[12px]'
              size='sm'
            >
              <Down className='text-[#25A9E0] mr-1 text-[12px]' />
              <span className='text-[12px]'>SG EN</span>
            </Button>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default TopMenu
