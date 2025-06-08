import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SignIn } from "./Pages/Signin"
import { Signup } from "./Pages/Signup"
import { Dashboard } from "./Pages/Dashboard"
// import { Send } from "./Pages/Send"
// import { Heading } from "./Components/Heading"
import { Test } from "./Test"
import { SendMoney } from "./Components/SendMoney"
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<Test />} />
          <Route path="/Signup" element={<Signup />}/>
          <Route path="/Signin" element={<SignIn />}/>
          <Route path="/Dashboard" element={<Dashboard />}/>
          <Route path="/Send" element={<SendMoney />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
