interface SubHeadingProps{
    Label: string
}

export const SubHeading = ({Label}:SubHeadingProps) =>{
    return <div className="text-slate-500 text-md pt-1 px-4 pb-4">
        {Label}
    </div>
}