import { CheckCheck } from 'lucide-react'
import whoImage from "../../assets/refer&earn/heroimage.png";
import { Button } from '../ui/button'

const ReferHero = () => {
  return (
    <>
      <div className="w-full py-12 px-4 md:px-12 bg-[#FBE9D1] ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left - Text Content */}
          <div className="w-full md:w-1/2  rounded-2xl p-6 md:p-8 ">
            <h3 className="text-4xl font-bold text-[#27548A] mb-2">
              Refer & Earn With Cashrivo
            </h3>
            <p className="text-gray-700 text-lg md:text-lg leading-relaxed mb-6">
              Love saving with Cashrivo? Spread the word and get rewarded! Invite your friends to join, and you both earn when they start saving using our Chrome extension or website.
            </p>

            {/* First Icon + Heading + Description */}
            <div className="flex items-center gap-4 mb-4">
              <ul className="space-y-2 text-[#142A4F] text-sm mb-6">
                <li className="flex items-center gap-2">
                  <CheckCheck className="w-6 h-6 text-[#02c522]" />
                  10 RivoPoints for every successful referral
                </li>
                <li className="flex items-center gap-2">
                  <CheckCheck className="w-6 h-6 text-[#02c522] " />
                  No limits — refer as many as you like
                </li>
                <li className="flex items-center gap-2">
                  <CheckCheck className="w-6 h-6 text-[#02c522] " />
                  Exciting offers and deals
                </li>
              </ul>
            </div>

            {/* Second Icon + Heading + Description */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="text-[#1A3668] font-bold bg-[#FBBF24] rounded-4xl hover:cursor-pointer"
                onClick={() => {
                  const element = document.getElementById("referCode");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" }); // smooth scroll effect
                  }
                }}
              >
                GET STARTED
              </Button>
            </div>

          </div>
          {/* Right - Image */}
          <div className="w-full md:w-1/2">
            <img
              src={whoImage}
              alt="Who Are We"
              className="w-[500px] h-auto object-cover ml-auto rounded-full"
            />
          </div>
        </div>
      </div>

    </>
  )
}

export default ReferHero