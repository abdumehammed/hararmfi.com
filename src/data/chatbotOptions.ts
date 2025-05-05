import { ChatbotOption } from '../types';

export const chatbotOptions: ChatbotOption[] = [
  {
    id: '1',
    label: 'How do I apply for a loan?',
    response: 'To apply for a loan, you need to visit our nearest branch with your ID, proof of address, and proof of income. Alternatively, you can start your application online through our website. Our team will guide you through the process and help you choose the right loan product for your needs.'
  },
  {
    id: '2',
    label: 'What are your interest rates?',
    response: 'Our interest rates vary depending on the loan product, amount, term, and your credit profile. For microloans, our rates typically range from 12% to 18% annually. For savings accounts, we offer competitive rates starting from 4% annually. Please contact our customer service or visit a branch for personalized rate information.'
  },
  {
    id: '3',
    label: 'How long does loan approval take?',
    response: "Once you've submitted a complete application with all required documents, the approval process typically takes 2-3 business days for most loans. For smaller microloans, you may receive approval within 24 hours. After approval, fund disbursement usually happens within 1-2 additional business days."
  },
  {
    id: '4',
    label: 'What financial education resources do you offer?',
    response: 'We offer a variety of financial education resources including free workshops, one-on-one financial coaching, online courses, and printed materials on topics like budgeting, saving, credit management, and business planning. Check our events calendar for upcoming workshops or speak with an advisor to schedule a personalized session.'
  },
  {
    id: '5',
    label: 'How can I open a savings account?',
    response: 'Opening a savings account is simple. You can visit any of our branches with your identification documents and an initial deposit (minimum amount varies by account type). You can also start the process online and finish at a branch. We offer various savings products designed for different goals and needs.'
  }
];