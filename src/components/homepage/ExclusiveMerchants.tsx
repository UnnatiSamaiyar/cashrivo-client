import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import img1 from '../../assets/logo/Amazon.png';
import img2 from '../../assets/logo/blinkit.png';
import img3 from '../../assets/logo/bookmyshow.png';
import img4 from '../../assets/logo/dominos.jpg';
import img5 from '../../assets/logo/flipkart.png';
import img6 from '../../assets/logo/myntra.png';
import img7 from '../../assets/logo/nykaa.jpg';
import img8 from '../../assets/logo/paytm.jpg';
import img9 from '../../assets/logo/PharmEasy.png';
import img10 from '../../assets/logo/spicejet.png';

const logos = [
    img1, img2, img3, img4, img5,
    img6, img7, img8, img9, img10
];

const ExclusiveMerchants = () => {
    const logosRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (logosRef.current) {
            const images = logosRef.current.querySelectorAll('img');

            gsap.fromTo(
                images,
                { opacity: 0, y: 80, scale: 0.8 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: 'power2.out',
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: logosRef.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse',
                        scrub: false, // If you want scroll-scrubbing (move based on scroll), set to true
                    },
                }
            );
        }
    }, []);

    return (
        <div className="w-full py-10 bg-white" ref={logosRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl font-semibold text-[#FF6B6B] mb-6">
                    Exclusive Brands
                </h2>
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    slidesPerView={'auto'}
                    spaceBetween={40}
                    freeMode={true}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={2000}
                    grabCursor={true}
                >
                    {[...logos, ...logos].map((logo, index) => (
                        <SwiperSlide key={index} style={{ width: 'auto' }}>
                            <img
                                src={logo}
                                alt={`merchant-${index}`}
                                className="h-16 w-auto object-contain"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ExclusiveMerchants;
