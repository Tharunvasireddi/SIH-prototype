import { useState } from "react";
import {
  MapPin,
  TrendingUp,
  BarChart3,
  Map,
  AlertTriangle,
  CheckCircle,
  Clock,
  Filter,
  Eye,
  Activity,
} from "lucide-react";

const CentralDashboard = () => {
  const [selectedDistrict, setSelectedDistrict] = useState("all");
  const [selectedPeriod, setSelectedPeriod] = useState("30days");
  const [viewMode, setViewMode] = useState("heatmap");

  // Sample data for all municipal corporations
  const municipalData = [
    {
      id: 1,
      name: "Central Municipal Corporation",
      district: "Central",
      totalProblems: 245,
      resolvedProblems: 198,
      pendingProblems: 32,
      inProgressProblems: 15,
      resolutionRate: 80.8,
      population: 1200000,
      area: "450 sq km",
      lastUpdated: "2024-01-30",
    },
    {
      id: 2,
      name: "North Municipal Corporation",
      district: "North",
      totalProblems: 189,
      resolvedProblems: 142,
      pendingProblems: 28,
      inProgressProblems: 19,
      resolutionRate: 75.1,
      population: 850000,
      area: "320 sq km",
      lastUpdated: "2024-01-30",
    },
    {
      id: 3,
      name: "South Municipal Corporation",
      district: "South",
      totalProblems: 312,
      resolvedProblems: 267,
      pendingProblems: 31,
      inProgressProblems: 14,
      resolutionRate: 85.6,
      population: 1100000,
      area: "380 sq km",
      lastUpdated: "2024-01-30",
    },
    {
      id: 4,
      name: "East Municipal Corporation",
      district: "East",
      totalProblems: 156,
      resolvedProblems: 98,
      pendingProblems: 35,
      inProgressProblems: 23,
      resolutionRate: 62.8,
      population: 650000,
      area: "280 sq km",
      lastUpdated: "2024-01-30",
    },
    {
      id: 5,
      name: "West Municipal Corporation",
      district: "West",
      totalProblems: 278,
      resolvedProblems: 201,
      pendingProblems: 45,
      inProgressProblems: 32,
      resolutionRate: 72.3,
      population: 950000,
      area: "350 sq km",
      lastUpdated: "2024-01-30",
    },
    {
      id: 6,
      name: "Northeast Municipal Corporation",
      district: "Northeast",
      totalProblems: 134,
      resolvedProblems: 89,
      pendingProblems: 28,
      inProgressProblems: 17,
      resolutionRate: 66.4,
      population: 480000,
      area: "220 sq km",
      lastUpdated: "2024-01-30",
    },
  ];

  const districts = [
    "all",
    "Central",
    "North",
    "South",
    "East",
    "West",
    "Northeast",
  ];
  const periods = [
    { value: "7days", label: "Last 7 Days" },
    { value: "30days", label: "Last 30 Days" },
    { value: "90days", label: "Last 90 Days" },
    { value: "1year", label: "Last Year" },
  ];

  // Filter data based on selected district
  const filteredData =
    selectedDistrict === "all"
      ? municipalData
      : municipalData.filter(
          (municipal) => municipal.district === selectedDistrict
        );

  // Calculate overall statistics
  const totalProblems = filteredData.reduce(
    (sum, municipal) => sum + municipal.totalProblems,
    0
  );
  const totalResolved = filteredData.reduce(
    (sum, municipal) => sum + municipal.resolvedProblems,
    0
  );
  const totalPending = filteredData.reduce(
    (sum, municipal) => sum + municipal.pendingProblems,
    0
  );
  const totalInProgress = filteredData.reduce(
    (sum, municipal) => sum + municipal.inProgressProblems,
    0
  );
  const overallResolutionRate =
    totalProblems > 0 ? Math.round((totalResolved / totalProblems) * 100) : 0;

  // Get heatmap intensity based on problem density
  const getHeatmapIntensity = (municipal) => {
    const problemDensity =
      municipal.totalProblems / (municipal.population / 10000);
    if (problemDensity > 20) return "high";
    if (problemDensity > 10) return "medium";
    return "low";
  };

  const getIntensityColor = (intensity) => {
    switch (intensity) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getResolutionRateColor = (rate) => {
    if (rate >= 80) return "text-green-600";
    if (rate >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Central Municipal Dashboard
          </h1>
          <p className="text-gray-600">
            Monitor work progress and problem resolution across all municipal
            corporations
          </p>
        </div>

        {/* Overall Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Problems
                </p>
                <p className="text-3xl font-bold text-gray-900">
                  {totalProblems}
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <Activity className="text-blue-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Resolved</p>
                <p className="text-3xl font-bold text-green-600">
                  {totalResolved}
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <CheckCircle className="text-green-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-3xl font-bold text-yellow-600">
                  {totalPending}
                </p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <Clock className="text-yellow-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Resolution Rate
                </p>
                <p
                  className={`text-3xl font-bold ${getResolutionRateColor(
                    overallResolutionRate
                  )}`}
                >
                  {overallResolutionRate}%
                </p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <TrendingUp className="text-yellow-600" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Filter className="text-gray-500" size={20} />
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
              >
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district === "all" ? "All Districts" : district}
                  </option>
                ))}
              </select>

              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
              >
                {periods.map((period) => (
                  <option key={period.value} value={period.value}>
                    {period.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode("heatmap")}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  viewMode === "heatmap"
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Map size={16} className="inline mr-2" />
                Heatmap
              </button>
              <button
                onClick={() => setViewMode("bargraph")}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  viewMode === "bargraph"
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <BarChart3 size={16} className="inline mr-2" />
                Bar Graph
              </button>
            </div>
          </div>
        </div>

        {/* Heatmap View */}
        {viewMode === "heatmap" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Map Visualization */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Map className="mr-2" size={20} />
                Problem Density Heatmap
              </h3>
              <div className="space-y-4">
                {filteredData.map((municipal) => {
                  const intensity = getHeatmapIntensity(municipal);
                  return (
                    <div
                      key={municipal.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-4 h-4 rounded-full ${getIntensityColor(
                            intensity
                          )}`}
                        ></div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {municipal.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {municipal.district} District
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">
                          {municipal.totalProblems}
                        </p>
                        <p className="text-xs text-gray-500">problems</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 flex items-center justify-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Low Density</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span>Medium Density</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>High Density</span>
                </div>
              </div>
            </div>

            {/* Resolution Status */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="mr-2" size={20} />
                Resolution Status by District
              </h3>
              <div className="space-y-4">
                {filteredData.map((municipal) => (
                  <div
                    key={municipal.id}
                    className="p-4 border border-gray-200 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">
                        {municipal.name}
                      </h4>
                      <span
                        className={`font-semibold ${getResolutionRateColor(
                          municipal.resolutionRate
                        )}`}
                      >
                        {municipal.resolutionRate}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div
                        className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${municipal.resolutionRate}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Resolved: {municipal.resolvedProblems}</span>
                      <span>Pending: {municipal.pendingProblems}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bar Graph View */}
        {viewMode === "bargraph" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Resolved Problems Bar Chart */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="mr-2" size={20} />
                Resolved Problems by District
              </h3>
              <div className="space-y-4">
                {filteredData.map((municipal) => {
                  const maxResolved = Math.max(
                    ...filteredData.map((m) => m.resolvedProblems)
                  );
                  const percentage =
                    (municipal.resolvedProblems / maxResolved) * 100;
                  return (
                    <div key={municipal.id} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">
                          {municipal.name}
                        </span>
                        <span className="text-sm font-semibold text-green-600">
                          {municipal.resolvedProblems}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-green-500 h-3 rounded-full transition-all duration-300"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Pending Problems Bar Chart */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="mr-2" size={20} />
                Pending Problems by District
              </h3>
              <div className="space-y-4">
                {filteredData.map((municipal) => {
                  const maxPending = Math.max(
                    ...filteredData.map((m) => m.pendingProblems)
                  );
                  const percentage =
                    (municipal.pendingProblems / maxPending) * 100;
                  return (
                    <div key={municipal.id} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">
                          {municipal.name}
                        </span>
                        <span className="text-sm font-semibold text-yellow-600">
                          {municipal.pendingProblems}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-yellow-500 h-3 rounded-full transition-all duration-300"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Detailed Municipal Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Municipal Corporation Details
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Municipal Corporation
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    District
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Problems
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Resolved
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pending
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Resolution Rate
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Population
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((municipal) => (
                  <tr key={municipal.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {municipal.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {municipal.area}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {municipal.district}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {municipal.totalProblems}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-semibold">
                      {municipal.resolvedProblems}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-600 font-semibold">
                      {municipal.pendingProblems}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`text-sm font-semibold ${getResolutionRateColor(
                          municipal.resolutionRate
                        )}`}
                      >
                        {municipal.resolutionRate}%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {municipal.population.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-yellow-600 hover:text-yellow-900 transition-colors duration-300">
                        <Eye size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentralDashboard;
