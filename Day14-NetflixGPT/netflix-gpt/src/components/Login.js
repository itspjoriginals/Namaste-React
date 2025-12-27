import { useState } from "react"
import Header from "./Header"

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
      setIsSignInForm(!isSignInForm);
    }


  return (

    <div className="min-h-screen bg-black/50 relative overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <img 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f86b16bf-4c16-411c-8357-22d79beed09c/web/IN-en-20251222-TRIFECTA-perspective_d4acb127-f63f-4a98-ad0b-4317b0b3e500_small.jpg"
          alt="Netflix background"
          className="w-full h-full object-cover brightness-90"
        />
      </div>

      {/* Header */}
      <Header />

      {/* Login Form */}
      <div className="flex min-h-screen items-center justify-center px-4 pt-28 opacity-80">
        <div className="w-full max-w-md bg-black/80 backdrop-blur-xl border border-gray-800/50 rounded-lg p-8 space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-2">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            <p className="text-gray-400">Enter your email and password to continue.</p>
          </div>
          
          <form className="space-y-4">
            <div>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full p-4 bg-gray-800/70 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition-all duration-200"
                required
              />
            </div>
            <div>
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full p-4 bg-gray-800/70 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition-all duration-200"
                required
              />
            </div>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-6 rounded-lg border border-transparent transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </form>
          
          <div className="text-center text-sm text-gray-400 space-y-2">
            <p onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? " : "Already registered? "}<a href="#" className="text-white hover:underline">{isSignInForm ? "Sign Up Now" : "Sign In Now"}</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
