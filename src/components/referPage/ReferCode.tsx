import { useNavigate } from "react-router-dom";
import referImage from "../../assets/refer&earn/Referearn.png"; // adjust path as needed
import { toast } from "sonner";

const ReferCode = () => {
  const user = localStorage.getItem("cashrivo_user");
  const parsedUser = user ? JSON.parse(user) : null;


  const userId = parsedUser.user.userId
  console.log(parsedUser);
  console.log(userId);
  
  

  const Navigate = useNavigate()

  const handleCopy = () => {

    const textarea = document.createElement("textarea");
    textarea.value = userId; 
    document.body.appendChild(textarea); 
    textarea.select(); 
    document.execCommand("copy"); 
    document.body.removeChild(textarea); 
    toast("Referral Code copied. Share it with you friends!");
  };

  return (
    <div id="referCode" className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-16">
      {/* Left Content */}
      <div className="md:w-1/2 w-full text-center md:text-left mb-8 md:mb-0">
        <p className="text-[#001F5A] font-semibold text-lg leading-relaxed">
          Every time someone joins <span className="font-bold">Cashrivo</span>{" "}
          using your referral link, you get{" "}
          <span className="font-bold">10 RivoPoints</span> credited to your
          wallet – instantly. The more you refer, the more you earn. No limits.
        </p>

        {/* Correct conditional rendering */}
        {user ? (
          <button
            onClick={handleCopy}
            data-userid={userId}  // Store userId in data attribute
            className="mt-6 px-6 py-3 border-2 border-dashed border-[#001F5A] text-[#001F5A] font-semibold rounded hover:cursor-pointer transition duration-300"
          >
            Get Your Code
          </button>
        ) : (
          <button className="mt-6 px-6 py-3 border-2 border-dashed border-[#001F5A] text-[#001F5A] font-semibold rounded hover:cursor-pointer  transition duration-300" onClick={() => Navigate("/auth")}>
            Login To Get Your Refer Code
          </button>
        )}
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src={referImage}
          alt="Refer and Earn"
          className="w-64 h-auto object-contain rounded-full"
        />
      </div>
    </div>
  );
};

export default ReferCode;
