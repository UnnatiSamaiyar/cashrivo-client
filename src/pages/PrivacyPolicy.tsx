import { Card, CardContent } from "../components/ui/card"


const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center text-[#f14144]">Privacy Policy</h1>
      <p className="text-sm text-gray-500 text-center mb-10">Effective Date: 01/04/2025 </p>
      <Card className="shadow-lg rounded-2xl transition-all">
          <CardContent className="p-6 space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
            
      <section className="space-y-6">
        <p>
          At Cashrivo, accessible from <a href="https://cashrivo.com" className="text-blue-500 underline">https://cashrivo.com</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document outlines the types of information that is collected and recorded by Cashrivo and how we use it.
        </p>

        <h2 className="text-xl font-semibold mt-8">1. Information We Collect</h2>
        <ul className="list-disc ml-6">
          <li><strong>Personal Information:</strong> Your name, email address, and other contact details when you voluntarily submit them.</li>
          <li><strong>Non-Personal Information:</strong> Browser type, IP address, device info, pages visited, time spent on site, etc.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6">
          <li>To provide and maintain our services</li>
          <li>To improve and personalize your experience</li>
          <li>To understand user interaction</li>
          <li>To communicate updates and promotional offers</li>
          <li>To prevent fraud and ensure platform security</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">3. Cookies and Tracking Technologies</h2>
        <p>We use cookies to enhance your experience:</p>
        <ul className="list-disc ml-6">
          <li><strong>Essential Cookies:</strong> Necessary for website operation</li>
          <li><strong>Analytics Cookies:</strong> Understand user behavior (e.g., Google Analytics)</li>
          <li><strong>Advertising Cookies:</strong> Used by third-party advertisers</li>
        </ul>
        <p>You may disable cookies via browser settings, though some site features may not function properly.</p>

        <h2 className="text-xl font-semibold mt-8">4. Third-Party Services</h2>
        <p>We may use third-party services like affiliate networks and analytics tools. Cashrivo is not responsible for external site privacy practices.</p>

        <h2 className="text-xl font-semibold mt-8">5. Data Security</h2>
        <p>We implement reasonable security practices, though no online system is 100% secure.</p>

        <h2 className="text-xl font-semibold mt-8">6. Your Rights</h2>
        <p>You may have the right to access, correct, delete, or withdraw consent to your data. To exercise these rights, contact us at [your contact email].</p>

        <h2 className="text-xl font-semibold mt-8">7. Children’s Privacy</h2>
        <p>Cashrivo does not knowingly collect data from children under 13. Contact us if you believe your child has submitted personal info.</p>

        <h2 className="text-xl font-semibold mt-8">8. Changes to This Policy</h2>
        <p>We may update our policy and will notify you by updating the effective date on this page.</p>

        <h2 className="text-xl font-semibold mt-8">9. Contact Us</h2>
        <p>Email: <a href="mailto:Connect@cashrivo.com" className="text-blue-500 underline">Connect@cashrivo.com</a></p>
        <p>Website: <a href="https://cashrivo.com" className="text-blue-500 underline">cashrivo.com</a></p>
      </section>
      </ CardContent>
      </ Card >
    </div>
  );
};

export default PrivacyPolicy;
