
const Disclaimer = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">Disclaimer</h1>
      <p className="mb-4">
        <strong>Cashrivo</strong> is a couponic website that shares the latest deals,
        coupons, and discounts from various online stores. While we aim to keep all
        offers accurate and up to date, we do not guarantee the validity or availability
        of any listed promotion.
      </p>
      <p className="mb-4">
        We do not sell products or services directly. Some links on our site are
        affiliate links, meaning we may earn a small commission when you make a
        purchase — at no extra cost to you.
      </p>
      <p className="mb-4">
        All trademarks, logos, and brand names are the property of their respective
        owners and are used for identification purposes only.
      </p>
      <p className="mb-4">
        Please verify any deal on the merchant’s website before purchasing. By using
        Cashrivo, you agree to this disclaimer and our{' '}
        <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a>{' '}
        and{' '}
        <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
      </p>
      <p className="mt-6 text-sm text-gray-600">
        For questions or support, contact us at{' '}
        <a href="mailto:connect@cashrivo.com" className="text-blue-600 hover:underline">
          connect@cashrivo.com
        </a>.
      </p>
    </div>
  );
};

export default Disclaimer;
