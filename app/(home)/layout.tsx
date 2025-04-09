import { NavbarLayout } from "@/components/layouts/Navbar";
import { ReactNode } from "react";

const HomeLayout = async ({ children }: { children: ReactNode }) => {

    return (
        <div className="lg:py-10">
            <nav className="max-w-5xl mx-auto">
                <NavbarLayout />
            </nav>
            <main>
                {children}
            </main>
        </div>
    );
}

export default HomeLayout;
