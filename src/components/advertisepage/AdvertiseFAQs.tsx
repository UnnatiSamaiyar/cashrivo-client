import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion.tsx";

const AdvertiseFAQs = () => {
  return (
    <div className="w-full px-4 py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2e2b56] mb-4">
          Frequently Asked Questions
        </h2>


        <Accordion type="single" collapsible className="text-left space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-medium hover:text-orange-500 transition-colors">
              Who can advertise on Cashrivo?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Any brand that offers genuine value to shoppers is welcome. We frequently partner with e-commerce stores, coupon platforms, travel providers, app creators, and digital product sellers. If your audience overlaps with deal-hunters and discount-lovers, we’re a good fit.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-medium hover:text-orange-500 transition-colors">
              What kind of audience does Cashrivo attract?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Our users are highly engaged, budget-conscious consumers who actively seek deals, discounts, and product discoveries. Many of them are ready to make purchasing decisions — making your ads more actionable and ROI-friendly.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-medium hover:text-orange-500 transition-colors">
              What advertising options do you offer?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="text-base mb-2">
                We offer a flexible suite of ad formats including:</p>
              <ul className="list-disc list-inside space-y-2 pl-2">

                <li>
                  <strong> Featured Placement</strong> on high-traffic pages
                </li>
                <li>
                  <strong> Sponsored Posts</strong> optimized for SEO</li>
                <li>
                  <strong> SMS/Email Promotions</strong> to our subscriber base</li>
                <li>
                  <strong> Banner Ads in smart, </strong> high-visibility spots

                </li>
                <li>
                  <strong> Custom Campaigns </strong>tailored to your brand vision

                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-medium hover:text-orange-500 transition-colors">
              How much does it cost to advertise on Cashrivo?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Pricing varies depending on the ad format, campaign length, and customization. For a detailed quote, drop us a line at <a href="mailto:advertise@cashrivo.com">advertise@cashrivo.com</a>  with your goals and preferred options.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg font-medium hover:text-orange-500 transition-colors">
            Can I run a short-term or limited-time campaign?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
            Absolutely. We support everything from flash sales and product launches to seasonal offers. Let us know your timeframe and we'll recommend the best placements.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-lg font-medium hover:text-orange-500 transition-colors">
            How long does it take to go live once I submit my ad?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
            Typical turnaround is 1–3 business days, depending on the complexity of your campaign. For sponsored posts, we’ll also allow time for content approval.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-lg font-medium hover:text-orange-500 transition-colors">
            Can I track performance and results?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
            Yes. Most campaign formats come with basic performance reporting (impressions, clicks, conversions). For more advanced analytics or UTM-based tracking, we’re happy to collaborate.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="text-lg font-medium hover:text-orange-500 transition-colors">
            Can I propose a custom advertising idea?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
            Absolutely. We love creative pitches. If you’ve got a campaign concept that doesn’t fit the mold, we’ll help you bring it to life.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger className="text-lg font-medium hover:text-orange-500 transition-colors">
            Do you offer any discounts for long-term partnerships?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
            Yes. We offer bundled pricing and discounts for multi-month or multi-format campaigns. Reach out to discuss partnership packages.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger className="text-lg font-medium hover:text-orange-500 transition-colors">
            How do I get started?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
            Just email us at <a href="mailto:advertise@cashrivo.com">advertise@cashrivo.com</a> . Include your goals, preferred ad types, and budget if available. We’ll take it from there.
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </div>
  )
}

export default AdvertiseFAQs