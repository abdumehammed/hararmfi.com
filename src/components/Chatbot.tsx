import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, ChevronUp, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getChatbotOptions } from '../data/chatbotOptions';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [showMenu, setShowMenu] = useState(true);
  const [conversationHistory, setConversationHistory] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  // Get chatbot options based on current language
  const chatbotOptions = getChatbotOptions(language);

  // Initialize chat with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 'welcome',
          text: t('chatbotWelcome'),
          isUser: false
        }
      ]);
    }
  }, [isOpen, messages.length, t]);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const toggleChat = () => {
    if (isMinimized) {
      setIsMinimized(false);
      setIsOpen(true);
    } else {
      setIsMinimized(!isMinimized);
    }
  };

  const closeChat = () => {
    setIsOpen(false);
    setShowMenu(true);
    setMessages([]);
  };

  const handleOptionClick = (option: typeof chatbotOptions[0]) => {
    setShowMenu(false);
    setConversationHistory([...conversationHistory, option.label]);
    
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: option.label,
      isUser: true
    };
    
    // Add bot response
    const botResponse: Message = {
      id: `bot-${Date.now()}`,
      text: option.response,
      isUser: false
    };
    
    setMessages(prev => [...prev, userMessage, botResponse]);
  };

  const handleBackToMenu = () => {
    setShowMenu(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: inputValue,
      isUser: true
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Simple matching to predefined questions or default response
    const matchedOption = chatbotOptions.find(option => 
      option.label.toLowerCase().includes(inputValue.toLowerCase()) ||
      inputValue.toLowerCase().includes(option.label.toLowerCase())
    );
    
    setTimeout(() => {
      const botResponse: Message = {
        id: `bot-${Date.now()}`,
        text: matchedOption ? matchedOption.response : t('chatbotDefaultResponse'),
        isUser: false
      };
      setMessages(prev => [...prev, botResponse]);
    }, 500);
    
    setInputValue('');
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-50 rounded-full shadow-lg transition-all duration-300 ease-in-out ${
          isMinimized 
            ? 'bg-orange-500 text-white w-16 h-16' 
            : 'bg-gray-300 text-gray-700 w-10 h-10'
        }`}
      >
        {isMinimized ? (
          <div className="flex items-center justify-center">
            <MessageCircle size={24} />
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <ChevronUp size={20} />
          </div>
        )}
      </button>
      
      {/* Chat window */}
      {isOpen && !isMinimized && (
        <div className="fixed bottom-20 right-6 w-80 sm:w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-40 overflow-hidden flex flex-col max-h-[500px] animate-slideUp">
          {/* Chat header */}
          <div className="bg-orange-500 text-white px-4 py-3 flex justify-between items-center">
            <h3 className="font-medium">{t('chatbotTitle')}</h3>
            <button onClick={closeChat} className="text-white hover:text-gray-200">
              <X size={18} />
            </button>
          </div>
          
          {/* Chat messages */}
          <div className="flex-grow p-4 overflow-y-auto max-h-[320px]">
            {!showMenu && (
              <button
                onClick={handleBackToMenu}
                className="flex items-center text-orange-500 hover:text-orange-600 mb-4"
              >
                <ArrowLeft size={16} className="mr-1" />
                {t('backToMenu')}
              </button>
            )}
            
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.isUser
                        ? 'bg-orange-500 text-white rounded-br-none'
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          {/* Quick options */}
          {showMenu && (
            <div className="px-4 py-2 border-t border-gray-100">
              <p className="text-xs text-gray-500 mb-2">{t('selectOption')}:</p>
              <div className="flex flex-col gap-2">
                {chatbotOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionClick(option)}
                    className="text-left px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-700 transition-colors"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Chat input */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-2 flex">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={t('chatbotPlaceholder')}
              className="flex-grow px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600 transition-colors"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;