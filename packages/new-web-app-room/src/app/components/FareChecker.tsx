'use client';

import { useState } from 'react';
import { fareData } from '../data/fareData';

interface FareCheckerProps {
  onFareCheck: (results: any) => void;
}

export default function FareChecker({ onFareCheck }: FareCheckerProps) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [transport, setTransport] = useState('bus');

  const locations = [
    'Ikeja', 'Victoria Island', 'Lekki', 'Surulere', 'Yaba', 'Ikoyi',
    'Ajah', 'Gbagada', 'Ketu', 'Mile 2', 'Oshodi', 'Alaba', 'Festac',
    'Apapa', 'Mushin', 'Agege', 'Ikorodu', 'Epe', 'Badagry'
  ];

  const transportTypes = [
    { id: 'bus', name: 'Bus', icon: '🚌' },
    { id: 'keke', name: 'Keke (Tricycle)', icon: '🛺' },
    { id: 'okada', name: 'Okada (Bike)', icon: '🏍️' },
    { id: 'bolt', name: 'Bolt/Uber', icon: '🚗' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!from || !to) return;

    // Get base fare from data
    const routeKey = `${from}-${to}`;
    const reverseRouteKey = `${to}-${from}`;
    
    const baseFare = fareData[routeKey] || fareData[reverseRouteKey] || {
      bus: { min: 200, max: 400 },
      keke: { min: 150, max: 300 },
      okada: { min: 100, max: 250 },
      bolt: { min: 800, max: 1500 }
    };

    // Calculate results with alternatives
    const selectedFare = baseFare[transport];
    const alternatives = Object.entries(baseFare)
      .filter(([type]) => type !== transport)
      .map(([type, fare]) => ({
        type,
        name: transportTypes.find(t => t.id === type)?.name || type,
        icon: transportTypes.find(t => t.id === type)?.icon || '🚗',
        fare,
        savings: selectedFare.min - fare.min
      }))
      .sort((a, b) => a.fare.min - b.fare.min);

    const results = {
      from,
      to,
      transport,
      transportName: transportTypes.find(t => t.id === transport)?.name,
      transportIcon: transportTypes.find(t => t.id === transport)?.icon,
      fare: selectedFare,
      alternatives,
      route: { from, to, transport }
    };

    onFareCheck(results);
  };

  return (
    <div className="space-y-6">
      {/* Welcome Message */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Check Transport Fare</h2>
        <p className="text-gray-600">Get instant fare estimates and find cheaper alternatives</p>
      </div>

      {/* Fare Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 space-y-4">
        {/* From Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          >
            <option value="">Select starting location</option>
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        {/* To Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          >
            <option value="">Select destination</option>
            {locations.filter(loc => loc !== from).map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        {/* Transport Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Transport Type</label>
          <div className="grid grid-cols-2 gap-2">
            {transportTypes.map(type => (
              <button
                key={type.id}
                type="button"
                onClick={() => setTransport(type.id)}
                className={`p-3 rounded-lg border-2 transition-colors ${
                  transport === type.id
                    ? 'border-green-500 bg-green-50 text-green-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-lg mb-1">{type.icon}</div>
                <div className="text-xs font-medium">{type.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!from || !to}
          className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          Check Fare
        </button>
      </form>

      {/* Quick Tips */}
      <div className="bg-blue-50 rounded-lg p-4">
        <h3 className="font-medium text-blue-800 mb-2">💡 Quick Tips</h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Prices may vary based on time of day and traffic</li>
          <li>• Check safety alerts before traveling</li>
          <li>• Report fare changes to help the community</li>
        </ul>
      </div>
    </div>
  );
}
