import { Navigate, RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from "./Layout"
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Projects from './Components/Projects/Projects'
import ReactProject from './Components/ReactProject/ReactProject'
import JavascriptProject from './Components/JavascriptProject/JavascriptProject'

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [{
        path: "/",
        element: <About />
      },
      {
        path: "/projects",
        element: <Projects />,
        children: [{
          index: true, element: <Navigate to="reactProjects" replace /> ,
        },
        {
          path: "reactProjects",
          element: <ReactProject />,
        },
        {
          path: "javascriptProjects",
          element: <JavascriptProject />
        },
      ]
      },
      {
        path: "/contact",
        element: <Contact />
      }
      ]
    }
  ])
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App
