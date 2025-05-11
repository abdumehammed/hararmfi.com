import { useState } from 'react';
import translations from '../i18n/loanCalculatorTranslations';
import { useLanguage } from '../context/LanguageContext';
const LoanCalculator = ({ language = 'en' }) => {
    const t = translations[language] || translations.en;

    const [amount, setAmount] = useState('');
    const [interest, setInterest] = useState('');
    const [years, setYears] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState(null);
    const [schedule, setSchedule] = useState([]);

    const formatCurrency = (value) =>
        new Intl.NumberFormat(language === 'am' ? 'am-ET' : 'en-ET', {
            style: 'currency',
            currency: 'ETB',
        }).format(value);

    const calculateLoan = () => {
        const principal = parseFloat(amount);
        const monthlyInterest = parseFloat(interest) / 100 / 12;
        const totalPayments = parseFloat(years) * 12;

        if (principal && monthlyInterest && totalPayments) {
            const x = Math.pow(1 + monthlyInterest, totalPayments);
            const monthly = (principal * x * monthlyInterest) / (x - 1);
            setMonthlyPayment(monthly.toFixed(2));

            // Build schedule
            let balance = principal;
            const scheduleData = [];

            for (let i = 1; i <= totalPayments; i++) {
                const interestPayment = balance * monthlyInterest;
                const principalPayment = monthly - interestPayment;
                balance -= principalPayment;

                scheduleData.push({
                    month: i,
                    payment: monthly,
                    interest: interestPayment,
                    principal: principalPayment,
                    balance: balance > 0 ? balance : 0,
                });
            }
            setSchedule(scheduleData);
        } else {
            setMonthlyPayment(null);
            setSchedule([]);
        }
    };

    return (
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 mt-10">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">{t.title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                    <label className="block text-gray-700">{t.amount}</label>
                    <input
                        type="number"
                        className="w-full mt-1 p-2 border border-gray-300 rounded"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-gray-700">{t.interest}</label>
                    <input
                        type="number"
                        className="w-full mt-1 p-2 border border-gray-300 rounded"
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-gray-700">{t.term}</label>
                    <input
                        type="number"
                        className="w-full mt-1 p-2 border border-gray-300 rounded"
                        value={years}
                        onChange={(e) => setYears(e.target.value)}
                    />
                </div>
            </div>

            <button
                onClick={calculateLoan}
                className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
            >
                {t.calculate}
            </button>

            {monthlyPayment && (
                <div className="mt-6 text-center">
                    <p className="text-lg font-semibold text-green-700">
                        {t.monthlyPayment}:<br />
                        <span className="text-2xl">{formatCurrency(monthlyPayment)}</span>
                    </p>
                </div>
            )}

            {schedule.length > 0 && (
                <div className="mt-10 overflow-x-auto">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{t.schedule}</h3>
                    <table className="min-w-full border border-gray-200 text-sm">
                        <thead className="bg-blue-100 text-blue-900">
                            <tr>
                                <th className="px-2 py-1 border">{t.month}</th>
                                <th className="px-2 py-1 border">{t.payment}</th>
                                <th className="px-2 py-1 border">{t.interestPaid}</th>
                                <th className="px-2 py-1 border">{t.principalPaid}</th>
                                <th className="px-2 py-1 border">{t.balance}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {schedule.map((row) => (
                                <tr key={row.month} className="text-center">
                                    <td className="border px-2 py-1">{row.month}</td>
                                    <td className="border px-2 py-1">{formatCurrency(row.payment)}</td>
                                    <td className="border px-2 py-1">{formatCurrency(row.interest)}</td>
                                    <td className="border px-2 py-1">{formatCurrency(row.principal)}</td>
                                    <td className="border px-2 py-1">{formatCurrency(row.balance)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

// Example export
export default LoanCalculator;
