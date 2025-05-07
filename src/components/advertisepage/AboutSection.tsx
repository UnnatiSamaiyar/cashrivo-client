import aboutImg from "../../assets/advertise/about.avif";

const AboutSection = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-10 max-w-7xl mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={aboutImg}
            alt="Cashback Extension"
            className="max-w-xs md:max-w-sm w-full h-auto"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl font-bold text-[#142A4F] mb-2">
            About Cashrivo
          </h2>
          <p className="text-[#142A4F] mb-4">
            Cashrivo is India’s go-to destination for discovering the smartest
            ways to earn and save online. From cashback offers and reward
            programs to exclusive deals and daily discounts, we help users
            unlock the full potential of their spending across a wide range of
            online platforms.
          </p>
          <p className="text-[#142A4F] mb-5">
            We proudly collaborate with leading brands and e-commerce giants
            like Amazon, Flipkart, Swiggy, Zomato, and more. By driving
            high-intent traffic and boosting user engagement, Cashrivo not only
            enhances brand visibility but also contributes significantly to
            revenue generation for our partners.
          </p>

          <button className="bg-[#142A4F] text-white px-6 py-2 rounded-full hover:bg-[#0f1e36] transition-all">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
