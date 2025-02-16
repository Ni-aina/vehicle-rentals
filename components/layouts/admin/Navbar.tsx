"use client";

import { LogOut, Search, UserCircle } from "lucide-react";
import { ToggleDarkMode } from "../../ui/ToggleDarkMode";

export const NavBar = () => {

    const handleLogOut = ()=> alert("Logged out");

    return (
        <div className="flex flex-wrap justify-between gap-5">
            <div className="flex-1">
                <div className="bg-border flex items-center gap-2 rounded-md px-2 py-1">
                    <Search size={15} />
                    <input type="text" className="bg-border min-w-16 w-full focus-visible:outline-none" />
                </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
                <ToggleDarkMode />
                <div className="flex flex-wrap gap-3">
                    <UserCircle />
                    <p className="hidden md:block">Ni aina</p>
                    <button onClick={handleLogOut}>
                        <LogOut/>
                    </button>
                </div>
            </div>
        </div>
    );
}
