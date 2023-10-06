import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const BottomMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to='/docs'>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-white'>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className={
                      'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                    }
                  >
                    <div className='text-sm font-medium leading-none'>
                      Lorem ipsum
                    </div>
                    <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
                      Lorem ipsum Autem hic cum illum illo facere reiciendis
                      alias
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className={
                      'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                    }
                  >
                    <div className='text-sm font-medium leading-none'>
                      Lorem ipsum
                    </div>
                    <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Autem hic cum
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-white'>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className={
                      'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                    }
                  >
                    <div className='text-sm font-medium leading-none'>
                      Lorem ipsum
                    </div>
                    <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
                      Lorem ipsum Autem hic cum illum illo facere reiciendis
                      alias
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className={
                      'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                    }
                  >
                    <div className='text-sm font-medium leading-none'>
                      Lorem ipsum
                    </div>
                    <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Autem hic cum
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-white'>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className={
                      'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                    }
                  >
                    <div className='text-sm font-medium leading-none'>
                      Lorem ipsum
                    </div>
                    <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
                      Lorem ipsum Autem hic cum illum illo facere reiciendis
                      alias
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className={
                      'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                    }
                  >
                    <div className='text-sm font-medium leading-none'>
                      Lorem ipsum
                    </div>
                    <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Autem hic cum
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to='/docs'>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Search size={14} />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default BottomMenu
