import React from "react";
import { auth } from "../utils/firebase";
import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

const Body = () => {
  // const dispatch = useDispatch()

 
  // Using BrowserRouter to navigate between pages.
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      
    },
    {
      path: "/Browse",
      element: <Browse />,
    },
  ]);
   
  
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
