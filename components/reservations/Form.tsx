"use client";

interface ReservationFormProps {
    id: string | null
}

export const ReservationForm = ({ id }: ReservationFormProps) => {

    if (id) return <div className="p-5">Edit Form</div>

    return (
        <div className="p-5">
            Add Form
        </div>
    );
}
