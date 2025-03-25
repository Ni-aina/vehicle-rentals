"use client"

import { CircleX } from "lucide-react";
import { cloneElement, createContext, useContext, useState } from "react"
import { createPortal } from "react-dom";

interface ModalContextType {
    openName: string;
    open: (name: string) => void;
    close: () => void;
}

interface OpenProps {
    children: React.ReactElement<{ onClick?: React.MouseEventHandler }>,
    opens: string
}

interface WindowProps {
    children: React.ReactNode,
    name: string,
    title: string
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const Modal = ({ children }: { children: React.ReactNode }) => {
    const [openName, setOpenName] = useState("");
    const close = () => setOpenName("");
    const open = (name: string) => setOpenName(name);
    return (
        <ModalContext.Provider value={{ openName, open, close }}>
            {children}
        </ModalContext.Provider>
    )
}

const Open = ({ children, opens: openWindowName }: OpenProps) => {
    const context = useContext(ModalContext);
    if (!context) throw new Error("Open must be used within a modal");
    const { open } = context;
    return cloneElement(children, { onClick: () => open(openWindowName) })
}

const Window = ({ children, name , title}: WindowProps) => {
    const context = useContext(ModalContext);
    if (!context) throw new Error("Window must be used within a modal");
    const { openName, close } = context;
    if (name !== openName) return null;

    return createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50">
            <div className="fixed top-0 bottom-0 left-0 right-0 m-auto bg-border rounded-md p-5 overflow-scroll w-[400px] h-[400px]">
                <header className="flex flex-1 justify-between border-b border-pink-600 pb-2">
                    <h1 className="text-lg">{title}</h1>
                    <button onClick={close}>
                        <CircleX size={25}/>
                    </button>
                </header>
                <main>
                    {children}
                </main>
                <footer className="flex flex-1 justify-end">
                    <div className="flex gap-2">
                        <button className="p-2 bg-secondary rounded-sm text-border w-[100px]" onClick={close}>Cancel</button>
                        <button className="p-2 bg-pink-600 text-white rounded-sm w-[100px]">Save</button>
                    </div>
                </footer>
            </div>
        </div>,
        document.body
    )
}

Modal.Open = Open;
Modal.Window = Window;