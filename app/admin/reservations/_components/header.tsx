"use client";

import { InputText } from "@/components/InpoutText";
import { AddButton } from "@/components/ui/AddButton";
import { useState } from "react";

export const Header = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState<Date | null>();
    const [inputSearch, setInputSearch] = useState("");
    const handleInputSearch = (value: string)=> setInputSearch(value);
    return (
        <div className="flex flex-wrap justify-between gap-7 items-end">
            <div className="flex justify-center gap-3 items-center">
                <AddButton link="/admin/reservations"/>
                <h1 className="text-xl">Reservations</h1>
            </div>
            <div className="flex flex-wrap gap-4 items-end flex-auto justify-end">
                <InputText value={inputSearch} handleChange={handleInputSearch}/>
                <div className="flex flex-wrap gap-3">
                    <div className="flex flex-wrap flex-col gap-3 items-start">
                        <label htmlFor="startDate" className="text-pink-600">Start date</label>
                        <input 
                            type="date" 
                            className="p-2 rounded-md bg-border"
                            value={startDate.toISOString().split("T").at(0)}
                            onChange={e => setStartDate(new Date(e.target.value))}
                        />
                    </div>
                    <div className="flex flex-wrap flex-col gap-3 items-start">
                        <label htmlFor="endDate" className="text-pink-600">End date</label>
                        <input 
                            type="date" 
                            className="p-2 rounded-md bg-border"
                            value={endDate?.toISOString().split("T").at(0) || ""}
                            onChange={e => setEndDate(new Date(e.target.value))}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
