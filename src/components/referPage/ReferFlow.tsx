import img1 from "../../assets/refer&earn/Invite-your-friends.png";
import img2 from "../../assets/refer&earn/Your-friend-registers.png";
import img3 from "../../assets/refer&earn/You-get-cashback.png";
import img4 from "../../assets/refer&earn/Both-earn-cashback.png";

const steps = [
  {
    step: "1",
    title: "Invite Your Friends To Cashrivo",
    icon: img1, // update this path as per your setup
  },
  {
    step: "2",
    title: "They sign up using your referral link",
    icon: img2,
  },
  {
    step: "3",
    title: "Both earn 10 RivoPoints",
    icon: img3,
  },
  {
    step: "4",
    title: "You Get 1 RivoPoint everytime your friend visits the store",
    icon: img4,
  },
];

const ReferFlow = () => {
  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#27548A] mb-16">
        How It Works?
      </h2>

      {/* Timeline Steps */}
      {steps.map((item, index) => { 
        const isEven = index % 2 === 0;
        return (
          <div
            key={index}
            className="grid grid-cols-12 items-center gap-4 mb-20"
          >
            {isEven ? (
              <>
                {/* Left Content */}
                <div className="col-span-5 text-left">
                  <h3 className="text-xl font-bold text-[#FF6B6B] mb-2">
                    {item.title}
                  </h3>
                  <div className="h-1 mt-4 w-full bg-gray-200 rounded-full"></div>
                </div>

                {/* Center Circle */}
                <div className="col-span-2 flex flex-col items-center justify-center">
                  <img
                    src={item.icon}
                    alt={`Step ${item.step}`}
                    className="w-12 h-12 object-contain shadow-md rounded-full"
                  />
                  <span className="mt-2 text-sm text-gray-500">
                    Step {item.step}
                  </span>
                </div>

                {/* Right Spacer */}
                <div className="col-span-5" />
              </>
            ) : (
              <>
                {/* Left Spacer */}
                <div className="col-span-5" />

                {/* Center Circle */}
                <div className="col-span-2 flex flex-col items-center justify-center">
                  <img
                    src={item.icon}
                    alt={`Step ${item.step}`}
                    className="w-12 h-12 object-contain shadow-md rounded-full"
                  />
                  <span className="mt-2 text-sm text-gray-500">
                    Step {item.step}
                  </span>
                </div>

                {/* Right Content */}
                <div className="col-span-5 text-left">
                  <h3 className="text-xl font-bold text-[#FF6B6B] mb-2">
                    {item.title}
                  </h3>
                  <div className="h-1 mt-4 w-full bg-gray-200 rounded-full"></div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ReferFlow;
