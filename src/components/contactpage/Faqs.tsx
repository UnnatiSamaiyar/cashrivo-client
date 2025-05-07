import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion.tsx";

const Faqs = () => {
  return (
    <div className="w-full px-4 py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2e2b56] mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mb-10">
          Find answers to the most common questions below.
        </p>

        <Accordion type="single" collapsible className="text-left space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-medium hover:text-orange-500 transition-colors">
              What is Cashrivo?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Cashrivo is a smart savings platform where you can find verified
              coupons, promo codes, cashback offers, and hot deals from top
              online stores. We help you save money every time you shop —
              without the hassle.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-medium hover:text-orange-500 transition-colors">
              Are the coupons on Cashrivo free to use?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Yes! 100%. All coupons and promo codes on Cashrivo are completely
              free to browse, use, and share. No subscriptions, no hidden fees —
              just savings.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-medium hover:text-orange-500 transition-colors">
              How do I use a coupon from Cashrivo?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Find a coupon you want to use.</li>
                <li>
                  Click <strong>“Show Coupon”</strong> or{" "}
                  <strong>“Get Deal.”</strong>
                </li>
                <li>Copy the promo code (if available).</li>
                <li>
                  Paste it at checkout on the retailer’s site. That’s it — your
                  discount will be applied automatically!
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-medium hover:text-orange-500 transition-colors">
              How often are the coupons updated?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              We update deals daily (sometimes even hourly!) to make sure you're
              always getting fresh, working offers. Expired codes are removed
              quickly so you won’t waste time.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg font-medium hover:text-orange-500 transition-colors">
              Do you guarantee that all coupons will work?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              We do our best to test and verify every offer before it goes live.
              However, due to frequent price changes and store policies, some
              codes may expire unexpectedly. If you find one that’s not working,
              let us know — and we’ll fix it ASAP!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-lg font-medium hover:text-orange-500 transition-colors">
              What types of deals can I find on Cashrivo?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <div className="space-y-2">
                <p className="text-base">
                  We cover a wide range of categories, including:
                </p>
                <ul className="list-disc pl-5 text-base space-y-1">
                  <li>Fashion & Accessories</li>
                  <li>Electronics & Gadgets</li>
                  <li>Food & Grocery</li>
                  <li>Beauty & Health</li>
                  <li>Travel & Hotels</li>
                  <li>Subscription Services</li>
                  <li>And much more!</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faqs;
