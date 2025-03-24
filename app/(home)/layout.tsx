import { ReactNode } from "react";

const HomeLayout = async ({ children } : { children: ReactNode}) => {

    return (
        <main>
           {children} 
        </main>
    );
}

export default HomeLayout;
