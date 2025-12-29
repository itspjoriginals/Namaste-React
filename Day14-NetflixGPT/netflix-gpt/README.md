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