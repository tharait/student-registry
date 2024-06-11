import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './routes/HomePage'
import StudentsLayout from './routes/students/StudentsLayout'
import ErrorPage from './routes/ErrorPage'
import StudentCreatePage from './routes/students/StudentCreatePage'
import StudentUpdatePage from './routes/students/StudentUpdatePage'
import StudentDetailPage from './routes/students/StudentDetailPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/students',
    element: <StudentsLayout />,
    children: [
      {
        path: 'create',
        element: <StudentCreatePage />
      },
      {
        path: 'update/:studentId',
        element: <StudentUpdatePage />
      },
      {
        path: 'detail/:studentId',
        element: <StudentDetailPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
