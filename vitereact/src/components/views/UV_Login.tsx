// ===== 3. CORRECTED LOGIN VIEW EXAMPLE =====
// Shows proper Zustand usage in views

import React, { useState } from 'react';
import { useAppStore } from '@/store/main';

const UV_Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  
  // CRITICAL: Individual selectors, no object destructuring
  const isLoading = useAppStore(state => state.authentication_state.authentication_status.is_loading);
  const errorMessage = useAppStore(state => state.authentication_state.error_message);
  const loginUser = useAppStore(state => state.login_user);
  const registerUser = useAppStore(state => state.register_user);
  const clearAuthError = useAppStore(state => state.clear_auth_error);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearAuthError();
    
    try {
      if (isRegisterMode) {
        await registerUser(email, password, name);
      } else {
        await loginUser(email, password);
      }
    } catch (error) {
      // Error is handled in store
      console.error('Authentication error:', error);
    }
  };

  const toggleMode = () => {
    setIsRegisterMode(!isRegisterMode);
    clearAuthError();
    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-ivory py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-cognac-brown font-smut uppercase tracking-wide">
              {isRegisterMode ? 'Create your account' : 'Sign in to your account'}
            </h2>
          </div>
          
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {errorMessage && (
              <div className="bg-rust-orange/10 border border-rust-orange text-rust-orange px-4 py-3 rounded-md">
                <p className="text-sm font-smut-full">{errorMessage}</p>
              </div>
            )}
            
            <div className="space-y-4">
              {isRegisterMode && (
                <div>
                  <label htmlFor="name" className="sr-only">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required={isRegisterMode}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="relative block w-full px-3 py-2 border border-cognac-brown/20 placeholder-cognac-brown/50 text-cognac-brown rounded-md focus:outline-none focus:ring-forest-green focus:border-forest-green focus:z-10 sm:text-sm bg-white font-smut-full"
                  />
                </div>
              )}
              
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="relative block w-full px-3 py-2 border border-cognac-brown/20 placeholder-cognac-brown/50 text-cognac-brown rounded-md focus:outline-none focus:ring-forest-green focus:border-forest-green focus:z-10 sm:text-sm bg-white font-smut-full"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete={isRegisterMode ? "new-password" : "current-password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="relative block w-full px-3 py-2 border border-cognac-brown/20 placeholder-cognac-brown/50 text-cognac-brown rounded-md focus:outline-none focus:ring-forest-green focus:border-forest-green focus:z-10 sm:text-sm bg-white font-smut-full"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-ivory bg-forest-green hover:bg-forest-green/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-forest-green disabled:opacity-50 disabled:cursor-not-allowed font-smut uppercase tracking-wider transition-colors"
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-ivory" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {isRegisterMode ? 'Creating account...' : 'Signing in...'}
                  </span>
                ) : (
                  isRegisterMode ? 'Create account' : 'Sign in'
                )}
              </button>
            </div>
            
            <div className="text-center">
              <button
                type="button"
                onClick={toggleMode}
                className="text-antique-gold hover:text-antique-gold/80 text-sm font-medium font-smut uppercase tracking-wide transition-colors"
              >
                {isRegisterMode 
                  ? 'Already have an account? Sign in' 
                  : "Don't have an account? Sign up"
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UV_Login;