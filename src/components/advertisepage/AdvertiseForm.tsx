import { useState } from "react";
import { toast } from "sonner";

const AdvertiseForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const subjects = ["Advertisement Inquiry", "Collaboration", "Product Promotion", "Other"];

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await fetch('http://localhost:5000/api/advertisement', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          });
    
          const data = await res.json();
          if (res.ok) {
            toast('Message Sent!')
            setFormData({
              name: '',
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
        <div className="min-h-screen w-full bg-gradient-to-br from-[#FFF8F2] via-[#FFDADA] to-[#FBBF24] flex items-center justify-center p-4 sm:p-10">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-8 sm:p-12 space-y-6"
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#27548A]">
                    Advertise With Us 🚀
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className="block mb-1 text-sm font-medium text-[#27348A]">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-[#FFDADA] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] bg-[#FFF8F2] text-[#27348A]"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-[#27348A]">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-[#FFDADA] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] bg-[#FFF8F2] text-[#27348A]"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className="block mb-1 text-sm font-medium text-[#27348A]">Contact Number</label>
                        <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-[#FFDADA] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] bg-[#FFF8F2] text-[#27348A]"
                        />
                    </div>

                    <div>
                    <label className="block mb-1 text-sm font-medium text-[#27348A]">Subject</label>
                    <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#FFDADA] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] bg-[#FFF8F2] text-[#27348A]"
                    >
                        <option value="" disabled>Select a subject</option>
                        {subjects.map((sub, idx) => (
                            <option key={idx} value={sub}>
                                {sub}
                            </option>
                        ))}
                    </select>
                </div>
                </div>

                

                <div>
                    <label className="block mb-1 text-sm font-medium text-[#27348A]">Message</label>
                    <textarea
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#FFDADA] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] bg-[#FFF8F2] text-[#27348A] resize-none"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#FF6B6B] hover:bg-[#FBBF24] text-white font-semibold py-3 rounded-xl transition-all duration-300 hover: cursor-pointer "
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AdvertiseForm;
