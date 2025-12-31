import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from '../utils/gptSlice'
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  const handleSignOut =  () => {
    signOut(auth)
    .then(() => {})
    .catch((error) => {
  navigate('/error')
});
  }

  const handleGptSearchClick = () => {

    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))

  }

      useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName, photoURL} = user;
          dispatch(addUser({uid:uid, email:email, displayName: displayName, photoURL:photoURL}));
          navigate('/browse')
        } else {
          dispatch(removeUser());
          navigate('/');
        }
});

  return () => unsubscribe();
    }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-2 bg-gradient-to-b from-black/95 via-black/60 to-transparent backdrop-blur-md border-b border-black/20">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Logo */}
        <img 
          src={LOGO}
          alt="Netflix Logo"
          className="w-32 md:w-44 h-10 md:h-12 object-contain hover:brightness-110 transition-all duration-200 cursor-pointer"
        />
        
        {/* User Profile - Right Side */}
        {user && (<div className="flex items-center space-x-2">
          {showGptSearch && (<select className="px-4 py-1.5 bg-red-600/90 hover:bg-red-700 text-white text-sm font-medium rounded-md border border-red-600/50 backdrop-blur-sm hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap" onChange={handleLanguageChange}>
           {SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>)}
          <button className="px-4 py-1.5 bg-red-600/90 hover:bg-red-700 text-white text-sm font-medium rounded-md border border-red-600/50 backdrop-blur-sm hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
          onClick={handleGptSearchClick}>{showGptSearch ? "Home" : "GPT Search"}</button>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30 hover:border-white/50 transition-all duration-200 cursor-pointer hover:scale-105">
            <img 
              src={user.photoURL}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <button
            onClick={handleSignOut}
            className="px-4 py-1.5 bg-red-600/90 hover:bg-red-700 text-white text-sm font-medium rounded-md border border-red-600/50 backdrop-blur-sm hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
          >
            Sign Out
          </button>
        </div>)}
      </div>
    </header>
  )
}

export default Header
