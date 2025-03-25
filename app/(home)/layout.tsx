import { NavbarLayout } from "@/components/layouts/Navbar";
import { ReactNode } from "react";

const HomeLayout = async ({ children }: { children: ReactNode }) => {

    return (
        <div className="p-3">
            <NavbarLayout />
            <main>
                {children}
            </main>
        </div>
    );
}

export default HomeLayout;
