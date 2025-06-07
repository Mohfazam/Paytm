interface BalanceProps{
    Value: string | number;
}

export const Balance = ({Value}:BalanceProps) => {
    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance:
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs: {Value}
        </div>
    </div>
}