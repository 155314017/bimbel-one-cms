import { useNavigate } from "react-router-dom";

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        Unauthorized Access
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        You do not have permission to view this page.
      </p>
      <button
        onClick={handleBackToLogin}
        className="bg-[#E85F10] text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-[#d34f0e] transition duration-200"
      >
        Back to Login
      </button>
    </div>
  );
};

export default UnauthorizedPage;
