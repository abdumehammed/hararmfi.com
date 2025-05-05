import React from 'react';
import { Service } from '../types';
import { getIconComponent } from '../data/services';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = getIconComponent(service.icon);
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
      <div className="rounded-full bg-blue-100 w-14 h-14 flex items-center justify-center mb-4">
        <IconComponent className="text-blue-700" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-blue-900">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
};

export default ServiceCard;