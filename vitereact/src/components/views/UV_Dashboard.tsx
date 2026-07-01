// Shows proper auth state access and logout

import React from 'react';
import { Link } from 'react-router-dom';
import { useAppStore } from '@/store/main';

const UV_Dashboard: React.FC = () => {
  const currentUser = useAppStore(state => state.authentication_state.current_user);
  const logoutUser = useAppStore(state => state.logout_user);

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
              </div>
              <div className="flex items-center space-x-4">
                <Link 
                  to="/"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Home
                </Link>
                {currentUser ? (
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
                  >
                    Sign out
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    Sign in
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
        
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg p-8">
              <div className="text-center">
                {currentUser ? (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Welcome back, {currentUser.name || currentUser.email}!
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Your session is active and the dashboard is using your Better Auth account data.
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                      <p className="text-blue-700 text-sm">
                        <strong>Email:</strong> {currentUser.email}
                      </p>
                      <p className="text-blue-700 text-sm mt-1">
                        <strong>User ID:</strong> {currentUser.id}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Dashboard Preview
                    </h2>
                    <p className="text-gray-600 mb-6">
                      This starter dashboard is public-first. Sign in only if your app needs account-backed data or protected actions.
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <Link
                        to="/login"
                        className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                      >
                        Sign In / Sign Up
                      </Link>
                      <Link
                        to="/"
                        className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Back Home
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default UV_Dashboard;
