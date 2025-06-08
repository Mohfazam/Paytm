import { Appbar } from "./Components/AppBar"
import { Balance } from "./Components/Balance"
import { BottomWarning } from "./Components/BottomWarning"
import { Button } from "./Components/Button"
import { Heading } from "./Components/Heading"
import { InputField } from "./Components/InputField"
import { SendMoney } from "./Components/SendMoney"
import { SubHeading } from "./Components/SubHeading"
import { Users } from "./Components/User"

export const Test = () => {
    return <div>
        <Heading Label={"Hello"}/>
        <SubHeading Label={"Hello again but its an subheading so it should be long"} />
        <InputField Label="First Name" PlaceHolder={"Enter Your Name"}/>
        <Button Label="Click Me"/>
        <BottomWarning Label={"Don't Have an Account?"} ButtonText={"Sign Up"} to={"/ToUnderline"}/>
        <Appbar />
        <Balance Value={40} />
        <Users />
        <SendMoney />
    </div>
}