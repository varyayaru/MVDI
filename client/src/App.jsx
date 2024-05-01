import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Root from "./Root";
import ProtectedRoute from "./components/hoc/ProtectedRoute";
import AuthPage from "./components/pages/AuthPage";
import { useEffect, useState } from "react";
import axiosInstance, { setAccessToken } from "../axiosInstance";

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
  // const user = null;
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: '/auth',
          element: <AuthPage loginHandler={loginHandler} signupHandler={signupHandler}/>,
        },
        {
          element: <ProtectedRoute isAllowed={user} redirectPath = '/auth'/>,
          children: [
            {
               path: '/',
               element: <h1>aaa</h1> 
              }
          ],
        },
        // {
        //   path: "/about",
        //   element: <AboutPage />,
        // },
        // {
        //   path: "/sweatshirts",
        //   element: <SweatshirtPage />,
        // },
        // {
        //   path: "/tshirts",
        //   element: <TshirtPage />,
        // },
        // {
        //   path: "/pants",
        //   element: <PantsPage />,
        // },
        // {
        //   path: "/bags",
        //   element: <BagPage />,
        // },
        // {
        //   path: "/sweaters",
        //   element: <SweaterPage />,
        // },
       
      ],
    },

  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
