import { Suspense, lazy, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import AOS from 'aos'
import NotFound from '@/pages/errors/NotFound'
import ServerError from '@/pages/errors/ServerError'
// helper page imports
import Loading from '@/pages/loading'
import Wrapper from '@/components/Wrapper'

// main page imports
const Home = lazy(() => import('@/pages/home'))

const Router = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/' element={<Wrapper />}>
          <Route path='/' element={<Home />} errorElement={<ServerError />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default Router
