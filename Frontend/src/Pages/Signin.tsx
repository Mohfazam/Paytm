import { BottomWarning } from "../Components/BottomWarning"
import { Button } from "../Components/Button"
import { Heading } from "../Components/Heading"
import { InputField } from "../Components/InputField"
import { SubHeading } from "../Components/Subheading"

export const SignIn = () => {
    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading Label={"SignIn"} />
        <SubHeading Label={"Enter your credentials to access your account"} />
        <InputField PlaceHolder="example@gmail.com" Label={"Email"} />
        <InputField PlaceHolder="123456" Label={"Password"} />
        <div className="pt-4">
          <Button Label={"Signin"} />
        </div>
        <BottomWarning Label={"Don't Have an Account?"} ButtonText={"Create one"} to={"/Signup"} />
      </div>
    </div>
  </div>
}