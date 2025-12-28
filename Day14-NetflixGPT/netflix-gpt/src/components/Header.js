import { signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut =  () => {
    signOut(auth).then(() => {
  navigate('/')
}).catch((error) => {
  navigate('/error')
});
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-2 bg-gradient-to-b from-black/95 via-black/60 to-transparent backdrop-blur-md border-b border-black/20">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Logo */}
        <img 
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
          alt="Netflix Logo"
          className="w-32 md:w-44 h-10 md:h-12 object-contain hover:brightness-110 transition-all duration-200 cursor-pointer"
        />
        
        {/* User Profile - Right Side */}
        {user && (<div className="flex items-center space-x-2">
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
