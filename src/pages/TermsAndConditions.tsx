import { Card, CardContent } from "../components/ui/card"

const TermsAndConditions = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-4 md:px-10 lg:px-32 transition-all duration-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#27548A] mb-6 text-center">
          Terms and Conditions
        </h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Effective Date: 01/04/2025 <br /> Last Updated: 23/04/2025
        </p>

        <Card className="shadow-lg rounded-2xl transition-all">
          <CardContent className="p-6 space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
            <section>
              <h2 className="text-xl font-semibold text-[#FF6B6B] mb-2">1. Use of the Website</h2>
              <p>Cashrivo provides access to coupons, promotional offers, deals, and other money-saving content. You agree to use the website for lawful purposes only.</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Use the site in a way that causes damage or restricts access to others</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Misuse the site's content or attempt to resell it</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#FF6B6B] mb-2">2. Intellectual Property</h2>
              <p>All content on Cashrivo is the property of Cashrivo or its licensors.</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>View and download content for personal, non-commercial use</li>
                <li>You may not reproduce, distribute, or republish any content without written permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#FF6B6B] mb-2">3. Third-Party Links and Offers</h2>
              <p>We do not control or endorse third-party sites and are not responsible for their content.</p>
              <p><strong>Affiliate Disclosure:</strong> We may earn a commission from affiliate links, but this does not affect your experience or pricing.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#FF6B6B] mb-2">4. Accuracy of Information</h2>
              <p>We strive for accuracy but do not guarantee the validity or availability of promotions. Always verify details with merchants.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#FF6B6B] mb-2">5. Disclaimer of Warranties</h2>
              <p>Cashrivo is provided "as is" and we disclaim all warranties. We do not guarantee the website will be error-free or uninterrupted.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#FF6B6B] mb-2">6. Limitation of Liability</h2>
              <p>We are not liable for any damages arising from your use or inability to use the site or third-party links.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#FF6B6B] mb-2">7. User Accounts (if applicable)</h2>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>You are responsible for maintaining the confidentiality of your credentials</li>
                <li>Notify us immediately of any unauthorized use</li>
                <li>We may terminate accounts that violate these Terms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#FF6B6B] mb-2">8. Termination</h2>
              <p>We may suspend or terminate your access at any time without notice for violating these Terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#FF6B6B] mb-2">9. Changes to These Terms</h2>
              <p>We may revise these Terms at any time. Continued use of the site means you accept the updated Terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#FF6B6B] mb-2">10. Contact Us</h2>
              <p>Email: connect@cashrivo.com<br/>Website: https://www.cashrivo.com</p>
            </section>

            <p className="text-xs text-center text-gray-500 pt-8">
              © {new Date().getFullYear()} Cashrivo. All rights reserved.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default TermsAndConditions
