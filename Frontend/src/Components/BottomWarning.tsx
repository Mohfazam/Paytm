import { Link } from "react-router-dom";

interface BottomWarningProps{
    Label: string,
    ButtonText: string;
    to?: any
}

export const BottomWarning = ({Label, ButtonText, to}: BottomWarningProps) => {
    return <div className="py-2 text-sm flex justify-center">
        <div>
            {Label}
        </div>
        <Link className="pointer underline pl-1 cursor-pointer" to={to}>
            {ButtonText}
        </Link>
    </div>
}