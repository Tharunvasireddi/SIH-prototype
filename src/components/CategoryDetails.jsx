import { useState, useEffect } from "react";
import { useParams, Link } from "@tanstack/react-router";
import {
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  MapPin,
  User,
  Calendar,
  TrendingUp,
} from "lucide-react";

// Sample category data
const categoryData = {
  "Water Supply": {
    problems: [
      {
        id: 1,
        title: "Major water leak from main pipe",
        description: "Water leak causing road flooding and water wastage",
        status: "resolved",
        priority: "High",
        location: "Water Tank Area, Sector 5",
        reportedBy: "Sarah Wilson",
        reportedDate: "2024-01-10",
        resolvedDate: "2024-01-12",
        timeTaken: "2 days",
        department: "Water Department",
      },
      {
        id: 2,
        title: "Low water pressure issue",
        description: "Residents facing low water pressure for past week",
        status: "in_progress",
        priority: "Medium",
        location: "Dwaraka Nagar, Block C",
        reportedBy: "Ravi Kumar",
        reportedDate: "2024-01-25",
        resolvedDate: null,
        timeTaken: "5 days (ongoing)",
        department: "Water Department",
      },
    ],
    stats: {
      total: 50,
      resolved: 30,
      pending: 20,
      avgTime: "2.5 days",
    },
  },
  Infrastructure: {
    problems: [
      {
        id: 3,
        title: "Broken Street Light",
        description: "Street light not working for 3 days",
        status: "in_progress",
        priority: "Medium",
        location: "Park Avenue, Block B",
        reportedBy: "Jane Smith",
        reportedDate: "2024-01-20",
        resolvedDate: null,
        timeTaken: "10 days (ongoing)",
        department: "Electrical Department",
      },
    ],
    stats: {
      total: 35,
      resolved: 20,
      pending: 15,
      avgTime: "4.2 days",
    },
  },
  Drainage: {
    problems: [
      {
        id: 4,
        title: "Blocked drainage causing waterlogging",
        description: "Main drainage blocked, water accumulating on road",
        status: "resolved",
        priority: "High",
        location: "NAD Kotha Road",
        reportedBy: "Lisa Davis",
        reportedDate: "2024-01-22",
        resolvedDate: "2024-01-24",
        timeTaken: "2 days",
        department: "Drainage Department",
      },
    ],
    stats: {
      total: 49,
      resolved: 30,
      pending: 19,
      avgTime: "1.8 days",
    },
  },
  "Road Maintenance": {
    problems: [
      {
        id: 5,
        title: "Large pothole on main street",
        description: "Deep pothole causing vehicle damage",
        status: "resolved",
        priority: "High",
        location: "Main Street, Block A",
        reportedBy: "John Doe",
        reportedDate: "2024-01-15",
        resolvedDate: "2024-01-18",
        timeTaken: "3 days",
        department: "Road Maintenance",
      },
    ],
    stats: {
      total: 65,
      resolved: 45,
      pending: 20,
      avgTime: "3.1 days",
    },
  },
  Sanitation: {
    problems: [
      {
        id: 6,
        title: "Garbage collection missed",
        description: "Garbage not collected for 2 days",
        status: "resolved",
        priority: "Medium",
        location: "Seethammadhara, Block 5",
        reportedBy: "Community Leader",
        reportedDate: "2024-01-26",
        resolvedDate: "2024-01-27",
        timeTaken: "1 day",
        department: "Sanitation Department",
      },
    ],
    stats: {
      total: 47,
      resolved: 29,
      pending: 18,
      avgTime: "1.2 days",
    },
  },
  Traffic: {
    problems: [
      {
        id: 7,
        title: "Traffic signal malfunction",
        description: "Traffic signal not working properly",
        status: "in_progress",
        priority: "High",
        location: "Central Intersection",
        reportedBy: "David Brown",
        reportedDate: "2024-01-28",
        resolvedDate: null,
        timeTaken: "2 days (ongoing)",
        department: "Traffic Department",
      },
    ],
    stats: {
      total: 32,
      resolved: 19,
      pending: 13,
      avgTime: "2.8 days",
    },
  },
  Electricity: {
    problems: [
      {
        id: 8,
        title: "Power outage in residential area",
        description: "No electricity for 6 hours affecting 200+ households",
        status: "resolved",
        priority: "High",
        location: "Residential Complex B",
        reportedBy: "Resident Association",
        reportedDate: "2024-01-20",
        resolvedDate: "2024-01-20",
        timeTaken: "8 hours",
        department: "Electricity Board",
      },
    ],
    stats: {
      total: 43,
      resolved: 32,
      pending: 11,
      avgTime: "0.8 days",
    },
  },
  Others: {
    problems: [
      {
        id: 9,
        title: "Stray dog menace",
        description: "Aggressive stray dogs in park area",
        status: "pending",
        priority: "Medium",
        location: "Community Park",
        reportedBy: "Park Visitor",
        reportedDate: "2024-01-29",
        resolvedDate: null,
        timeTaken: "1 day (pending)",
        department: "Animal Control",
      },
    ],
    stats: {
      total: 21,
      resolved: 15,
      pending: 6,
      avgTime: "3.5 days",
    },
  },
};

