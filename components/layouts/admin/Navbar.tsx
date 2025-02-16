import { ToggleDarkMode } from "../../ui/ToggleDarkMode";

export const NavBar = () => {
    return (
        <div className="flex justify-end">
            <ToggleDarkMode />
        </div>
    );
}
