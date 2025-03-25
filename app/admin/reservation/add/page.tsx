import { ReservationForm } from "@/components/reservations/Form";
import { ReturnButton } from "@/components/ui/ReturnButton";

const AddReservation = () => {

    return (
        <div className="rounded-lg p-5 bg-border">
            <div className="flex gap-4">
                <ReturnButton />
                <span className="text-lg">
                    Add reservation
                </span>
            </div>
            <ReservationForm id={null} />
        </div>
    );
}

export default AddReservation;