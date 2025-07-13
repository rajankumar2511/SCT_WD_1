import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: '/about',
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: '/profile/:id',
    element: (
      <div>
        <Navbar />
        <Profile />
      </div>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;