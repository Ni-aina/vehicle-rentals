import { ToggleTheme } from "@/components/ui/ToggleTheme";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export const NavbarLayout = () => {
    
    return (
        <div className="hidden lg:block sticky top-2">
            <div className="bg-border rounded-md flex justify-between items-center py-2 px-3">
                <Link href="/" className="flex gap-2 items-center">
                    <Image src="/logo/car.png" alt="logo" width={35} height={25} className="rounded-md" />
                    <h1 className="text-lg">Vehicle rentals</h1>
                </Link>
                <div className="flex gap-4">
                    <ToggleTheme />
                    <SignedOut>
                        <SignInButton mode="modal">
                            <button className="px-3 py-2 bg-pink-600 text-white rounded-md text-sm">Sign In</button>
                        </SignInButton>
                        <SignUpButton mode="modal">
                            <button className="px-3 py-2 bg-pink-600 text-white rounded-md text-sm">Sign Up</button>
                        </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </div>
    );
}
