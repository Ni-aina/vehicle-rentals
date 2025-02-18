"use client";

import { Bell, LogOut, UserCircle } from "lucide-react";
import { ToggleDarkMode } from "../../ui/ToggleDarkMode";

export const NavBar = () => {

    const handleLogOut = ()=> alert("Logged out");

    return (
        <div className="flex flex-wrap justify-between gap-5">
            <div className="flex flex-wrap gap-3 items-center">
                <Bell size={20} />
                <ToggleDarkMode />
            </div>
            <div className="flex flex-wrap gap-3 items-center">
                <UserCircle size={20} />
                <p className="hidden md:block">Ni aina</p>
                <button onClick={handleLogOut}>
                    <LogOut size={20} />
                </button>
            </div>
        </div>
    );
}
