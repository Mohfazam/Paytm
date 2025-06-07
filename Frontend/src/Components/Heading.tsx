interface HeadingProps{
    Label: String
}

export const Heading = ({Label}:HeadingProps) => {
    return(
        <div className="font-bold text-4xl pt-4">
            {Label}
        </div>
    )
}