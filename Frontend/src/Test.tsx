import { BottomWarning } from "./Components/BottomWarning"
import { Button } from "./Components/Button"
import { Heading } from "./Components/Heading"
import { InputField } from "./Components/InputField"
import { SubHeading } from "./Components/Subheading"

export const Test = () => {
    return <div>
        <Heading Label={"Hello"}/>
        <SubHeading Label={"Hello again but its an subheading so it should be long"} />
        <InputField Label="First Name" PlaceHolder={"Enter Your Name"}/>
        <Button Label="Click Me"/>
        <BottomWarning Label={"Don't Have an Account?"} ButtonText={"Sign Up"} to={"/ToUnderline"}/>
    </div>
}