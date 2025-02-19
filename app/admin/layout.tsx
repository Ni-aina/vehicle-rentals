import { ReactNode } from "react";
import { Sidebar } from "@/components/layouts/admin/Sidebar";
import { NavBar } from "@/components/layouts/admin/Navbar";

const AdminLayout = ({ children } : { children: ReactNode }) => {
    return (
        <main className="grid grid-cols-[auto_1fr] p-4 gap-4">
            <Sidebar />
            <section className="max-h-screen overflow-auto relative">
                <div className="sticky top-0 left-0 right-0">
                    <NavBar />
                </div>
                <div className="mt-8">
                    {children} 
                </div>
            </section>
        </main>
    );
}

export default AdminLayout;