const getStatusIcon = (status) => {
  switch (status) {
    case "resolved":
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    case "in_progress":
      return <Clock className="w-5 h-5 text-yellow-500" />;
    case "pending":
      return <AlertCircle className="w-5 h-5 text-red-500" />;
    default:
      return <AlertCircle className="w-5 h-5 text-gray-500" />;
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case "resolved":
      return "bg-green-100 text-green-800 border-green-200";
    case "in_progress":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "pending":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getPriorityColor = (priority) => {
  switch (priority) {
    case "High":
      return "bg-red-100 text-red-800 border-red-200";
    case "Medium":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "Low":
      return "bg-green-100 text-green-800 border-green-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export default function CategoryDetails() {
  const params = useParams();
  const categoryName = params?.category
    ? decodeURIComponent(params.category)
    : null;
  const [categoryInfo, setCategoryInfo] = useState(null);

  useEffect(() => {
    if (categoryName && categoryData[categoryName]) {
      setCategoryInfo(categoryData[categoryName]);
    } else {
      setCategoryInfo(null);
    }
  }, [categoryName]);

  if (!categoryName || !categoryInfo) {
    return (
      <div className="max-w-6xl mx-auto mt-8 p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Category Not Found
          </h1>
          <p className="text-gray-600 mb-4">
            The requested category could not be found.
          </p>
          <Link
            to="/analytics"
            className="text-yellow-600 hover:text-yellow-700 font-medium"
          >
            ← Back to Analytics
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-8 p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            to="/analytics"
            className="flex items-center text-yellow-600 hover:text-yellow-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Analytics
          </Link>
          <div className="h-6 w-px bg-gray-300"></div>
          <h1 className="text-3xl font-bold text-gray-800">
            {categoryName} Problems
          </h1>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Total Problems
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {categoryInfo.stats.total}
              </p>
            </div>
            <TrendingUp className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Resolved</p>
              <p className="text-2xl font-bold text-green-600">
                {categoryInfo.stats.resolved}
              </p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-red-600">
                {categoryInfo.stats.pending}
              </p>
            </div>
            <Clock className="w-8 h-8 text-red-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Avg Resolution
              </p>
              <p className="text-2xl font-bold text-blue-600">
                {categoryInfo.stats.avgTime}
              </p>
            </div>
            <Clock className="w-8 h-8 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Problems List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Recent Problems</h2>
        {categoryInfo.problems.map((problem) => (
          <div
            key={problem.id}
            className="bg-white border border-gray-200 rounded-lg shadow-sm p-6"
          >
            {/* Problem Header */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  {getStatusIcon(problem.status)}
                  <h3 className="text-xl font-semibold text-gray-800">
                    {problem.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-3">{problem.description}</p>
              </div>
              <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2 mt-4 lg:mt-0">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                    problem.status
                  )}`}
                >
                  {problem.status.replace("_", " ").toUpperCase()}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(
                    problem.priority
                  )}`}
                >
                  {problem.priority} Priority
                </span>
              </div>
            </div>

            {/* Problem Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{problem.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <User className="w-4 h-4" />
                <span>By: {problem.reportedBy}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>Reported: {problem.reportedDate}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span className="font-medium">
                  Duration: {problem.timeTaken}
                </span>
              </div>
            </div>

            {/* Department */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Assigned to:</span>{" "}
                {problem.department}
              </p>
              {problem.resolvedDate && (
                <p className="text-sm text-green-600 mt-1">
                  <span className="font-medium">Resolved on:</span>{" "}
                  {problem.resolvedDate}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {categoryInfo.problems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No problems found for this category.
          </p>
        </div>
      )}
    </div>
  );
}
