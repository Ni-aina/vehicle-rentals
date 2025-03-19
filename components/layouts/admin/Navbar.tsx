"use client";

import { Bell } from "lucide-react";
import { ToggleDarkMode } from "../../ui/ToggleDarkMode";
import { SignedIn, UserButton } from "@clerk/nextjs";

export const NavBar = () => {

    return (
        <div className="flex flex-wrap justify-between gap-5 bg-border p-4 rounded-md">
            <div className="flex flex-wrap gap-3 items-center">
                <Bell size={20} />
                <ToggleDarkMode />
            </div>
            <div className="flex flex-wrap gap-3 items-center">
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    );
}
