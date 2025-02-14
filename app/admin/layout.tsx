import { ReactNode } from "react";
import { Sidebar } from "../components/Sidebar";

const RootLayout = ({ children } : { children: ReactNode}) => {
    return (
        <main className="grid auto-cols-max grid-flow-col">
            <Sidebar />
            <div className="p-4">
                {children} 
            </div>
        </main>
    );
}

export default RootLayout;
