import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

import {
    Handshake,
    CheckCircle,
    Target,
    Laptop,
} from 'lucide-react';
import {
    BarChart4,
    PiggyBank,
    Landmark,
    BadgePercent,
    HandCoins,
    UsersRound
} from 'lucide-react';

const WhyUsSection: React.FC = () => {
    const { t } = useLanguage();

    const features = [
        {
            icon: <Handshake className="text-orange-500  w-10 h-10 mx-auto" />,
            title: t('feature1_title'),
            paragraph: t('feature1_paragraph'),
        },
        {
            icon: <CheckCircle className="text-orange-500  w-10 h-10 mx-auto" />,
            title: t('feature2_title'),
            paragraph: t('feature2_paragraph'),
        },
        {
            icon: <Target className="text-orange-500 w-10 h-10 mx-auto" />,
            title: t('feature3_title'),
            paragraph: t('feature3_paragraph'),
        },
        {

            icon: <Laptop className="text-orange-500 w-10 h-10 mx-auto" />,
            title: t('feature4_title'),
            paragraph: t('feature4_paragraph'),
        },
    ];

    return (
        <>
            <section className="bg-gradient-to-b from-blue-50 to-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white border border-blue-200 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 p-6 rounded-2xl text-center"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="bg-orange-200 rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-300">
                                        <div className="text-white text-2xl">{item.icon}</div>
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold text-blue-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.paragraph}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyUsSection;