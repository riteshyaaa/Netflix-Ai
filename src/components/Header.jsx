import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SUPPORTED_LANGUAGES, { LOGO } from "../utils/constent";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { addtoggleGptSearch } from "../utils/gptSlice";
import {changeLangauge} from "../utils/configLanguage"
const Header = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        Navigate("/Error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        Navigate("/Browse");
      } else {
        dispatch(removeUser());
        Navigate("/");
      }
    });
    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(addtoggleGptSearch());
  };

  const handleLanguage = (e) => {
    dispatch(changeLangauge(e.target.value))
   }
  return (
    <div className="absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44 " src={LOGO} alt="Logo" />
      {user && (
        <div className="flex p-2 ">
          <select className="p-2 m-6 bg-gray-900 text-white text-lg rounded-md" onChange={handleLanguage}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key  ={lang.identifier}value={lang.identifier}>
               
                {lang.name}
              </option>
            ))}
          </select>
          <button
            className="py-2 px-4 mx-4 my-6 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="w-12 h-12  my-4   rounded-lg"
            alt="userIcon"
            src={user?.photoURL}
          />
          <button className="m-2 text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
