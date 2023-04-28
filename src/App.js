import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SignupStep1 from './pages/SignupStep1';
import SignupStep2 from './pages/SignupStep2';

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
    },
    {
      path: "/signupstep2",
      element: <SignupStep2 />,
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
