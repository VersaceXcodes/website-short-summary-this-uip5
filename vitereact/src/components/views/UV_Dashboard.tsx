// Shows proper auth state access and logout

import React from 'react';
import { Link } from 'react-router-dom';
import { useAppStore } from '@/store/main';

const UV_Dashboard: React.FC = () => {
  // CRITICAL: Individual selectors, no object destructuring
  const currentUser = useAppStore(state => state.authentication_state.current_user);
  const logoutUser = useAppStore(state => state.logout_user);

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <>
      <div className="min-h-screen bg-ivory">
        {/* Navigation */}
        <nav className="bg-forest-green shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-smut uppercase tracking-wide text-ivory">Dashboard</h1>
              </div>
              <div className="flex items-center space-x-4">
                <Link 
                  to="/profile"
                  className="text-ivory/80 hover:text-antique-gold px-3 py-2 rounded-md text-sm font-smut uppercase tracking-wide transition-colors"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-burgundy text-white px-4 py-2 rounded-md text-sm font-smut uppercase tracking-wide hover:bg-burgundy/90 transition-colors shadow-sm"
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Main content */}
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-cognac-brown/20 rounded-lg p-8 bg-white/50">
              <div className="text-center">
                <h2 className="text-3xl font-smut uppercase tracking-wide text-cognac-brown mb-4">
                  Welcome back, {currentUser?.name}!
                </h2>
                <p className="font-smut-full text-cognac-brown/80 mb-6 text-lg">
                  This is your protected dashboard. You can only see this because you're authenticated.
                </p>
                <div className="bg-forest-green/5 border border-forest-green/20 rounded-md p-6 max-w-md mx-auto">
                  <p className="text-forest-green text-lg font-smut-full mb-2">
                    <strong className="font-bold">Email:</strong> {currentUser?.email}
                  </p>
                  <p className="text-forest-green text-lg font-smut-full">
                    <strong className="font-bold">User ID:</strong> {currentUser?.id}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default UV_Dashboard;