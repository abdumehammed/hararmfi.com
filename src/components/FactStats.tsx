import React from 'react';
import { FaUsers, FaMoneyBillWave, FaBuilding, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import CountUp from 'react-countup';
import 'swiper/css';
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
  customers: <FaUsers className="text-4xl text-orange-500" />,
  capital: <FaMoneyBillWave className="text-4xl text-orange-500" />,
  branches: <FaBuilding className="text-4xl text-orange-500" />,
  years: <FaClock className="text-4xl text-orange-500" />,
};

const FactStats: React.FC = () => {
  const { t } = useLanguage();

  const facts = [
    {
      icon: iconMap.customers,
      label: t('labelAactiveCustomers'),
      value: t('valueAactiveCustomers'),
      suffix: t('AactiveCustomerssuffix') || '',
    },
    {
      icon: iconMap.capital,
      label: t('labelTotalCapital'),
      value: t('valueTotalCapital'),
      suffix: t('TotalCapitalsuffix') || '',
    },
    {
      icon: iconMap.branches,
      label: t('labelBranches'),
      value: t('valueBranches'),
      suffix: t('Branchessuffix') || '',
    },
    {
      icon: iconMap.years,
      label: t('labelYearsOfOperation'),
      value: t('valueYearsOfOperation'),
      suffix: t('suffix') || '',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-gray-800"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('atAGlance') || 'At a Glance'}
        </motion.h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-10">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.20 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{fact.icon}</div>
              <h3 className="text-2xl font-semibold text-sky-900">
                <CountUp end={fact.value} duration={6} />{fact.suffix}
              </h3>
              <p className="text-gray-600">{fact.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden">
          <Swiper spaceBetween={16} slidesPerView={2} loop autoplay={{ delay: 1000 }}>
            {facts.map((fact, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6">
                  <div className="mb-4">{fact.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    <CountUp end={fact.value} duration={2} />{fact.suffix}
                  </h3>
                  <p className="text-gray-600">{fact.label}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FactStats;
