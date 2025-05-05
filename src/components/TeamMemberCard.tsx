import React from 'react';
import { TeamMember } from '../types';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={member.imageUrl} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-900">{member.name}</h3>
        <p className="text-yellow-600 font-medium mb-3">{member.position}</p>
        <p className="text-gray-600">{member.bio}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;