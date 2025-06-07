import { useState } from "react";
import { InputField } from "./InputField";

export const User = () => {

    const [Users, setUsers] = useState([{
        firstName: "Sarwar",
        lastName: "Khan",
        _id: 1
    }]);

    return <div>
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
        <div className="my-2">
            <InputField PlaceHolder="Search Users" />
        </div>
    </div>
}