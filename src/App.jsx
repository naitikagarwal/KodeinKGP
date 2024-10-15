import './App.css'
import Header from './Elements/header'
import HomePage from './Elements/home-page'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Team from './Elements/team';
import Article from './Elements/article';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Header/><HomePage/></>
    },
    {
      path: "/team",
      element:<><Header/><Team/></>
    },
    {
      path: "/article",
      element:<><Header/><Article/></>
    }
  ])
  return (
    <>
     
    <RouterProvider router={router}/>
    </>
  )
}

export default App
