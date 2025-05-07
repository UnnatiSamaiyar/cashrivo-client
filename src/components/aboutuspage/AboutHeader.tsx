import { CheckCheck } from 'lucide-react'
import whoImage from '../../assets/aboutus/about-us.png'
import { Button } from '../ui/button'
const AboutHeader = () => {
    return (

        <div className="w-full py-12 px-4 md:px-12 bg-[#F0F5FE] ">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Left - Text Content */}
                <div className="w-full md:w-1/2  rounded-2xl p-6 md:p-8 ">
                    <h2 className="font-bold text-[#FBBF24] mb-4">#ABOUT US</h2>
                    <h3 className="text-4xl font-bold text-[#27548A] mb-2">
                        About Cashrivo
                    </h3>
                    <p className="text-gray-700 text-lg md:text-lg leading-relaxed mb-6">
                        Welcome to Cashrivo — your daily destination for unbeatable deals, real working coupons, and wallet-friendly hacks that help you save more and spend smarter.
                    </p>

                    {/* First Icon + Heading + Description */}
                    <div className="flex items-center gap-4 mb-4">
                        <ul className="space-y-2 text-[#142A4F] text-sm mb-6">
                            <li className="flex items-center gap-2">
                                <CheckCheck className="w-6 h-6 text-[#02c522]" />
                                24/7 Assistance
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCheck className="w-6 h-6 text-[#02c522] " />
                                100% Verified Deals
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCheck className="w-6 h-6 text-[#02c522] " />
                                Secure Redemption
                            </li>
                        </ul>
                    </div>

                    {/* Second Icon + Heading + Description */}
                    <div className="flex items-center gap-4">
                        <Button
                            variant="outline"
                            className="text-[#1A3668] font-bold bg-[#FBBF24] rounded-4xl "
                        >
                            CONTACT US
                        </Button>
                    </div>
                </div>
                {/* Right - Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src={whoImage}
                        alt="Who Are We"
                        className="w-[500px] h-auto object-cover ml-auto"
                    />
                </div>
            </div>
        </div>

    )
}

export default AboutHeader