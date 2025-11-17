import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-charcoal-950 transition-colors duration-300">
            <Navbar />
            
            <main className="min-h-screen">
              <Suspense 
                fallback={
                  <div className="min-h-screen flex items-center justify-center">
                    <Loader />
                  </div>
                }
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route 
                    path="*" 
                    element={
                      <div className="min-h-screen flex items-center justify-center">
                        <div className="text-center">
                          <h1 className="text-4xl font-playfair font-bold text-charcoal-900 dark:text-white mb-4">
                            404 - Page Not Found
                          </h1>
                          <p className="text-lg text-charcoal-700 dark:text-charcoal-300 mb-8">
                            The page you're looking for doesn't exist.
                          </p>
                          <a 
                            href="/" 
                            className="btn-primary"
                          >
                            Return Home
                          </a>
                        </div>
                      </div>
                    } 
                  />
                </Routes>
              </Suspense>
            </main>

            <Footer />
            
            {/* Toast Notifications */}
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: 'var(--toast-bg)',
                  color: 'var(--toast-color)',
                  border: '1px solid var(--toast-border)',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                },
                success: {
                  iconTheme: {
                    primary: '#d4af37',
                    secondary: '#fff',
                  },
                },
                error: {
                  iconTheme: {
                    primary: '#ef4444',
                    secondary: '#fff',
                  },
                },
              }}
            />

            {/* Custom CSS variables for toast theming */}
            <style jsx>{`
              :root {
                --toast-bg: #ffffff;
                --toast-color: #1a1a1a;
                --toast-border: #e5e7eb;
              }
              
              .dark {
                --toast-bg: #2d2d2d;
                --toast-color: #ffffff;
                --toast-border: #4f4f4f;
              }
            `}</style>
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;