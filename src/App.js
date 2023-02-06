
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import CrewPage from './pages/CrewPage';
import Destinations from './pages/Destinations';
import HomePage from './pages/HomePage';
import RootLayout from './pages/RootLayout.js';
import TechnologyPage from './pages/TechnologyPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{
      index: true,
      element: <HomePage />
    },
    {
      path: "destinations",
      element: <Destinations />
    },
    {
      path: "crew_page",
      element: <CrewPage />

    },
    {

      path: "technology_page",
      element: <TechnologyPage />
    }

    ]
  },

])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
