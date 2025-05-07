
import { useState } from 'react';
import bgImg from '../../assets/newsletter-banner.png'; // Adjust path if needed
import { toast } from 'sonner';

const Newsletter = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [formData, setFormData] = useState({
   
      email: '',
    });
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
      setFormData(prev => ({
        ...prev,
        [e.target.name]: e.target.value
      }));
    };
  
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      try {
        const res = await fetch( `${backendUrl}/api/newsletter`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
  
        const data = await res.json();
        if (res.ok) {
          toast('Subscribed!')
          setFormData({
            email: '',
          });
        } else {
          alert(data.error || 'Submission failed');
        }
      } catch (err) {
        console.error(err);
        toast('Server error');
      }
    };
  return (
    <div
      className="w-full bg-cover bg-center py-16 px-4"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="bg-transparent bg-opacity-80 max-w-4xl mx-auto rounded-xl p-8 text-center ">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] mb-2">
          Stay in the Loop!
        </h2>
        <p className="text-[#1a1a1a] mb-6">
          Subscribe to our newsletter for the latest updates, insights, and offers—
          delivered straight to your inbox.
        </p>

        <form className="flex flex-col md:flex-row items-center gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            name='email'
            className="flex-grow px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full md:w-auto"
            value={formData.email} onChange={handleChange}
         />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition-all w-full md:w-auto"
          >
            Subscribe!!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
