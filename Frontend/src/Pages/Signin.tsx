import { useState } from "react"
import { BottomWarning } from "../Components/BottomWarning"
import { Button } from "../Components/Button"
import { Heading } from "../Components/Heading"
import { InputField } from "../Components/InputField"
import { SubHeading } from "../Components/SubHeading"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export const SignIn = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const hanldeSignin = async () => {
    const response = await axios.post("http://localhost:3000/api/v1/user/Signin", {
      username,
      password
    });

    console.log(response);
    localStorage.setItem("Token", response.data.token);
    alert("Signed in successfully");
    navigate("/dashboard");
  }

  return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading Label={"SignIn"} />
        <SubHeading Label={"Enter your credentials to access your account"} />
        <InputField onChange={(e) => {
          setusername(e.target.value)
        }} PlaceHolder="example@gmail.com" Label={"Email"} />
        <InputField onChange={(e) => {
          setPassword(e.target.value)
        }} PlaceHolder="123456" Label={"Password"} />
        <div className="pt-4">
          <Button onClick={hanldeSignin} Label={"Signin"} />
        </div>
        <BottomWarning Label={"Don't Have an Account?"} ButtonText={"Create one"} to={"/Signup"} />
      </div>
    </div>
  </div>
}