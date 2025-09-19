import { useState } from "react";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  XCircle,
  TrendingUp,
  MapPin,
  Filter,
  Search,
  Eye,
  Activity,
} from "lucide-react";

const DashBoard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("30days");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Sample problems data
  const problems = [
    {
      id: 1,
      title: "Pothole on Main Street",
      category: "Road Maintenance",
      status: "resolved",
      priority: "high",
      reportedBy: "John Doe",
      reportedDate: "2024-01-15",
      resolvedDate: "2024-01-18",
      location: "Main Street, Block A",
      description: "Large pothole causing traffic issues",
      assignedTo: "Public Works Dept",
      resolution: "Pothole filled and road resurfaced",
    },
    {
      id: 2,
      title: "Broken Street Light",
      category: "Infrastructure",
      status: "in_progress",
      priority: "medium",
      reportedBy: "Jane Smith",
      reportedDate: "2024-01-20",
      resolvedDate: null,
      location: "Park Avenue, Block B",
      description: "Street light not working for 3 days",
      assignedTo: "Electrical Dept",
      resolution: null,
    },
    {
      id: 3,
      title: "Garbage Collection Issue",
      category: "Sanitation",
      status: "pending",
      priority: "low",
      reportedBy: "Mike Johnson",
      reportedDate: "2024-01-25",
      resolvedDate: null,
      location: "Residential Area C",
      description: "Garbage not collected for 2 days",
      assignedTo: "Sanitation Dept",
      resolution: null,
    },
    {
      id: 4,
      title: "Water Leak",
      category: "Water Supply",
      status: "resolved",
      priority: "high",
      reportedBy: "Sarah Wilson",
      reportedDate: "2024-01-10",
      resolvedDate: "2024-01-12",
      location: "Water Tank Area",
      description: "Major water leak from main pipe",
      assignedTo: "Water Dept",
      resolution: "Pipe replaced and leak fixed",
    },
    {
      id: 5,
      title: "Traffic Signal Malfunction",
      category: "Traffic",
      status: "in_progress",
      priority: "high",
      reportedBy: "David Brown",
      reportedDate: "2024-01-28",
      resolvedDate: null,
      location: "Central Intersection",
      description: "Traffic signal not working properly",
      assignedTo: "Traffic Dept",
      resolution: null,
    },
    {
      id: 6,
      title: "Drainage Problem",
      category: "Drainage",
      status: "pending",
      priority: "medium",
      reportedBy: "Lisa Davis",
      reportedDate: "2024-01-30",
      resolvedDate: null,
      location: "Market Area",
      description: "Water logging during rain",
      assignedTo: "Drainage Dept",
      resolution: null,
    },
  ];

  const categories = [
    "all",
    "Road Maintenance",
    "Infrastructure",
    "Sanitation",
    "Water Supply",
    "Traffic",
    "Drainage",
  ];
  const periods = [
    { value: "7days", label: "Last 7 Days" },
    { value: "30days", label: "Last 30 Days" },
    { value: "90days", label: "Last 90 Days" },
    { value: "1year", label: "Last Year" },
  ];

  // Filter problems
  const filteredProblems = problems.filter((problem) => {
    const matchesSearch =
      problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      problem.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      problem.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || problem.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Calculate statistics
  const totalProblems = filteredProblems.length;
  const resolvedProblems = filteredProblems.filter(
    (p) => p.status === "resolved"
  ).length;
  const inProgressProblems = filteredProblems.filter(
    (p) => p.status === "in_progress"
  ).length;
  const pendingProblems = filteredProblems.filter(
    (p) => p.status === "pending"
  ).length;
  const resolutionRate =
    totalProblems > 0
      ? Math.round((resolvedProblems / totalProblems) * 100)
      : 0;

  // Priority distribution
  const highPriority = filteredProblems.filter(
    (p) => p.priority === "high"
  ).length;
  const mediumPriority = filteredProblems.filter(
    (p) => p.priority === "medium"
  ).length;
  const lowPriority = filteredProblems.filter(
    (p) => p.priority === "low"
  ).length;

  const getStatusColor = (status) => {
    switch (status) {
      case "resolved":
        return "text-green-600 bg-green-100";
      case "in_progress":
        return "text-blue-600 bg-blue-100";
      case "pending":
        return "text-yellow-600 bg-yellow-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "text-red-600 bg-red-100";
      case "medium":
        return "text-yellow-600 bg-yellow-100";
      case "low":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "resolved":
        return <CheckCircle size={16} />;
      case "in_progress":
        return <Clock size={16} />;
      case "pending":
        return <AlertCircle size={16} />;
      default:
        return <XCircle size={16} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Problem Management Dashboard
          </h1>
          <p className="text-gray-600">
            Monitor and track municipal problem reports and their resolution
            status
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Problems */}
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

          {/* Resolved Problems */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Resolved</p>
                <p className="text-3xl font-bold text-green-600">
                  {resolvedProblems}
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <CheckCircle className="text-green-600" size={24} />
              </div>
            </div>
          </div>

          {/* In Progress */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">In Progress</p>
                <p className="text-3xl font-bold text-blue-600">
                  {inProgressProblems}
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <Clock className="text-blue-600" size={24} />
              </div>
            </div>
          </div>

          {/* Resolution Rate */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Resolution Rate
                </p>
                <p className="text-3xl font-bold text-yellow-600">
                  {resolutionRate}%
                </p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <TrendingUp className="text-yellow-600" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Priority Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Priority Distribution
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">High Priority</span>
                </div>
                <span className="font-semibold text-red-600">
                  {highPriority}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Medium Priority</span>
                </div>
                <span className="font-semibold text-yellow-600">
                  {mediumPriority}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Low Priority</span>
                </div>
                <span className="font-semibold text-green-600">
                  {lowPriority}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Status Overview
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-sm text-gray-600">Resolved</span>
                </div>
                <span className="font-semibold text-green-600">
                  {resolvedProblems}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className="text-blue-600" size={16} />
                  <span className="text-sm text-gray-600">In Progress</span>
                </div>
                <span className="font-semibold text-blue-600">
                  {inProgressProblems}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="text-yellow-600" size={16} />
                  <span className="text-sm text-gray-600">Pending</span>
                </div>
                <span className="font-semibold text-yellow-600">
                  {pendingProblems}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-2">
              <button className="w-full bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300 text-sm">
                Add New Problem
              </button>
              <button className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300 text-sm">
                Generate Report
              </button>
              <button className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300 text-sm">
                Export Data
              </button>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search problems..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            <div className="flex items-center space-x-4">
              <Filter className="text-gray-500" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
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
          </div>
        </div>

        {/* Problems List */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Recent Problems
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Problem
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priority
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reported By
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredProblems.map((problem) => (
                  <tr key={problem.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {problem.title}
                        </div>
                        <div className="text-sm text-gray-500 truncate max-w-xs">
                          {problem.description}
                        </div>
                        <div className="text-xs text-gray-400 flex items-center mt-1">
                          <MapPin size={12} className="mr-1" />
                          {problem.location}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">
                        {problem.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                          problem.status
                        )}`}
                      >
                        {getStatusIcon(problem.status)}
                        <span className="ml-1 capitalize">
                          {problem.status.replace("_", " ")}
                        </span>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(
                          problem.priority
                        )}`}
                      >
                        {problem.priority.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {problem.reportedBy}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(problem.reportedDate).toLocaleDateString()}
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

          {filteredProblems.length === 0 && (
            <div className="text-center py-12">
              <AlertCircle className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No problems found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
