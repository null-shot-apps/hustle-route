'use client';

interface ResultsCardProps {
  results: {
    from: string;
    to: string;
    transport: string;
    transportName: string;
    transportIcon: string;
    fare: { min: number; max: number };
    alternatives: Array<{
      type: string;
      name: string;
      icon: string;
      fare: { min: number; max: number };
      savings: number;
    }>;
    route: { from: string; to: string; transport: string };
  };
  onBack: () => void;
  onViewSafety: (route: any) => void;
}

export default function ResultsCard({ results, onBack, onViewSafety }: ResultsCardProps) {
  const formatPrice = (price: number) => `₦${price.toLocaleString()}`;

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
        <h2 className="text-lg font-semibold text-gray-800">Fare Results</h2>
        <div></div>
      </div>

      {/* Route Info */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{results.transportIcon}</span>
            <div>
              <h3 className="font-semibold text-gray-800">{results.transportName}</h3>
              <p className="text-sm text-gray-600">{results.from} → {results.to}</p>
            </div>
          </div>
          <button
            onClick={() => onViewSafety(results.route)}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors"
          >
            Safety Info
          </button>
        </div>

        {/* Fare Range */}
        <div className="bg-green-50 rounded-lg p-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-700">
              {formatPrice(results.fare.min)} - {formatPrice(results.fare.max)}
            </div>
            <p className="text-sm text-green-600 mt-1">Estimated fare range</p>
          </div>
        </div>

        {/* Last Updated */}
        <div className="text-xs text-gray-500 text-center">
          Last updated: 2 hours ago • Based on 15 recent reports
        </div>
      </div>

      {/* Alternatives */}
      {results.alternatives.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Cheaper Alternatives</h3>
          <div className="space-y-3">
            {results.alternatives.map((alt) => (
              <div key={alt.type} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{alt.icon}</span>
                  <div>
                    <div className="font-medium text-gray-800">{alt.name}</div>
                    <div className="text-sm text-gray-600">
                      {formatPrice(alt.fare.min)} - {formatPrice(alt.fare.max)}
                    </div>
                  </div>
                </div>
                {alt.savings > 0 && (
                  <div className="text-right">
                    <div className="text-sm font-medium text-green-600">
                      Save {formatPrice(alt.savings)}
                    </div>
                    <div className="text-xs text-gray-500">minimum</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => onViewSafety(results.route)}
          className="bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          View Safety Info
        </button>
        <button
          onClick={onBack}
          className="bg-gray-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-700 transition-colors"
        >
          New Search
        </button>
      </div>

      {/* Community Note */}
      <div className="bg-yellow-50 rounded-lg p-4">
        <div className="flex items-start space-x-2">
          <span className="text-yellow-600">⚠️</span>
          <div className="text-sm text-yellow-800">
            <strong>Community Note:</strong> Fares may vary based on traffic, time of day, and current fuel prices. 
            Always negotiate before starting your journey.
          </div>
        </div>
      </div>
    </div>
  );
}

