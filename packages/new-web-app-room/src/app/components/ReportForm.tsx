'use client';

import { useState } from 'react';

interface ReportFormProps {
  onBack: () => void;
  onSubmit: () => void;
}

export default function ReportForm({ onBack, onSubmit }: ReportFormProps) {
  const [reportType, setReportType] = useState('fare');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [transport, setTransport] = useState('bus');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState('general');

  const locations = [
    'Ikeja', 'Victoria Island', 'Lekki', 'Surulere', 'Yaba', 'Ikoyi',
    'Ajah', 'Gbagada', 'Ketu', 'Mile 2', 'Oshodi', 'Alaba', 'Festac',
    'Apapa', 'Mushin', 'Agege', 'Ikorodu', 'Epe', 'Badagry'
  ];

  const transportTypes = [
    { id: 'bus', name: 'Bus' },
    { id: 'keke', name: 'Keke (Tricycle)' },
    { id: 'okada', name: 'Okada (Bike)' },
    { id: 'bolt', name: 'Bolt/Uber' }
  ];

  const safetyCategories = [
    { id: 'robbery', name: 'Robbery/Theft' },
    { id: 'overcharge', name: 'Overcharging' },
    { id: 'harassment', name: 'Harassment' },
    { id: 'accident', name: 'Accident/Road Issue' },
    { id: 'general', name: 'General Safety' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally send the data to a backend
    // For now, we'll just simulate success
    onSubmit();
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
        <h2 className="text-lg font-semibold text-gray-800">Submit Report</h2>
        <div></div>
      </div>

      {/* Report Type Selection */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="font-semibold text-gray-800 mb-4">What would you like to report?</h3>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setReportType('fare')}
            className={`p-4 rounded-lg border-2 transition-colors ${
              reportType === 'fare'
                ? 'border-green-500 bg-green-50 text-green-700'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="text-2xl mb-2">💰</div>
            <div className="font-medium">Fare Update</div>
            <div className="text-xs text-gray-600">Report current prices</div>
          </button>
          <button
            type="button"
            onClick={() => setReportType('safety')}
            className={`p-4 rounded-lg border-2 transition-colors ${
              reportType === 'safety'
                ? 'border-red-500 bg-red-50 text-red-700'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="text-2xl mb-2">🚨</div>
            <div className="font-medium">Safety Alert</div>
            <div className="text-xs text-gray-600">Report safety issues</div>
          </button>
        </div>
      </div>

      {/* Report Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 space-y-4">
        {/* Route Information */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            >
              <option value="">Select location</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            >
              <option value="">Select location</option>
              {locations.filter(loc => loc !== from).map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Transport Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Transport Type</label>
          <select
            value={transport}
            onChange={(e) => setTransport(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          >
            {transportTypes.map(type => (
              <option key={type.id} value={type.id}>{type.name}</option>
            ))}
          </select>
        </div>

        {/* Fare Report Fields */}
        {reportType === 'fare' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Amount Paid (₦)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="e.g., 200"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>
        )}

        {/* Safety Report Fields */}
        {reportType === 'safety' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Safety Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              required
            >
              {safetyCategories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>
        )}

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {reportType === 'fare' ? 'Additional Details (Optional)' : 'Describe the Issue'}
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={
              reportType === 'fare' 
                ? "Any additional details about the fare..."
                : "Please describe what happened and when..."
            }
            rows={3}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            required={reportType === 'safety'}
          />
        </div>

        {/* Anonymous Option */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="anonymous"
            defaultChecked
            className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
          />
          <label htmlFor="anonymous" className="text-sm text-gray-700">
            Submit anonymously (recommended)
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!from || !to || (reportType === 'fare' && !amount) || (reportType === 'safety' && !message)}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
            reportType === 'fare'
              ? 'bg-green-600 hover:bg-green-700 text-white disabled:bg-gray-300'
              : 'bg-red-600 hover:bg-red-700 text-white disabled:bg-gray-300'
          } disabled:cursor-not-allowed`}
        >
          Submit Report
        </button>
      </form>

      {/* Privacy Notice */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-medium text-gray-800 mb-2">🔒 Privacy & Community Guidelines</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Reports are anonymous by default</li>
          <li>• False reports may be removed by community voting</li>
          <li>• Help keep information accurate and helpful</li>
          <li>• Emergency situations should be reported to authorities</li>
        </ul>
      </div>
    </div>
  );
}
