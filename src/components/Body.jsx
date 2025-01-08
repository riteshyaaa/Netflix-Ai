import React from "react";
import{useEffect} from "react"
import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import {auth} from "../utils/firebase"
import { addUser,removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
const Body = () => {
  const dispatch = useDispatch()
 
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
   
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
     
        const {uid,email, displayName,photoURL }= user;
         dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
       
         
        // ...
      } else {
        dispatch(removeUser())
        
        // User is signed out
        // ...
      }
    }, []);
    
  })
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
