"use client"

import { Modal } from "@/components/ui/AddModal";
import { InputDate } from "@/components/ui/InputDate";
import { useState } from "react";
import { VehiclesCategoryForm } from "./Form";

export const VehiclesCategoryHeader = () => {
    const [createdAt, setCreatedAt] = useState<Date | null>(null);
    return (
        <div className="flex justify-between items-center w-full gap-3">
            <div className="flex justify-between items-center gap-3">
                <form action="">
                    <Modal>
                        <Modal.Open opens="category-form">
                            <button
                                className="p-4 h-11 border rounded-md border-border 
                        flex items-center justify-center font-bold hover:bg-border"
                            >
                                +
                            </button>
                        </Modal.Open>
                        <Modal.Window name="category-form" title="Category">
                            <VehiclesCategoryForm id={null} />
                        </Modal.Window>
                    </Modal>
                </form>
                <h1 className="text-lg">Add category</h1>
            </div>
            <div className="flex justify-between gap-3">
                <InputDate date={createdAt} setDate={setCreatedAt} />
            </div>
        </div>
    );
}
