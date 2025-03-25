"use client";

import { useForm } from "react-hook-form";

interface VehiclesCategoryFormProps {
    id: string | null
}

export const VehiclesCategoryForm = ({ id }: VehiclesCategoryFormProps) => {
    const { register } = useForm()
    if (id) return <div className="p-5">Edit Form</div>

    return (
        <div className="flex flex-col gap-2 my-5">
            <label htmlFor="label" className="uppercase text-sm">Label</label>
            <input type="text" className="w-full p-1 rounded-sm text-gray-950" />
            <label htmlFor="label" className="uppercase text-sm">Description</label>
            <input type="text" className="w-full p-1 rounded-sm text-gray-950" />
        </div>
    );
}
