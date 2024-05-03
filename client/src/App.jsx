import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Root from "./Root";
import ProtectedRoute from "./components/hoc/ProtectedRoute";
import AuthPage from "./components/pages/AuthPage";
import { useEffect, useState } from "react";
import axiosInstance, { setAccessToken } from "../axiosInstance";
import Progress from "./components/pages/Progress";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    axiosInstance('/tokens/refresh').then((res) => {
      const { user: newUser, accessToken } = res.data;
      setUser(newUser);
      setAccessToken(accessToken);
    }).catch(() => {
      setUser(null);
    });
  }, []);

  const addWordHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const res = await axiosInstance.post('/words', formData);
    // setWords((prev) => [res.data, ...prev]);
  };

  const loginHandler = async (event)=>{
    event.preventDefault()
    const dataForm= Object.fromEntries(new FormData(event.target) )
    const res = await axiosInstance.post('/auth/login', dataForm);
    const { data } = res;
    setUser(data.user);
    setAccessToken(data.accessToken);
  }
  const logoutHandler = async () => {
    await axiosInstance('/auth/logout');
    setUser(null);
    setAccessToken('');
  };
  const signupHandler = async (formData) => {
    const res = await axiosInstance.post('/auth/signup', formData);
    const { data } = res;
    setUser(data.user);
    setAccessToken(data.accessToken);
  };
 
  const router = createBrowserRouter([
    {
      element: <Root user={user} logoutHandler={logoutHandler} />,
      children: [
        {
          
          element: <ProtectedRoute isAllowed={!user} redirectPath = '/'/>,
          children:[
            {
              path: '/auth',
              element: <AuthPage loginHandler={loginHandler} signupHandler={signupHandler}/>
            }
          ],
        },
        {
          element: <ProtectedRoute isAllowed={user} redirectPath = '/auth'/>,
          children: [
            {
               path: '/',
               element: <h1>Илья</h1> 
                
              },
              {
                path: '/process',
                element: <h1>Дима</h1>
              },
              {
                path:'/cards',
                element: <h1>Миня</h1>
              }

          ],
        },
<<<<<<< HEAD
        {
          path: '/progress',
          element: < Progress />
        }
=======
        {}
>>>>>>> main
       
      ],

    },

  ]);
  if(user === undefined) return <h1>Loading...</h1>

  return (
    <RouterProvider router={router} />
  )
}

export default App;
