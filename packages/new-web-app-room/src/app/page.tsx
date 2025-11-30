'use client';

import { useState } from 'react';
import FareChecker from './components/FareChecker';
import ResultsCard from './components/ResultsCard';
import SafetyPanel from './components/SafetyPanel';
import ReportForm from './components/ReportForm';

export default function HustleRoute() {
  const [currentView, setCurrentView] = useState('checker');
  const [fareResults, setFareResults] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState(null);

  const handleFareCheck = (results: any) => {
    setFareResults(results);
    setCurrentView('results');
  };

  const handleViewSafety = (route: any) => {
    setSelectedRoute(route);
    setCurrentView('safety');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">HR</span>
              </div>
              <h1 className="text-xl font-bold text-gray-800">HustleRoute</h1>
            </div>
            <button
              onClick={() => setCurrentView('report')}
              className="bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
            >
              Report
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-4 py-6">
        {currentView === 'checker' && (
          <FareChecker onFareCheck={handleFareCheck} />
        )}
        
        {currentView === 'results' && fareResults && (
          <ResultsCard 
            results={fareResults}
            onBack={() => setCurrentView('checker')}
            onViewSafety={handleViewSafety}
          />
        )}
        
        {currentView === 'safety' && selectedRoute && (
          <SafetyPanel 
            route={selectedRoute}
            onBack={() => setCurrentView('results')}
          />
        )}
        
        {currentView === 'report' && (
          <ReportForm 
            onBack={() => setCurrentView('checker')}
            onSubmit={() => {
              alert('Report submitted! Thank you for helping the community.');
              setCurrentView('checker');
            }}
          />
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 max-w-md mx-auto">
        <div className="flex justify-around py-2">
          <button
            onClick={() => setCurrentView('checker')}
            className={`flex flex-col items-center py-2 px-4 ${
              currentView === 'checker' ? 'text-green-600' : 'text-gray-500'
            }`}
          >
            <span className="text-xs">Check Fare</span>
          </button>
          <button
            onClick={() => setCurrentView('report')}
            className={`flex flex-col items-center py-2 px-4 ${
              currentView === 'report' ? 'text-green-600' : 'text-gray-500'
            }`}
          >
            <span className="text-xs">Report</span>
          </button>
        </div>
      </nav>
    </div>
  );
}


