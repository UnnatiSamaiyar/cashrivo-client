import img1 from '../../assets/advertise/whychoose/Target-audience.svg';
import img2 from "../../assets/advertise/whychoose/Get-quality-traffic.svg";
import img3 from "../../assets/advertise/whychoose/Gain-relevant-followers.svg";
import img4 from "../../assets/advertise/whychoose/Drive-conversions.svg";

const cardData = [
  {
    step: "1",
    title: "Target Audience",
    icon: img1, // update this path as per your setup
  },
  {
    step: "2",
    title: "Get Quality Traffic​",
    icon: img2,
  },
  {
    step: "3",
    title: "Gain Relevant Followers",
    icon: img3,
  },
  {
    step: "4",
    title: "Drive Conversions",
    icon: img4,
  },
];

const Benefits = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-10 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-medium text-center text-[#27548A] mb-2">
        Benefits of Joining Us!
      </h2>
      <p className="text-md md:text-md font-medium text-center text-[#FBBF24] mb-16">
        If you’re in the business of providing real value and meaningful
        solutions — this is where you belong.
      </p>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="p-6 text-center"
          >
            <img
              src={card.icon}
              alt={card.title}
              className="w-20 h-20 mx-auto mb-4 object-contain"
            />
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
          </div>
        ))}
      </div>

    </div>
  );
};


export default Benefits;
