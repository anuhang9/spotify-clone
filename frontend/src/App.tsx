// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

import { Route, Routes } from "react-router-dom"
import { HomePage } from "./page/home/home-page"
import { AuthCallbackPage } from "./page/auth/auth-callback-page"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/auth-callback" element={<AuthCallbackPage/>}/>
    </Routes>
    {/* <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header> */}
    </>
  )
}

export default App
