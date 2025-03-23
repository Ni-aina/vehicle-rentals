"use client";

interface dateProps {
    date: Date | null,
    setDate: (date: Date | null)=> void
}
export const InputDate = ({ date, setDate }: dateProps) => {
    return (
        <input 
            type="date" 
            className="p-2 rounded-md bg-border"
            value={date?.toISOString().split("T").at(0) || ""}
            onChange={e => setDate(e.target.value ? new Date(e.target.value) : null)}
        />
    );
}
