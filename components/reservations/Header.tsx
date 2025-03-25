"use client";

import { InputText } from "@/components/InputText";
import { AddLink } from "@/components/ui/AddLink";
import { useState } from "react";
import { InputDate } from "../ui/InputDate";

export const ReservationHeader = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [inputSearch, setInputSearch] = useState("");
    const handleInputSearch = (value: string)=> setInputSearch(value);
    return (
        <div className="flex flex-wrap justify-between gap-7 items-end">
            <div className="flex justify-center gap-3 items-center">
                <AddLink link="/admin/reservation/add"/>
                <h1 className="text-xl">Reservations</h1>
            </div>
            <div className="flex flex-wrap gap-4 items-end flex-auto justify-end">
                <InputText value={inputSearch} handleChange={handleInputSearch}/>
                <div className="flex flex-wrap gap-3">
                    <div className="flex flex-wrap flex-col gap-3 items-start">
                        <label htmlFor="startDate" className="text-pink-600">Start date</label>
                        <InputDate date={startDate} setDate={setStartDate} />
                    </div>
                    <div className="flex flex-wrap flex-col gap-3 items-start">
                        <label htmlFor="endDate" className="text-pink-600">End date</label>
                        <InputDate date={endDate} setDate={setEndDate}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
