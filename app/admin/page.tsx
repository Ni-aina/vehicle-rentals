import { 
    CarTaxiFront, 
    SaveAll, 
    UserSquare 
} from "lucide-react";

const AdminDashboardPage = ()=> {
    return (
        <>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
                <div
                    className="rounded-md min-h-36 bg-border p-5"
                >
                    <div className="flex justify-between items-center">
                        <div className="flex flex-wrap gap-3">
                            <SaveAll size={20} />
                            <p>
                                Reservation
                            </p>
                        </div>
                        <div className="flex justify-end">
                            <p className="px-3 py-1 text-center text-pink-600 border border-pink-600 rounded-full">7</p>
                        </div>
                    </div>
                </div>
                <div
                    className="rounded-md min-h-36 bg-border p-5"
                >
                    <div className="flex justify-between items-center">
                        <div className="flex flex-wrap gap-3">
                            <CarTaxiFront size={20} />
                            <p>
                                Vehicle reserved
                            </p>
                        </div>
                        <div className="flex justify-end">
                            <p className="px-3 py-1 text-center text-pink-600 border border-pink-600 rounded-full">4</p>
                        </div>
                    </div>
                </div>
                <div
                    className="rounded-md min-h-36 bg-border p-5"
                >
                    <div className="flex justify-between items-center">
                        <div className="flex flex-wrap gap-3">
                            <UserSquare size={20} />
                            <p>
                                Active users
                            </p>
                        </div>
                        <div className="flex justify-end">
                            <p className="px-3 py-1 text-center text-pink-600 border border-pink-600 rounded-full">8</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
                <div className="bg-border rounded-md h-[400px]">

                </div>
                <div className="bg-border rounded-md h-[400px]">

                </div>
            </div>
        </>
    )
}

export default AdminDashboardPage;