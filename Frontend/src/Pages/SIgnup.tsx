import { useState } from "react"

import { BottomWarning } from "../Components/BottomWarning"
import { Button } from "../Components/Button"
import { Heading } from "../Components/Heading"
import { InputField } from "../Components/InputField"
import { SubHeading } from "../Components/Subheading"
import axios from "axios"

export const Signup = () => {

  const [Username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Password, setPassword] = useState("");

  const HandleSubmit = async () => {
    try{
      const response = await axios.post("http://localhost:3000/api/v1/user/Signup", {
      username: Username, 
      firstname: firstName, 
      lastname:LastName,
      password: Password
    })

    console.log(`Sign Successfull with details ${response}`);
    localStorage.setItem("Token", response.data.Token)
    } catch(error){
      console.log("Something went wrong.  Error: ", error);
    }
  }

  return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading Label={"Sign up"} />
        <SubHeading Label={"Enter your infromation to create an account"} />
        <InputField onChange={e => {
          setUsername(e.target.value)
        }} PlaceHolder="Sarwar123123" Label={"Username"} />

        <InputField onChange={e => {
          setFirstName(e.target.value)
        }} PlaceHolder="John" Label={"First Name"} />

        <InputField onChange={e => {
          setLastName(e.target.value)
        }} PlaceHolder="Doe" Label={"Last Name"} />


        <InputField onChange={e => {
          setPassword(e.target.value)
        }} PlaceHolder="123456" Label={"Password"} />
        <div className="pt-4">

          <Button onClick={HandleSubmit} Label={"Sign up"} />
        </div>
        <BottomWarning Label={"Already have an account?"} ButtonText={"Sign in"} to={"/Signin"} />
      </div>
    </div>
  </div>
}