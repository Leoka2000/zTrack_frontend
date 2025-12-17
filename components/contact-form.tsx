"use client"
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-neutral-50 p-8 flex items-center justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Heading */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold grotesk text-gray-800 mb-2">
            Send Us
          </h1>
          <h2 className="text-5xl md:text-6xl grotesk font-bold mb-6" style={{ color: '#82a816' }}>
            A Message
          </h2>
          <p className="text-gray-600 text-lg">
            Fill out the form below and our team will<br />
            get back to you as soon as possible.
          </p>
        </div>

        {/* Right side - Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Name <span style={{ color: '#82a816' }}>*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name Surname"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-300 focus:border-transparent"
              />
            </div>

    
            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Email <span style={{ color: '#82a816' }}>*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@mail.com"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-300 focus:border-transparent"
              />
            </div>

     
            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Message <span style={{ color: '#82a816' }}>*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                rows="5"
                className="w-full px-4 py-3 border focus:ring-2 focus:ring-lime-300 border-gray-200 rounded-lg focus:outline-none focus:ring-2  focus:border-transparent resize-none"
              />
            </div>

 
            <button
              onClick={handleSubmit}
              className="group cursor-pointer w-full text-lg h-14 font-semibold rounded-full transition-colors flex items-center justify-between px-6"
              style={{ backgroundColor: '#d7f448' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#c5e030'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#d7f448'}
            >
              <span className="text-neutral-900">Send It</span>

              <span className="p-2 rounded-full bg-neutral-900 flex items-center justify-center">
                <ArrowRight
                  size={90}
                  strokeWidth={2.5}
                  className="w-3 h-4 text-neutral-200 transition-transform duration-300 group-hover:-rotate-45"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}