"use client";

import { 
    CarFront, 
    LayoutDashboardIcon, 
    Menu, 
    Save
} from "lucide-react"
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const Sidebar = ()=> {

    const [isFullScreen, setIsFullScreen] = useState<boolean>();
    
    const toggleFullScreen = ()=> setIsFullScreen(prev => !prev);

    useEffect(()=> {
       setIsFullScreen(localStorage.getItem("isFullScreen") === "isFullScreen" ? true : false);
    }, [])

    useEffect(()=> {
        localStorage.setItem("isFullScreen", isFullScreen ? "isFullScreen" : "isNotFullScreen")
    }, [isFullScreen])
    
    return (
        <div className={`bg-border h-screen p-4 ${isFullScreen ? 'w-72' : 'w-14'}`}>
            <div className="flex justify-end">
                <button onClick={toggleFullScreen}>
                    <Menu />
                </button>
            </div>
            <div className="flex justify-center mt-3 mb-2">
                <Image 
                    className="rounded-full"
                    src="/logo/car.png"
                    alt="light-logo"
                    width={140} 
                    height={100}
                />
            </div>
            <div className="flex">
                <ul>
                    <li className="mt-4">
                        <Link href="/admin" className="flex items-center text-lg">
                            <LayoutDashboardIcon size={20} className="me-2" />
                            {isFullScreen && "Dashboard"}
                        </Link>
                    </li>
                    <li className="mt-4">
                        <Link href="/admin/reservation" className="flex items-center text-lg">
                            <Save size={20} className="me-2" />
                            {isFullScreen && "Reservation"}
                        </Link>
                    </li>
                    <li className="mt-4">
                        <Link href="/admin/vehicle" className="flex items-center text-lg">
                            <CarFront size={20} className="me-2" />
                            {isFullScreen && "Vehicle"}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}