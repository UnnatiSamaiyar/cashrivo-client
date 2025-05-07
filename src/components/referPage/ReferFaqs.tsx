import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion.tsx";

const ReferFaqs = () => {
  return (
    <div className="w-full px-4 py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2e2b56] mb-4">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="text-left space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-medium hover:text-orange-500 transition-colors">
              How will I receive the referral bonus?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Once your referred friend signs up and completes their first
              eligible transaction, your bonus will be credited directly to your
              Cashrivo wallet.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-medium hover:text-orange-500 transition-colors">
              When will I get paid?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Referral bonuses are typically credited within 24–48 hours after
              your friend’s transaction is verified.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-medium hover:text-orange-500 transition-colors">
              Is there a limit to how much I can earn?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Nope! You can refer as many friends as you like and earn unlimited
              rewards.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-medium hover:text-orange-500 transition-colors">
              Can I refer someone who already uses Cashrivo?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              No, referrals only apply to new users who sign up through your
              link and haven’t used Cashrivo before.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg font-medium hover:text-orange-500 transition-colors">
              How do I track my referrals?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Log into your dashboard and head to the Refer & Earn section.
              You’ll see real-time updates on signups, earnings, and bonus
              status.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-lg font-medium hover:text-orange-500 transition-colors">
              Are there any conditions for earning the bonus?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Yes, the referred user must complete a purchase through Cashrivo
              using a partner deal or coupon. Returns or cancellations may void
              the bonus.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-lg font-medium hover:text-orange-500 transition-colors">
              How do I share my referral link?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Go to your Refer & Earn dashboard, copy your unique link, and
              share it via WhatsApp, social media, email, or SMS.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default ReferFaqs;
