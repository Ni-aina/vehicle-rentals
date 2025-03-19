import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const RootLayout = async ({ children } : { children: ReactNode}) => {
    const user = await currentUser();

    if (user) redirect("/admin");

    return (
        <main>
           {children} 
        </main>
    );
}

export default RootLayout;
