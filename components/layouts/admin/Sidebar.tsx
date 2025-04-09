"use client";

import {
    BookCheck,
    CarFront,
    ChevronLeft,
    ChevronRight,
    IdCard,
    Layers2,
    LayoutDashboardIcon,
    List,
    Menu,
    Save,
    Settings,
    SlidersVertical,
    TypeOutline,
    UserCircle,
    Zap
} from "lucide-react";
import { useEffect, useLayoutEffect, useReducer, useState, useMemo, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface State {
    openVehicles: boolean;
    openSettings: boolean;
}

const initialState: State = {
    openVehicles: false,
    openSettings: false
};

const reducers = (state: State, action: { type: string }) => {
    switch (action.type) {
        case "TOGGLE_VEHICLES": return { ...state, openVehicles: !state.openVehicles };
        case "TOGGLE_SETTINGS": return { ...state, openSettings: !state.openSettings };
        default: return state;
    }
};

const Sidebar = () => {

    const pathname = usePathname();
    const [openMenu, dispatch] = useReducer(reducers, initialState);

    const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
    const linkStyle = useMemo(() => `flex items-center text-lg hover:text-pink-600 ${isFullScreen && 'gap-3'}`, [isFullScreen]);

    const toggleFullScreen = useCallback(() => setIsFullScreen(prev => !prev), []);

    useEffect(() => {
        setIsFullScreen(localStorage.getItem("isFullScreen") === "isFullScreen");
    }, []);

    useEffect(() => {
        localStorage.setItem("isFullScreen", isFullScreen ? "isFullScreen" : "isNotFullScreen");
    }, [isFullScreen]);

    useLayoutEffect(() => {
        const debounce = (func: ()=> void, delay: number)=> {
            let timeoutId: NodeJS.Timeout
            return () => {
              clearTimeout(timeoutId);
              timeoutId = setTimeout(() => func(), delay);
            } 
        }
        const changeScreen = () => {
            setIsFullScreen(window.innerWidth >= 768);
        };

        const debouncedChangeScreen = debounce(changeScreen, 100);

        window.addEventListener("resize", debouncedChangeScreen);
        return () => window.removeEventListener("resize", debouncedChangeScreen);
    }, []);

    return (
        <div className={`rounded-md bg-border h-screen overflow-auto ${isFullScreen ? 'w-72 p-7' : 'w-14 p-4'}`}>
            <div className="hidden md:flex justify-end">
                <button onClick={toggleFullScreen}>
                    <Menu />
                </button>
            </div>
            <div className="flex justify-center mb-2">
                <Image
                    className="rounded-full"
                    src="/logo/car.png"
                    alt="light-logo"
                    width={150}
                    height={110}
                />
            </div>
            <div className="flex">
                <ul>
                    <li className="mt-4">
                        <Link href="/admin" className={`${linkStyle} ${pathname === "/admin" && "text-pink-600"}`}>
                            <LayoutDashboardIcon size={20} />
                            {isFullScreen && "Dashboard"}
                        </Link>
                    </li>
                    <li className="mt-4">
                        <Link href="/admin/reservation" className={`${linkStyle} ${pathname.startsWith("/admin/reservations") && "text-pink-600"}`}>
                            <Save size={20} />
                            {isFullScreen && "Reservation"}
                        </Link>
                    </li>
                    <li className="mt-4">
                        <Link href="/admin/invoices" className={`${linkStyle} ${pathname.startsWith("/admin/invoices") && "text-pink-600"}`}>
                            <BookCheck size={20} />
                            {isFullScreen && "Invoices"}
                        </Link>
                    </li>
                    <div className="mt-4">
                        <div
                            className={`cursor-pointer ${linkStyle} ${pathname.startsWith("/admin/vehicles") && "text-pink-600"}`}
                            onClick={() => dispatch({ type: "TOGGLE_VEHICLES" })}
                        >
                            <CarFront size={20} />
                            {isFullScreen && "Vehicles"}
                            {openMenu.openVehicles ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                        </div>
                        {
                            openMenu.openVehicles &&
                            <div className={`${isFullScreen ? 'pl-6' : 'pl-2'}`}>
                                <li className="mt-2">
                                    <Link href="/admin/vehicles/list" className={`${linkStyle} ${pathname.startsWith("/admin/vehicles/list") && "text-pink-600"}`}>
                                        <List size={20} />
                                        {isFullScreen && "Vehicle list"}
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="/admin/vehicles/category" className={`${linkStyle} ${pathname.startsWith("/admin/vehicles/category") && "text-pink-600"}`}>
                                        <Layers2 size={20} />
                                        {isFullScreen && "Categories"}
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="/admin/vehicles/type" className={`${linkStyle} ${pathname.startsWith("/admin/vehicles/types") && "text-pink-600"}`}>
                                        <TypeOutline size={20} />
                                        {isFullScreen && "Types"}
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="/admin/vehicles/rapport" className={`${linkStyle} ${pathname.startsWith("/admin/vehicles/rapports") && "text-pink-600"}`}>
                                        <SlidersVertical size={20} />
                                        {isFullScreen && "Rapport"}
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="/admin/vehicles/engine" className={`${linkStyle} ${pathname.startsWith("/admin/vehicles/engine") && "text-pink-600"}`}>
                                        <Zap size={20} />
                                        {isFullScreen && "Engine"}
                                    </Link>
                                </li>
                            </div>
                        }
                    </div>
                    <div className="mt-4">
                        <div
                            className={`cursor-pointer ${linkStyle} ${pathname.startsWith("/admin/settings") && "text-pink-600"}`}
                            onClick={() => dispatch({ type: "TOGGLE_SETTINGS" })}
                        >
                            <Settings size={20} />
                            {isFullScreen && "Settings"}
                            {openMenu.openSettings ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                        </div>
                        {
                            openMenu.openSettings &&
                            <div className={`${isFullScreen ? 'pl-6' : 'pl-2'}`}>
                                <li className="mt-2">
                                    <Link href="/admin/settings/users" className={`${linkStyle} ${pathname.startsWith("/admin/settings/users") && "text-pink-600"}`}>
                                        <IdCard size={20} />
                                        {isFullScreen && "Users"}
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="/admin/settings/account" className={`${linkStyle} ${pathname.startsWith("/admin/settings/account") && "text-pink-600"}`}>
                                        <UserCircle size={20} />
                                        {isFullScreen && "Account"}
                                    </Link>
                                </li>
                            </div>
                        }
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;