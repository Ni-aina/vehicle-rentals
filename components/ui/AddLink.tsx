import Link from "next/link";

export const AddLink = ({ link }: { link: string }) => {
    return (
        <Link href={link}>
            <button 
                className="p-4 h-11 border rounded-md border-border 
                flex items-center justify-center font-bold hover:bg-border"
            >
                +
            </button>
        </Link>
    );
}
