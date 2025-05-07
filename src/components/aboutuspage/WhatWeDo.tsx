import img1 from '../../assets/aboutus/Verified-working-coupons.png'
import img2 from '../../assets/aboutus/Exclusive-promo-codes.png'
import img3 from '../../assets/aboutus/Saving-tips.png'
import img4 from '../../assets/aboutus/Deals-from-brands.png'
const cardData = [
    {
        title: "Verified & Working Coupons",
        image: img1
    },
    {
        title: "Exclusive Promo Codes",
        image: img2
    },
    {
        title: "Smart Shopping Guides",
        image: img3
    },
    {
        title: "Deals from 1000+ brands",
        image: img4
    },
];

const WhatWeDo = () => {
    return (
        <section className="py-16 px-4 md:px-12 bg-white">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#27348A] ">What We Do?</h2>
                <p className="text-md font-medium text-[#FBBF24] ">
                    We’re not just another coupon site. We’re your personal deal-hunting sidekick — making sure you never pay full price again..
                </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className="p-6 text-center"
                    >
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-20 h-20 mx-auto mb-4 object-contain"
                        />
                        <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhatWeDo;
