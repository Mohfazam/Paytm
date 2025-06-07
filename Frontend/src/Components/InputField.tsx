interface InputFieldProps {
    Label?: string,
    PlaceHolder: string
}

export const InputField = ({Label, PlaceHolder}: InputFieldProps) => {
    return <div>
        <div className="text-sm font-medium text-left py-2">
            {Label}
        </div>

        <input placeholder={PlaceHolder} className="w-full px-2 py-1 border rounded border-slate-200" />
    </div>
}