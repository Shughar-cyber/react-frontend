
import { useUserStore } from "../Store/Userstore";
import { Link } from "react-router-dom";


export const Navbar = () => {
    const {isLoggedIn, user, logout} = useUserStore()

    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4" >
                <li>
                    <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="text-white hover:text-gray-300">About</Link>
                </li>
                <li>
                    <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
                </li>
                <li>
                    <Link to="/logout" className="text-white hover:text-gray-300">Logout</Link>
                </li>
            </ul>
        </nav>
    )
}