import { Search } from "lucide-react";

export const InputText = ({ onChange }: { onChange: ()=> null }) => {
    return (
        <div className="bg-border flex items-center gap-2 rounded-md px-2 py-1">
            <Search size={15} />
            <input 
                type="text" 
                onChange={onChange}
                className="bg-border min-w-16 w-full focus-visible:outline-none" 
            />
        </div>
    );
}
