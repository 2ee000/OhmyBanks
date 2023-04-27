import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SignupStep1 from './pages/SignupStep1';

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
      path: "/signupstep1",
      element: <SignupStep1 />,
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
