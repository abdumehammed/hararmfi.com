import React from 'react';
import { getIconComponent } from '../data/services';
import { Service } from '../types';
import { useLanguage } from '../context/LanguageContext'; // Import useLanguage

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = getIconComponent(service.icon);
  const { t } = useLanguage(); // Use the hook

  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">
        {/* icon for the service card component  */}
        <Icon className="w-12 h-12 text-blue-700" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-blue-900">{t(service.title)}</h3>{/* */}
      <p className="text-gray-500">{t(service.description)}</p>
    </div>
  );
};

export default ServiceCard;