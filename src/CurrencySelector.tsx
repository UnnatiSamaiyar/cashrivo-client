import { useEffect, useState } from 'react';

const CurrencySelector = () => {
  const [currencies, setCurrencies] = useState<Record<string, number>>({});
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  useEffect(() => {
    const fetchRates = async () => {
      const res = await fetch(`http://localhost:5000/api/currency-rates?base=USD`);
      const data = await res.json();
      setCurrencies(data.rates || {});
    };
    fetchRates();
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto p-4">
      <label className="block mb-2 text-sm font-medium text-gray-700">Select Currency</label>
      <select
        value={selectedCurrency}
        onChange={(e) => setSelectedCurrency(e.target.value)}
        className="w-full p-2 border rounded"
      >
        {Object.keys(currencies).map((code) => (
          <option key={code} value={code}>
            {code} - {currencies[code].toFixed(2)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;
