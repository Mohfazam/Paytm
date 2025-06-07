interface HeadingProps{
    label: String
}

export const Heading = ({label}:HeadingProps) => {
    return(
        <div className="font-bold text-4xl pt-4">
            {label}
        </div>
    )
}