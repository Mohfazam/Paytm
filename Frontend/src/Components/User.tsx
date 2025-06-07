import { useEffect, useState } from "react"
import { Button } from "./Button"
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

interface UserProps {
    _id: string;
    username: string;
    firstname: string;
    lastname: string;
}

export const Users = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState<UserProps[]>([]);
    const [Filter, SetFilter] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            axios.get(`http://localhost:3000/api/v1/userExtras/bulk?filter=${Filter}`).then((response) => {
                setUsers(response.data.user);
            })
        }, 300);

        return () => clearTimeout(timeout);
    }, [Filter])

    return <>
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
        <div className="my-2">
            <input onChange={(e) => {
                SetFilter(e.target.value);
            }} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div>
            {users.map(user => <User key={user._id} user={user} />)}
        </div>

    </>
}

function User({ user }: any ) {
    const navigate = useNavigate();
    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstname?.[0] || ""}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstname} {user.lastname}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Button onClick={() => {
                navigate(`/Transfer?id=${user._id}&name=${user.firstname}`);
            }} Label={"Send Money"} />
        </div>
    </div>
}