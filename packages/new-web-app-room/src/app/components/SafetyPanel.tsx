'use client';

import { useState } from 'react';
import { safetyData } from '../data/safetyData';

interface SafetyPanelProps {
  route: {
    from: string;
    to: string;
    transport: string;
  };
  onBack: () => void;
}

export default function SafetyPanel({ route, onBack }: SafetyPanelProps) {
  const [activeTab, setActiveTab] = useState('alerts');

  // Get safety data for this route
  const routeKey = `${route.from}-${route.to}`;
  const reverseRouteKey = `${route.to}-${route.from}`;
  const routeSafety = safetyData[routeKey] || safetyData[reverseRouteKey] || {
    alerts: [],
    tips: [],
    rating: 3
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4) return 'text-green-600';
    if (rating >= 3) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getRatingText = (rating: number) => {
    if (rating >= 4) return 'Generally Safe';
    if (rating >= 3) return 'Moderate Risk';
    return 'High Risk';
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-800"
        >
          <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <h2 className="text-lg font-semibold text-gray-800">Safety Info</h2>
        <div></div>
      </div>

      {/* Route Info */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="text-center mb-4">
          <h3 className="font-semibold text-gray-800">{route.from} → {route.to}</h3>
          <p className="text-sm text-gray-600 capitalize">{route.transport} route</p>
        </div>

        {/* Safety Rating */}
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="flex justify-center mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-6 h-6 ${
                  star <= routeSafety.rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className={`font-semibold ${getRatingColor(routeSafety.rating)}`}>
            {getRatingText(routeSafety.rating)}
          </div>
          <p className="text-xs text-gray-500 mt-1">Based on community reports</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('alerts')}
            className={`flex-1 py-3 px-4 text-sm font-medium ${
              activeTab === 'alerts'
                ? 'text-red-600 border-b-2 border-red-600 bg-red-50'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            🚨 Alerts ({routeSafety.alerts.length})
          </button>
          <button
            onClick={() => setActiveTab('tips')}
            className={`flex-1 py-3 px-4 text-sm font-medium ${
              activeTab === 'tips'
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            💡 Tips ({routeSafety.tips.length})
          </button>
        </div>

        <div className="p-4">
          {activeTab === 'alerts' && (
            <div className="space-y-3">
              {routeSafety.alerts.length > 0 ? (
                routeSafety.alerts.map((alert, index) => (
                  <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <div className="flex items-start space-x-2">
                      <span className="text-red-600 mt-0.5">⚠️</span>
                      <div className="flex-1">
                        <p className="text-sm text-red-800">{alert.message}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-red-600">{alert.location}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-red-500">{alert.time}</span>
                            <div className="flex items-center space-x-1">
                              <button className="text-xs text-red-600 hover:text-red-800">
                                👍 {alert.upvotes}
                              </button>
                              <button className="text-xs text-red-600 hover:text-red-800">
                                👎 {alert.downvotes}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <span className="text-4xl mb-2 block">✅</span>
                  <p>No recent safety alerts for this route</p>
                  <p className="text-sm mt-1">Stay vigilant and report any issues</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'tips' && (
            <div className="space-y-3">
              {routeSafety.tips.length > 0 ? (
                routeSafety.tips.map((tip, index) => (
                  <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <div className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-0.5">💡</span>
                      <div className="flex-1">
                        <p className="text-sm text-blue-800">{tip.message}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-blue-600">{tip.category}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-blue-500">{tip.time}</span>
                            <div className="flex items-center space-x-1">
                              <button className="text-xs text-blue-600 hover:text-blue-800">
                                👍 {tip.upvotes}
                              </button>
                              <button className="text-xs text-blue-600 hover:text-blue-800">
                                👎 {tip.downvotes}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <span className="text-4xl mb-2 block">💡</span>
                  <p>No safety tips available yet</p>
                  <p className="text-sm mt-1">Be the first to share helpful advice</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="bg-red-50 rounded-lg p-4">
        <h3 className="font-medium text-red-800 mb-2">🚨 Emergency Contacts</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="text-red-700">
            <strong>Police:</strong> 199
          </div>
          <div className="text-red-700">
            <strong>Emergency:</strong> 112
          </div>
          <div className="text-red-700">
            <strong>LASTMA:</strong> 0800-LASTMA
          </div>
          <div className="text-red-700">
            <strong>Fire Service:</strong> 199
          </div>
        </div>
      </div>
    </div>
  );
}
