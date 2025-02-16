import { ReactNode } from "react";
import { Sidebar } from "@/components/layouts/admin/Sidebar";
import { NavBar } from "@/components/layouts/admin/Navbar";

const AdminLayout = ({ children } : { children: ReactNode}) => {
    return (
        <main className="grid grid-cols-[auto_1fr]">
            <Sidebar />
            <section className="p-4">
                <NavBar />
                <div className="mt-10">
                    {children} 
                </div>
            </section>
        </main>
    );
}

export default AdminLayout;
