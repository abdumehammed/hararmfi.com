import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('servicesTitle')}</h1>
          <p className="text-xl max-w-3xl mx-auto">{t('servicesSubtitle')}</p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Service */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Microloan Programs</h2>
              <p className="text-gray-600 mb-6">
                Our microloan programs are designed to provide accessible financing to entrepreneurs and small businesses that may not qualify for traditional bank loans. We believe in the power of financial inclusion to drive economic growth and community development.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Loans ranging from $500 to $15,000</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Competitive interest rates starting at 6% APR</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Flexible repayment terms tailored to your business needs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">No collateral required for loans under $5,000</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Business coaching and support included with every loan</span>
                </li>
              </ul>
              
              <button className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors shadow-md">
                Apply for a Microloan
              </button>
            </div>
            <div className="order-1 lg:order-2 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Microloan programs" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">Our Simple Process</h2>
          
          <div className="flex flex-col md:flex-row justify-between max-w-4xl mx-auto">
            <div className="text-center px-4 mb-8 md:mb-0">
              <div className="w-16 h-16 rounded-full bg-blue-700 text-white flex items-center justify-center text-2xl font-bold mx-auto">1</div>
              <div className="hidden md:block h-1 w-full bg-blue-200 absolute left-1/2 top-8 -z-10"></div>
              <h3 className="text-xl font-semibold mt-4 mb-2">Apply</h3>
              <p className="text-gray-600">Complete our simple application process online or in person.</p>
            </div>
            
            <div className="text-center px-4 mb-8 md:mb-0">
              <div className="w-16 h-16 rounded-full bg-blue-700 text-white flex items-center justify-center text-2xl font-bold mx-auto">2</div>
              <h3 className="text-xl font-semibold mt-4 mb-2">Consult</h3>
              <p className="text-gray-600">Meet with our financial advisors to discuss your needs and options.</p>
            </div>
            
            <div className="text-center px-4 mb-8 md:mb-0">
              <div className="w-16 h-16 rounded-full bg-blue-700 text-white flex items-center justify-center text-2xl font-bold mx-auto">3</div>
              <h3 className="text-xl font-semibold mt-4 mb-2">Approval</h3>
              <p className="text-gray-600">Receive your approval decision, typically within 2-3 business days.</p>
            </div>
            
            <div className="text-center px-4">
              <div className="w-16 h-16 rounded-full bg-blue-700 text-white flex items-center justify-center text-2xl font-bold mx-auto">4</div>
              <h3 className="text-xl font-semibold mt-4 mb-2">Funding</h3>
              <p className="text-gray-600">Get your funds disbursed and ongoing support from our team.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">Client Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 relative">
              <div className="text-5xl text-blue-200 absolute top-4 left-4">"</div>
              <div className="pt-6">
                <p className="text-gray-600 mb-6 relative z-10">
                  The microloan I received helped me expand my small bakery business. The financial education workshops also taught me how to better manage my finances and plan for growth.
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Maria Garcia" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Maria Garcia</h4>
                    <p className="text-sm text-gray-500">Small Business Owner</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 relative">
              <div className="text-5xl text-blue-200 absolute top-4 left-4">"</div>
              <div className="pt-6">
                <p className="text-gray-600 mb-6 relative z-10">
                  As a farmer, seasonal cash flow was always a challenge. MicroFinPlus provided me with a tailored agricultural loan that accommodated my harvest cycle, which has been a game-changer.
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="John Mwangi" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">John Mwangi</h4>
                    <p className="text-sm text-gray-500">Farmer</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 relative">
              <div className="text-5xl text-blue-200 absolute top-4 left-4">"</div>
              <div className="pt-6">
                <p className="text-gray-600 mb-6 relative z-10">
                  The group lending program allowed our women's cooperative to access capital we couldn't get elsewhere. We've been able to start a successful textile business that employs 12 women.
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src="https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Priya Sharma" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Priya Sharma</h4>
                    <p className="text-sm text-gray-500">Cooperative Leader</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Contact us today to learn more about our services and how we can help you achieve your financial goals.
          </p>
          <button className="px-8 py-3 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors shadow-lg text-lg">
            Contact Our Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;