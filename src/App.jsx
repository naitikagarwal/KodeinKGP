import './App.css'
import Header from './Elements/header'
import HomePage from './Elements/home-page'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Team from './Elements/team';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Header/><HomePage/></>
    },
    {
      path: "/team",
      element:<><Header/><Team/></>
    }
  ])
  return (
    <>
     
    <RouterProvider router={router}/>
    </>
  )
}

export default App
