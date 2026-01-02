# Netflix GPT

- Create React App
- Configured Tailwind 3.4.17
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validation [useRef Hook]
- Firebase Setup
- Deploying our app to production
- Create signup user account
- Implement Sign in user api
- Created Redux Store with user Slice
- Implemented Sign out
- Update Profile
- Bugfix 1: Sign up user displayName and profile picture update
- Bugfix 2: if the user is not logged in redirect /browse to login page and vice-versa
- unsubscribe to the onAuthStateChanged callback
- Add hardcoded vlues to the constants file
- Register TMDB API & create ana app & get access token
- Get data from TMDB now playing movies list API
- Custom hook for Now Playing Movies & movie trailer
- Create movieSlice
- Update store with movies data
- Planning for mainContainer & secondary container
- Fetch data trailer video 
- Update store with trailer video data
- Embedded the youtube video and make it autoplay and mute
- Add Tailwind to MainContainer
- Build Secondary Component
- Build Movie List
- Build Movie Card
- TMBD Image CDN URL
- Added tailwind in browse page 
- Create custom hooks [usePopularMovies, useComedyMovies, useTopRatedMovies, useActionMovies]
- GPT Search Page
- GPT Search Bar
- Multilingual Functionality in GPT Page
- Integrate GPT APIs





# Features
- Login/Sign Up
    - Sign In/ Sign Up Form
    redirect to Browse page
- Browse (After Authentication)
    - Header
    - Main Movie
        - Trailer in Background
        - Title & Description
        - Movie Suggestions
            - MovieLists * N
- NetflixGPT
    - Search Bar
    - Movie Suggestions
    
# Steps to Firebase Deployment
- Install firebase CLI - `npm install -g firebase-tools`
- Firebase Login - `firebase login`
- Initilize Firebase - `firebase init`, then select Hoisting
- Deploy Command - `firebase deploy`


# TMDB - DNS restrictions 
- 1. Run Command Prompt as admin:
- 2. `netsh interface show interface`
- 3. `netsh interface ip set dns "Wi-Fi" static 8.8.8.8`
- 4. `netsh interface ip add dns "Wi-Fi" 8.8.4.4 index=2`
- 5. Flush DNS with `ipconfig /flushdns`