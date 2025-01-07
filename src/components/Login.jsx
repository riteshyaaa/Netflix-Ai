import React from 'react'
import Header from './Header'
import { checkValidDate } from '../utils/validate'
import { useState,useRef } from 'react'
import { auth} from '../utils/auth'
import { createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true)
 const[errorMessage, seterrorMessage ] = useState(null)
//For reference we use the useRef hook
  const email = useRef(null)
  const password = useRef(null)
  

  const handleBtnClick = () => {
    //vaildation condition 
     const message = checkValidDate(email.current.value, password.current.value)
     seterrorMessage(message)
       if(message) return;

      // sign up 
      if(!isSignIn){
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

   seterrorMessage(errorMessage+"-"+errorCode)
   
  });
  }
  else {
     //sign In

  }
  const toggleSignIn = () => {
    setisSignIn(!isSignIn)
  }
  return (
    <div >
       <Header/>
       <div className='absolute'>
               <img src=" https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
               alt='BG_Img'/> 
               </div>
              
        <form 
              onSubmit={(e) => {e.preventDefault()}}
              className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className='font-bold text-3xl text-white'>
          {isSignIn? "Sign In" : "Sign Up"}
          </h1>
           { !isSignIn && (
            <input
           
             type="text"
            placeholder='Enter Full Name' 
             className="p-4 my-4 w-full bg-gray-700"
             />)}
            <input
            ref={email}
             type="text"
             placeholder=' Enter Email' 
             className="p-4 my-4 w-full bg-gray-700"
             />
            <input
            ref={password} 
            type="password" 
            placeholder=' Enter Password'
            className="p-4 my-4 w-full bg-gray-700" />
            <p className='text-red-500 text-lg p-2 m-2'>
               { errorMessage}
               </p>
            <button type="Sign In"
             className="p-4 my-6 bg-red-700 w-full rounded-lg"
              onClick={handleBtnClick}>
              {isSignIn? "Sign In" : "Sign up"}
             </button>
             <p className="py-4 cursor-pointer" onClick={toggleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
             
        </form>
    </div>
  )
}
}
export default Login