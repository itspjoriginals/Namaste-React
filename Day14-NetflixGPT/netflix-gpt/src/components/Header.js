const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-2 bg-gradient-to-b from-black/95 to-black/30 backdrop-blur-sm">
      <img 
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
        alt="Netflix Logo"
        className="w-44 h-12 object-contain hover:brightness-110 transition-all duration-200"
      />
    </header>
  )
}

export default Header
