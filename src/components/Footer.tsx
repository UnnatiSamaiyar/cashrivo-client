import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f9f6f2] text-[#1a1a1a] py-10 px-6 md:px-16 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 text-sm">
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 text-[#1A3668]">Quick Links</h3>
          <ul className="space-y-2 text-[#1A3668]">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="/about-us" className="hover:underline">About Us</a></li>
            <li><a href="/advertise-with-us" className="hover:underline">Advertise With Us</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-4 text-[#1A3668]">Legal</h3>
          <ul className="space-y-2 text-[#1A3668]">
            <li><a href="/terms-and-conditions" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/disclaimer" className="hover:underline">Disclaimer</a></li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-semibold mb-4 text-[#1A3668]">Explore</h3>
          <ul className="space-y-2 text-[#1A3668]">
            <li><a href="#" className="hover:underline">Latest Coupons</a></li>
            <li><a href="/blogs" className="hover:underline">Blogs</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="/refer-and-earn" className="hover:underline">Refer & Earn</a></li>
          </ul>
        </div>

        {/* Marketing Partner + Social Media */}
        <div>
          <h3 className="font-semibold mb-4 text-[#1A3668]">Marketing Partner</h3>
          <p className="mb-4 text-[#1a1a1a]">Grapewish Image</p>
          <h3 className="font-semibold mb-2 text-[#1A3668]">Follow Us</h3>
          <div className="flex space-x-4 text-[#1A3668]">
            <a href="#" className="hover:text-[#FBBF24] transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#FBBF24] transition"><FaInstagram /></a>
            <a href="#" className="hover:text-[#FBBF24] transition"><FaTwitter /></a>
            <a href="#" className="hover:text-[#FBBF24] transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="mt-15 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Cashrivo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
