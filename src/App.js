import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main/Main';
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import About from './components/About/About';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element:<Main></Main>,
      children:[
        {
          path: '/',
          loader: () => fetch('tshirt.json'),
          element: <Home></Home>
        },
        {
          path: 'orders',
          element: <Order></Order>
        },
        {
          path: 'about',
          element: <About></About>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
