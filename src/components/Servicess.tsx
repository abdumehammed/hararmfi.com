import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ServiceCard from './ServiceCard';
import Saving from '/src/images/saving_product.jpg';
import ifb from '/src/images/islam.png';
import loan from '/src/images/loan.jpg';

import { motion } from 'framer-motion';


const Servicess: React.FC = () => {
    const { t } = useLanguage();

    const features = [
        {
            icon: <img src={Saving} alt="Saving" className="w-30 h-30 mx-auto p-2 rounded-t-2xl transition-all duration-300 hover:scale-105" />,
            title: t('service_title1'),
            paragraph: t('service1_paragraph1'),
        },
        {

            icon: <img src={loan} alt="Saving" className="w-30 h-30 mx-auto p-1 rounded-t-2xl " />,
            title: t('service2_title'),
            paragraph: t('service2_paragraph'),
        },
        {
            icon: <img src={ifb} alt="Saving" className="w-30 h-30 mx-auto  p-1 rounded-t-2xl" />,
            title: t('service3_title'),
            paragraph: t('service3_paragraph'),
        },
    ];

    return (
        <>
            <section className="bg-gradient-to-b from-blue-50 to-orange py-12 ">
                <div className="container mx-auto px-4 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                        {features.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white border border-blue-200 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300  rounded-2xl text-center"
                            >
                                <div className="flex justify-center">
                                    <div className='flex w-full rounded '>{item.icon}</div>
                                    <div className="hover:scale-110 transition-transform duration-300">
                                        <div className="text-white text-2xl"></div>
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold text-blue-800  ">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed p-3  ">{item.paragraph}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Servicess;