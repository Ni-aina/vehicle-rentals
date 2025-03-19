import { ToggleDarkMode } from "@/components/ui/ToggleDarkMode";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

const Home = async ()=> {

  return (
   <div className="flex justify-end h-full p-5">
      <div className="flex gap-4">
        <ToggleDarkMode />
        <SignedOut>
          <SignInButton mode="modal">
            <button className="px-3 py-2 bg-border rounded-sm">Sign In</button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="px-3 py-2 bg-border rounded-sm">Sign Up</button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
   </div>
  );
}

export default Home;