import { BottomWarning } from "../Components/BottomWarning"
import { Button } from "../Components/Button"
import { Heading } from "../Components/Heading"
import { InputField } from "../Components/InputField"
import { SubHeading } from "../Components/Subheading"

export const Signup = () => {
    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading Label={"Sign up"} />
        <SubHeading Label={"Enter your infromation to create an account"} />
        <InputField PlaceHolder="John" Label={"First Name"} />
        <InputField PlaceHolder="Doe" Label={"Last Name"} />
        <InputField PlaceHolder="harkirat@gmail.com" Label={"Email"} />
        <InputField PlaceHolder="123456" Label={"Password"} />
        <div className="pt-4">
          <Button Label={"Sign up"} />
        </div>
        <BottomWarning Label={"Already have an account?"} ButtonText={"Sign in"} to={"/Signin"} />
      </div>
    </div>
  </div>
}