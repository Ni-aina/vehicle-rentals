"use client";

import { ArrowLeftCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export const ReturnButton = () => {
    const router = useRouter();
    const handleReturn = ()=> router.back();
    return (
        <button onClick={handleReturn}>
            <ArrowLeftCircle size={24}/>
        </button>
    );
}
