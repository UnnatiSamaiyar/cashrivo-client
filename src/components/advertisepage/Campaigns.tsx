import img1 from '../../assets/advertise/Buttons/1.png'
import img2 from '../../assets/advertise/Buttons/2.png'
import img3 from '../../assets/advertise/Buttons/3.png'
import img4 from '../../assets/advertise/Buttons/4.png'
import img5 from '../../assets/advertise/Buttons/5.png'
import img6 from '../../assets/advertise/Buttons/6.png'
import img7 from '../../assets/advertise/Buttons/7.png'
import img8 from '../../assets/advertise/Buttons/8.png'

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
    {
        step: "5",
        title: "Target Audience",
        icon: img5, // update this path as per your setup
      },
      {
        step: "6",
        title: "Get Quality Traffic​",
        icon: img6,
      },
      {
        step: "7",
        title: "Gain Relevant Followers",
        icon: img7,
      },
      {
        step: "8",
        title: "Drive Conversions",
        icon: img8,
      },
  ];

const Campaigns = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-10 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-medium text-center text-[#27548A] mb-2">
      Campaigns We Promote
      </h2>
      <p className="text-md md:text-md font-medium text-center text-[#FBBF24] mb-16">
      Whether you’re launching a new product, promoting a limited-time offer, or growing your customer base, we’ve got options to match your goals
      </p>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="p-6 text-center"
          >
            <img
              src={card.icon}
              className="w-35 h-35 mx-auto mb-4 object-contain"
            />
          </div>
        ))}
      </div>

    </div>
  )
}

export default Campaigns