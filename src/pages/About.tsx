import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import TeamMemberCard from '../components/TeamMemberCard';
import { teamMembers } from '../data/team';
import { Shield, Heart, Users, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('aboutTitle')}</h1>
          <p className="text-xl max-w-3xl mx-auto">{t('aboutSubtitle')}</p>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3182747/pexels-photo-3182747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Our mission" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">{t('ourMission')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('missionText')}
              </p>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">{t('ourVision')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('visionText')}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">{t('ourValues')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:shadow-xl">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="text-blue-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Integrity</h3>
              <p className="text-gray-600">We operate with transparency and honesty in all our interactions and business practices.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:shadow-xl">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="text-blue-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Compassion</h3>
              <p className="text-gray-600">We approach our clients with empathy and understanding of their unique circumstances.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:shadow-xl">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Community</h3>
              <p className="text-gray-600">We believe in the power of communities to create sustainable economic change.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:shadow-xl">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-blue-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Innovation</h3>
              <p className="text-gray-600">We continuously seek new ways to improve our services and reach more people.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">Our History</h2>
          
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="relative pl-10 border-l-4 border-blue-300 py-2">
              <div className="absolute left-[-10px] top-4 w-5 h-5 rounded-full bg-blue-700"></div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">2010 - Our Beginning</h3>
              <p className="text-gray-600">
                MicroFinPlus was founded with a vision to provide accessible financial services to underserved communities in urban areas.
              </p>
            </div>
            
            <div className="relative pl-10 border-l-4 border-blue-300 py-2">
              <div className="absolute left-[-10px] top-4 w-5 h-5 rounded-full bg-blue-700"></div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">2015 - Expanding Our Reach</h3>
              <p className="text-gray-600">
                We expanded our operations to rural areas and introduced new financial products tailored to agricultural enterprises.
              </p>
            </div>
            
            <div className="relative pl-10 border-l-4 border-blue-300 py-2">
              <div className="absolute left-[-10px] top-4 w-5 h-5 rounded-full bg-blue-700"></div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">2018 - Digital Transformation</h3>
              <p className="text-gray-600">
                We embraced technology to make our services more accessible, launching our first mobile banking platform.
              </p>
            </div>
            
            <div className="relative pl-10 border-l-4 border-blue-300 py-2">
              <div className="absolute left-[-10px] top-4 w-5 h-5 rounded-full bg-blue-700"></div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">2021 - Financial Education Initiative</h3>
              <p className="text-gray-600">
                We launched our comprehensive financial education program, reaching thousands of individuals with critical financial knowledge.
              </p>
            </div>
            
            <div className="relative pl-10 py-2">
              <div className="absolute left-[-10px] top-4 w-5 h-5 rounded-full bg-blue-700"></div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">2025 - Today</h3>
              <p className="text-gray-600">
                Today, we continue to innovate and expand our reach, staying true to our mission of financial inclusion for all.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;