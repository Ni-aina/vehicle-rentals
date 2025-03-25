import { ReservationForm } from "@/components/reservations/Form";
import { ReturnButton } from "@/components/ui/ReturnButton";

const EditReservation = async ({ searchParams }
    : { searchParams: Promise<{ id: string }>}) => {
    const { id } = await searchParams;
    
    if (!id) return <div className="p-5">Reservation not found</div>
    
    return (
        <div className="rounded-lg p-5 bg-border">
            <div className="flex gap-4">
                <ReturnButton />
                <span className="text-lg">
                    Edit reservation
                </span>
            </div>
            <ReservationForm id={id} />
        </div>
    );
}

export default EditReservation;