import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth).catch(() => navigate("/error"));
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-lg border-b border-white/10">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">

        {/* Logo */}
        <img
          src={LOGO}
          alt="Netflix"
          className="h-9 cursor-pointer object-contain transition-opacity hover:opacity-90"
        />

        {/* Right Section */}
        {user && (
          <div className="flex items-center gap-4">

            {/* Language Selector (only in GPT mode) */}
            {showGptSearch && (
              <select
                onChange={handleLanguageChange}
                className="rounded-md bg-black/60 px-3 py-1.5 text-sm text-white border border-white/20 focus:outline-none focus:border-white/40"
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option
                    key={lang.identifier}
                    value={lang.identifier}
                    className="bg-black"
                  >
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            {/* GPT Toggle Button (Primary CTA) */}
            <button
              onClick={handleGptSearchClick}
              className="rounded-md bg-red-600 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-red-700"
            >
              {showGptSearch ? "Home" : "GPT Search"}
            </button>

            {/* Profile Image */}
            <div className="h-9 w-9 overflow-hidden rounded-full border border-white/30 hover:border-white/60 transition">
              <img
                src={user.photoURL}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Sign Out (Secondary Action) */}
            <button
              onClick={handleSignOut}
              className="text-sm text-gray-300 hover:text-white transition"
            >
              Sign out
            </button>

          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
