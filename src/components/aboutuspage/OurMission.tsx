import { CheckCheck } from "lucide-react"
import whoImage from '../../assets/aboutus/our_mission-removebg-preview.png';

const OurMission = () => {
    return (
        <div className="w-full py-12 px-4 md:px-12  ">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Left - Text Content */}
                <div className="w-full md:w-1/2  rounded-2xl p-6 md:p-8 ">
                    <h3 className="text-4xl font-bold text-[#27548A] mb-2">
                        Our Mission
                    </h3>
                    <p className="text-gray-700 text-lg md:text-lg leading-relaxed mb-6">
                        To empower everyday shoppers with the tools, tips, and deals they need to save money without sacrificing the things they love.
                    </p>
                    <p className="text-gray-700 text-lg md:text-lg leading-relaxed mb-6">
                    Whether it’s fashion, tech, food delivery, travel, or home essentials — if there’s a way to save on it, we’ll find it for you.
                    </p>

                    {/* First Icon + Heading + Description */}
                    <div className="flex items-center gap-4 mb-4">
                        <ul className="space-y-2 text-[#142A4F] text-sm mb-6">
                            <li className="flex items-center gap-2">
                                <CheckCheck className="w-6 h-6 text-[#02c522]" />
                                We test our coupons so you don’t waste time
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCheck className="w-6 h-6 text-[#02c522] " />
                                We update our site daily with fresh offers
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCheck className="w-6 h-6 text-[#02c522] " />
                                We don’t just list deals — we explain how to use them
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCheck className="w-6 h-6 text-[#02c522] " />
                                We respect your privacy and keep things spam-free
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCheck className="w-6 h-6 text-[#02c522] " />
                                We actually care if you save — because that’s what we’re here for
                            </li>
                        </ul>
                    </div>


                </div>
                {/* Right - Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src={whoImage}
                        alt="Who Are We"
                        className="w-[700px] h-auto object-cover ml-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default OurMission