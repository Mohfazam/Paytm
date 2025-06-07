interface BalanceProps{
    Value: string;
}

export const Balance = ({Value}:BalanceProps) => {
    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance:
        </div>
        <div>
            Rs: {Value}
        </div>
    </div>
}