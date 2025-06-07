import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SignIn } from "./Pages/Signin"
import { Signup } from "./Pages/Signup"
import { Dashboard } from "./Pages/Dashboard"
import { Send } from "./Pages/Send"
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Signup" element={<Signup />}/>
          <Route path="/Signin" element={<SignIn />}/>
          <Route path="/Dashboard" element={<Dashboard />}/>
          <Route path="/Send" element={<Send />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
