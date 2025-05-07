/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const res = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        toast('Message Sent!')
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          subject: '',
          message: '',
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
    <div className="flex flex-col md:flex-row min-h-screen py-8 px-4 md:px-16 lg:px-24 mt-5" id="#contactForm">
      {/* Left Section */}
      <div className="md:w-1/2 w-full bg-gradient-to-br from-[#FFF8F2] via-[#FFDADA] to-[#FBBF24] text-[#FF6B6B] p-10 relative flex flex-col rounded-4xl justify-center">
        {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}
        <div className="relative z-10 space-y-6">
          <p className="text-orange-400 font-bold uppercase">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Don’t hesitate to contact us for more information.
          </h1>
          <p className="text-[#27548A] text-lg">
            Have questions or need more information? We’re just a message
            away—reach out to us anytime
          </p>

          {/* Info blocks */}
          <div className="space-y-6 mt-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="bg-orange-500 rounded-md p-3">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">Head Office</h3>
                <p className="text-[#27548A] text-sm">
                  Noida, Uttar Pradesh - 201301
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-orange-500 rounded-md p-3">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">Email Us</h3>
                <p className="text-[#27548A] text-sm">connect@cashrivo.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-orange-500 rounded-md p-3">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.38 2.33.59 3.57.59.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.21 2.45.59 3.57.11.35.03.74-.24 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">Call us</h3>
                <p className="text-[#27548A] text-sm">+91-870-093-8341</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 w-full bg-white p-10 flex flex-col justify-center">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2e2b56]">
            Send us a message
          </h2>
          <p className="text-gray-600">
            Got a question or need assistance? Send us a message, and we’ll get
            back to you soon!
          </p>

          <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} className="p-3 rounded bg-gray-100 w-full" />
              <input name="company" type="text" placeholder="Company" value={formData.company} onChange={handleChange} className="p-3 rounded bg-gray-100 w-full" />
              <input name="phone" type="text" placeholder="Phone" value={formData.phone} onChange={handleChange} className="p-3 rounded bg-gray-100 w-full" />
              <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="p-3 rounded bg-gray-100 w-full" />
            </div>
            <input name="subject" type="text" placeholder="Subject" value={formData.subject} onChange={handleChange} className="p-3 rounded bg-gray-100 w-full" />
            <textarea name="message" rows={4} placeholder="Message" value={formData.message} onChange={handleChange} className="p-3 rounded bg-gray-100 w-full" />
            <button type="submit" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-3 rounded w-full">SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
