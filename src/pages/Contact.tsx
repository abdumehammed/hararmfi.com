import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('contactTitle')}</h1>
          <p className="text-xl max-w-3xl mx-auto">{t('contactSubtitle')}</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <MapPin className="text-blue-700" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">
                123 Financial Street, Suite 100<br />
                New York, NY 10001
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Phone className="text-blue-700" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Call Us</h3>
              <p className="text-gray-600">
                +1 (555) 123-4567<br />
                Toll-free: 1-800-555-1234
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Mail className="text-blue-700" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Email Us</h3>
              <p className="text-gray-600">
                info@microfinplus.com<br />
                support@microfinplus.com
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Clock className="text-blue-700" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Business Hours</h3>
              <p className="text-gray-600">
                Monday-Friday: 9am-5pm<br />
                Saturday: 10am-2pm
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h2>

              {isSubmitted ? (
                <div className="bg-green-100 text-green-700 p-4 rounded-md mb-6 animate-fadeIn">
                  Thank you for your message! We'll get back to you shortly.
                </div>
              ) : null}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    {t('yourName')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    {t('yourEmail')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    {t('subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    {t('message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-800'
                    } transition-colors shadow-md`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      {t('send')}
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map or Image */}
            <div className="h-[500px] bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d187.4418859658269!2d42.12440170347691!3d9.311915198973805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1746447939941!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">How can I apply for a loan?</h3>
              <p className="text-gray-600">
                You can apply for a loan by visiting our nearest branch, calling our customer service line, or starting your application online through our website. Our team will guide you through the process and help you choose the right loan product for your needs.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">What documents do I need to apply for a loan?</h3>
              <p className="text-gray-600">
                Typically, you'll need to provide identification (such as a passport or driver's license), proof of address (such as a utility bill), proof of income (such as pay stubs or bank statements), and a business plan if you're applying for a business loan.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">How long does the loan approval process take?</h3>
              <p className="text-gray-600">
                Once you've submitted a complete application with all required documents, the approval process typically takes 2-3 business days for most loans. For smaller microloans, you may receive approval within 24 hours.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Do you offer financial education services?</h3>
              <p className="text-gray-600">
                Yes, we offer a variety of financial education resources including free workshops, one-on-one financial coaching, online courses, and printed materials on topics like budgeting, saving, credit management, and business planning.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;