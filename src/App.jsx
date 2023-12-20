import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import ShoppingContainer from './components/ShoppingContainer'
import CheckOut from './components/CheckOut'
import ItemDetails from './components/ItemDetails'
import { useSelector, useDispatch } from 'react-redux'
import { total } from './components/State/Slice/CardSlice'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

const Layout = () => {
  const { isOpen } = useSelector((state) => state.checkout)
  return(
    <div>
      <Navbar />
      {isOpen && <CheckOut />}
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <ShoppingContainer />,
      },
      {
        path: '/ItemDetails/:id',
        element: <ItemDetails />,
      }
    ]
  }
])

const App = () => {
  const { cardItems } = useSelector((state) => state.card)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(total())
  }, [cardItems])

  return (
    <div>
      <RouterProvider router={router}> 
        <Layout />
      </RouterProvider>
    </div>
  )
}

export default App