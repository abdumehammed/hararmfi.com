
import React, { useState } from 'react';

type Product = {
    id: number;
    title: string;
    description: string;
    image: string;
};

const products = {
    loan: [
        {
            id: 1,
            title: 'Check payment solution scheme (CPSS)',
            description: 'A loan service to facilitate check-based transactions with flexible repayment options.',
            image: '/images/loan1.jpg',
        },
        // Add more loan products as needed
    ],
    saving: [
        {
            id: 2,
            title: 'Student Solution Saving Account',
            description: 'A dedicated saving plan tailored for students to manage their education finances.',
            image: '/images/saving1.jpg',
        },
        {
            id: 3,
            title: 'Smart Children Account',
            description: 'Smart savings plan to help parents save for their children’s future.',
            image: '/images/saving2.jpg',
        },
        {
            id: 4,
            title: 'Smart Children Account',
            description: 'Smart savings plan to help parents save for their children’s future.',
            image: '/images/saving2.jpg',
        },
        {
            id: 5,
            title: 'Smart Children Account',
            description: 'Smart savings plan to help parents save for their children’s future.',
            image: '/images/saving2.jpg',
        },
        {
            id: 6,
            title: 'Smart Children Account',
            description: 'Smart savings plan to help parents save for their children’s future.',
            image: '/images/saving2.jpg',
        },

        // Add more saving products
    ],
    islamic: [
        {
            id: 4,
            title: 'Women Special Savings Account',
            description: 'Islamic saving plan tailored for empowering women financially.',
            image: '/images/islamic1.jpg',
        },
        // Add more islamic products
    ]
};

const Tabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'loan' | 'saving' | 'islamic'>('saving');

    return (
        <div className="p-6">
            <h1 className="text-center text-2xl font-semibold mb-6">What can we help you ?</h1>

            <div className="flex justify-center space-x-4 mb-8">
                {['loan', 'saving', 'islamic'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab as 'loan' | 'saving' | 'islamic')}
                        className={`px-4 py-2 rounded-full font-medium ${activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'
                            }`}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products[activeTab].map((product) => (
                    <div
                        key={product.id}
                        className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
                    >
                        <img src={product.image} alt={product.title} className="h-48 w-full object-cover" />
                        <div className="p-4">
                            <h2 className="text-lg font-bold mb-2">{product.title}</h2>
                            <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
