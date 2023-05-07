import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Test from './pages/Test';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/test",
      element: <Test />,
    },
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
