import { ReactNode } from "react";
import Sidebar from "@/components/layouts/admin/Sidebar";
import { NavBar } from "@/components/layouts/admin/Navbar";
import { checkRole } from "@/utils/roles";
import { redirect } from "next/navigation";

const AdminLayout = async ({ children } : { children: ReactNode }) => {
    const isAdmin = await checkRole('admin');
    if (!isAdmin) redirect("/");
    return (
        <main className="grid grid-cols-[auto_1fr] p-4 gap-4">
            <Sidebar />
            <section className="px-2 max-h-screen overflow-auto relative">
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
