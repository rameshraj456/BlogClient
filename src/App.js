import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AllPosts from './components/AllPosts';
import Login from './components/Login';
import Header from './components/Header';
import Main from './Main';
import Admin from './components/Admin';
import Profile from './components/Profile';


function App() {
  const router = createBrowserRouter([
    {
      path:'',
      element:<Main/>,
      children:[
        {
          path:'',
          element:<AllPosts/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'profile',
          element:<Profile/>
        }
      ]
    },
    {
      path:'admin',
      element:<Admin/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider  router={router} />
    </div>
  );
}

export default App;
