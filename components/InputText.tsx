import { Search } from "lucide-react";

export const InputText = ({ value, handleChange }: { value: string, handleChange: (value: string)=> void }) => {
    return (
        <div className="flex flex-1 min-w-48 items-center gap-2 rounded-md p-2 bg-border">
            <Search size={15} />
            <input 
                type="text" 
                value={value}
                onChange={(e)=> handleChange(e.target.value)}
                className="bg-border min-w-16 w-full focus-visible:outline-none" 
            />
        </div>
    );
}
