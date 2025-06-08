import { useEffect, useState } from "react";
import { Appbar } from "../Components/AppBar"
import { Balance } from "../Components/Balance"
import { Users } from "../Components/User"
import axios from "axios";

export const Dashboard = () => {
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/account/balance",{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("Token")}`
            }
        }).then((response) => {
            const bal = response.data.Balance.toFixed(3);
            setBalance(bal);
        }).catch((error) => {
            console.log("Failed to Fetch Balance: ", error);
        });
        
    }, []);

    return <div className="ml-2 mr-2">
        <Appbar />
        <div>
            <Balance Value={balance} />
            <Users />
        </div>
    </div>
}