import ProtectedRoute from '@/features/Auth/routes/ProtectedRoute'
import Abilities from '@/features/Character/routes/Abilities'
import Background from '@/features/Character/routes/Background'
import CreateCharacter from '@/features/Character/routes/CreateCharacter'
import EditCharacter from '@/features/Character/routes/EditCharacter'
import Equipment from '@/features/Character/routes/Equipment'
import Home from '@/features/Character/routes/Home'
import MainClass from '@/features/Character/routes/MainClass'
import Next from '@/features/Character/routes/Next'
import PlayCharacter from '@/features/Character/routes/PlayCharacter'
import Species from '@/features/Character/routes/Species'
import { createBrowserRouter } from 'react-router'
import Auth from '../features/Auth/Auth'
import AppLayout from './layouts/AppLayout'
import MainLayout from './layouts/MainLayout'
import Dashboard from './routes/Dashboard'
import Splash from './routes/Splash'

export const router = createBrowserRouter([
  {
    element: <AppLayout />, children: [
      { path: '/', element: <Splash /> },
      { path: '/auth', element: <Auth />, },
      {
        element: <ProtectedRoute><MainLayout /></ProtectedRoute>,
        children: [
          { path: '/dashboard', element: <Dashboard /> },
          {
            path: '/create', element: <CreateCharacter />,
            children: [
              { index: true, element: <Home /> },
              { path: 'class', element: <MainClass /> },
              { path: 'background', element: <Background /> },
              { path: 'species', element: <Species /> },
              { path: 'abilities', element: <Abilities /> },
              { path: 'equipment', element: <Equipment /> },
              { path: 'next', element: <Next /> },
            ]
          },
          {
            path: '/edit', element: <EditCharacter />,
            // Loader here for the selected character to get from database and load into character atom
            children: [
              { index: true, element: <Home /> },
              { path: 'class', element: <MainClass /> },
              { path: 'background', element: <Background /> },
              { path: 'species', element: <Species /> },
              { path: 'abilities', element: <Abilities /> },
              { path: 'equipment', element: <Equipment /> },
              { path: 'next', element: <Next /> },
            ]
          },
          {
            path: '/play', element: <PlayCharacter />,
          }
        ]
      }
    ]
  },
])
