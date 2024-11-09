import { useNavigate } from "react-router-dom";


const Navbar = ({ isAuthenticated, userName }: { isAuthenticated: boolean; userName: string }) => {
    const navigate = useNavigate()
    return (
        <nav className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                {/* WebApp Name */}
                <div className="text-2xl font-bold cursor-pointer hover:text-blue-200 transition">
                    Prescriptrix
                </div>

                {/* Right Side Buttons */}
                <div className="flex items-center space-x-4">
                    {/* Show Login and Signup if not authenticated */}
                    {!isAuthenticated ? (
                        <>
                            <button onClick={()=>{navigate('/')}} className="px-4 py-2  bg-green-500 rounded hover:bg-green-400 transition">
                                Login
                            </button>

                        </>
                    ) : (
                        // Show User Icon and Name if authenticated
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">
                                {userName[0].toUpperCase()}
                            </div>
                            <span className="text-lg font-semibold">{userName}</span>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
