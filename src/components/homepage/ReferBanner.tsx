import { ArrowBigRightIcon, CheckCheck } from "lucide-react"
import { Button } from "../ui/button"
import whoImage from "../../assets/refer&earn/Referearn.png";
import { useNavigate } from "react-router-dom";

const ReferBanner = () => {
    const navigate = useNavigate()
    return (
        <div
            className="w-full bg-gradient-to-br from-[#FFF8F2] via-[#FFDADA] to-[#FBBF24] text-[#FF6B6B] bg-center py-16 px-4"

        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Left - Text Content */}
                <div className="w-full md:w-1/2  rounded-2xl p-6 md:p-8 ">
                    <h3 className="text-4xl font-bold text-[#27548A] mb-2">
                        Refer & Earn RivoPoints!
                    </h3>
                    <p className="text-gray-700 text-lg md:text-lg leading-relaxed mb-6">
                        Invite your friends. Earn rewards. Everyone wins.
                    </p>
                    {/* First Icon + Heading + Description */}
                    <div className="flex items-center gap-4 mb-4">
                        <ul className="space-y-2 text-[#142A4F] text-sm mb-6">
                            <li className="flex items-center gap-2">
                                <CheckCheck className="w-6 h-6 text-[#02c522]" />
                                Get 10 RivoPoints every time your friend signs up & shops!
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCheck className="w-6 h-6 text-[#02c522] " />
                                Share your referral link.
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCheck className="w-6 h-6 text-[#02c522] " />
                                No limits — the more you refer, the more you earn.
                            </li>
                        </ul>
                    </div>

                    {/* Second Icon + Heading + Description */}
                    <div className="flex items-center gap-4">
                        <Button
                            variant="outline"
                            className="text-[#1A3668] font-bold bg-[#FBBF24] rounded-4xl hover:cursor-pointer"
                            onClick={() => navigate('/refer-and-earn')}
                        >
                            Refer Now <ArrowBigRightIcon />
                        </Button>
                    </div>
                </div>
                {/* Right - Image */}
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <img
                        src={whoImage}
                        alt="Who Are We"
                        className="w-[300px] h-auto object-cover rounded-full"
                    />
                </div>

            </div>
        </div>
    )
}

export default ReferBanner