import { Service } from '../types';
import { 
  BarChart4, 
  PiggyBank, 
  Landmark, 
  BadgePercent, 
  HandCoins, 
  UsersRound 
} from 'lucide-react';

export const services: Service[] = [
  {
    id: '1',
    title: 'Microloans',
    description: 'Small loans designed to help entrepreneurs start or grow their businesses and individuals meet their financial needs.',
    icon: 'HandCoins'
  },
  {
    id: '2',
    title: 'Savings Accounts',
    description: 'Secure savings accounts with competitive interest rates to help you build financial security for the future.',
    icon: 'PiggyBank'
  },
  {
    id: '3',
    title: 'Financial Education',
    description: 'Workshops and resources designed to improve financial literacy and money management skills.',
    icon: 'BarChart4'
  },
  {
    id: '4',
    title: 'Group Lending',
    description: 'Collaborative lending programs that leverage community bonds to provide access to capital.',
    icon: 'UsersRound'
  },
  {
    id: '5',
    title: 'Insurance Products',
    description: 'Affordable insurance options to protect your family, health, and business against unexpected events.',
    icon: 'Landmark'
  },
  {
    id: '6',
    title: 'Credit Building',
    description: 'Programs designed to help establish and improve your credit history for better financial opportunities.',
    icon: 'BadgePercent'
  }
];

export const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'HandCoins':
      return HandCoins;
    case 'PiggyBank':
      return PiggyBank;
    case 'BarChart4':
      return BarChart4;
    case 'UsersRound':
      return UsersRound;
    case 'Landmark':
      return Landmark;
    case 'BadgePercent':
      return BadgePercent;
    default:
      return HandCoins;
  }
};