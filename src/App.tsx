// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
//end of import

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="flex flex-col min-h-screen ">
          <Header />
          <main className="flex-grow">
            <div className="container mx-auto px-4 py-4">
              {/* Add any additional content or components here */}
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <Chatbot />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;