import { Heading } from "./Components/Heading"
import { InputField } from "./Components/InputField"
import { SubHeading } from "./Components/Subheading"

export const Test = () => {
    return <div>
        <Heading label={"Hello"}/>
        <SubHeading Text={"Hello again but its an subheading so it should be long"} />
        <InputField />
    </div>
}