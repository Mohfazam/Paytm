import { Appbar } from "../Components/AppBar"
import { Balance } from "../Components/Balance"
import { Users } from "../Components/User"

export const Dashboard = () => {
    return <div className="ml-2 mr-2">
        <Appbar />
        <div>
            <Balance Value={"10,0000"} />
            <Users />
        </div>
    </div>
}