import { Table } from "@/components/Table";
import { Column } from "@/types/table";

interface User {
    firstName: string;
    startedAt: string;
    vehicle: string;
    actions: string;
}

export const ReservationBody = () => {

    const columns: Column<User>[] = [
        { header: "First name", accessor: "firstName" },
        { header: "Started at", accessor: "startedAt" },
        { header: "Vehicle", accessor: "vehicle" },
        { header: "Actions", accessor: "actions" },
    ];

    const data: User[] = [
        { firstName: "Ni", startedAt: "09-02-2024", vehicle: "Toyota", actions: "..." },
        { firstName: "John", startedAt: "02-03-2025", vehicle: "Sprinter", actions: "..." },
        { firstName: "Jane", startedAt: "05-02-2025", vehicle: "BT-50", actions: "..." },
    ];

    return (
        <div className="mt-8 bg-border rounded-md w-full h-[450px] p-5">
            <Table columns={columns} data={data}/>
        </div>
    );
}
