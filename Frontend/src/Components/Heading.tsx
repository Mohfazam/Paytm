interface HeadingProps{
    label: String
}

export const Heading = ({label}:HeadingProps) => {
    return(
        <div>
            {label}
        </div>
    )
}