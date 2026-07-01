import React from 'react';
import { Link } from 'react-router-dom';

const UV_Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="border border-gray-200 bg-white rounded-xl p-10 text-center shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome</h1>
          <p className="text-lg text-gray-700 mb-3">
            Your custom app is currently building and will be displayed here.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            The AI agent will build your custom app based on your selected features.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link
              to="/dashboard"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
            >
              Open Dashboard
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Sign In / Sign Up
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UV_Home;
