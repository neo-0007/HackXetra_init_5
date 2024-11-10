import { useNavigate } from "react-router-dom";

const FrontPage = () => {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center px-4">
            <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">
                    Welcome to <span className="text-blue-600">Prescriptrix</span>
                </h1>
                <p className="text-gray-600 text-lg mb-8">
                    Please select your role to continue
                </p>
                
                <div className="space-y-4">
                    <button onClick={()=>{navigate('/user/login')}} className="w-full px-4 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-400 transition-colors">
                        Continue as User
                    </button>
                    <button onClick={()=>{navigate('/healthcare/login')}} className="w-full px-4 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-400 transition-colors">
                        Continue as Healthcarer
                    </button>
                    <button onClick={()=>{navigate('/doctor/login')}} className="w-full px-4 py-3 bg-purple-500 text-white text-lg font-semibold rounded-lg hover:bg-purple-400 transition-colors">
                        Continue as Doctor
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FrontPage;
