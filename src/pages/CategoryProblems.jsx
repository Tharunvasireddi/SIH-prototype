import { useState, useEffect } from "react";
import { useParams, Link } from "@tanstack/react-router";
import {
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
  ArrowLeft,
  MapPin,
  User,
  Calendar,
} from "lucide-react";

// Enhanced problem data with timeline information
const categoryProblemsData = {
  "Water Supply": [
    {
      id: 1,
      title: "Major water leak from main pipe",
      description: "Water leak causing road flooding and water wastage",
      priority: "High",
      location: "Water Tank Area, Sector 5",
      status: "resolved",
      reportedBy: "Sarah Wilson",
      reportedDate: "2024-01-10",
      resolvedDate: "2024-01-12",
      timeTaken: "2 days",
      assignedTo: "Water Department",
      resolution: "Pipe replaced and leak fixed",
    },
    {
      id: 2,
      title: "Low water pressure in residential area",
      description: "Residents facing low water pressure for past week",
      priority: "Medium",
      location: "Dwaraka Nagar, Block C",
      status: "in_progress",
      reportedBy: "Ravi Kumar",
      reportedDate: "2024-01-25",
      resolvedDate: null,
      timeTaken: "5 days (ongoing)",
      assignedTo: "Water Department",
      resolution: null,
    },
    {
      id: 3,
      title: "Contaminated water supply",
      description: "Water quality issues reported by multiple residents",
      priority: "High",
      location: "MVP Colony, Sector 8",
      status: "pending",
      reportedBy: "Priya Sharma",
      reportedDate: "2024-01-28",
      resolvedDate: null,
      timeTaken: "2 days (pending)",
      assignedTo: "Water Quality Team",
      resolution: null,
    },
  ],
  Infrastructure: [
    {
      id: 4,
      title: "Broken Street Light",
      description: "Street light not working for 3 days, area unsafe at night",
      priority: "Medium",
      location: "Park Avenue, Block B",
      status: "in_progress",
      reportedBy: "Jane Smith",
      reportedDate: "2024-01-20",
      resolvedDate: null,
      timeTaken: "10 days (ongoing)",
      assignedTo: "Electrical Department",
      resolution: null,
    },
    {
      id: 5,
      title: "Damaged public bench",
      description: "Public bench in park broken and unsafe",
      priority: "Low",
      location: "Central Park, Zone A",
      status: "resolved",
      reportedBy: "Mike Johnson",
      reportedDate: "2024-01-15",
      resolvedDate: "2024-01-20",
      timeTaken: "5 days",
      assignedTo: "Public Works",
      resolution: "Bench repaired and reinstalled",
    },
  ],
  Drainage: [
    {
      id: 6,
      title: "Blocked drainage causing waterlogging",
      description: "Main drainage blocked, water accumulating on road",
      priority: "High",
      location: "NAD Kotha Road",
      status: "resolved",
      reportedBy: "Lisa Davis",
      reportedDate: "2024-01-22",
      resolvedDate: "2024-01-24",
      timeTaken: "2 days",
      assignedTo: "Drainage Department",
      resolution: "Drainage cleared and cleaned",
    },
    {
      id: 7,
      title: "Manhole cover missing",
      description: "Open manhole creating safety hazard",
      priority: "High",
      location: "Residential Area C",
      status: "in_progress",
      reportedBy: "Rajesh Gupta",
      reportedDate: "2024-01-29",
      resolvedDate: null,
      timeTaken: "1 day (ongoing)",
      assignedTo: "Safety Department",
      resolution: null,
    },
  ],
  "Road Maintenance": [
    {
      id: 8,
      title: "Large pothole on main street",
      description: "Deep pothole causing vehicle damage and traffic issues",
      priority: "High",
      location: "Main Street, Block A",
      status: "resolved",
      reportedBy: "John Doe",
      reportedDate: "2024-01-15",
      resolvedDate: "2024-01-18",
      timeTaken: "3 days",
      assignedTo: "Road Maintenance",
      resolution: "Pothole filled and road resurfaced",
    },
    {
      id: 9,
      title: "Damaged road divider",
      description: "Road divider broken after accident",
      priority: "Medium",
      location: "Highway Junction",
      status: "pending",
      reportedBy: "Traffic Police",
      reportedDate: "2024-01-30",
      resolvedDate: null,
      timeTaken: "0 days (just reported)",
      assignedTo: "Highway Department",
      resolution: null,
    },
  ],
  Sanitation: [
    {
      id: 10,
      title: "Garbage collection missed",
      description: "Garbage not collected for 2 days in residential area",
      priority: "Medium",
      location: "Seethammadhara, Block 5",
      status: "resolved",
      reportedBy: "Community Leader",
      reportedDate: "2024-01-26",
      resolvedDate: "2024-01-27",
      timeTaken: "1 day",
      assignedTo: "Sanitation Department",
      resolution: "Garbage collected and schedule updated",
    },
    {
      id: 11,
      title: "Overflowing dustbin",
      description: "Public dustbin overflowing, creating unhygienic conditions",
      priority: "Low",
      location: "Market Area, Main Road",
      status: "in_progress",
      reportedBy: "Shop Owner",
      reportedDate: "2024-01-28",
      resolvedDate: null,
      timeTaken: "2 days (ongoing)",
      assignedTo: "Waste Management",
      resolution: null,
    },
  ],
  Traffic: [
    {
      id: 12,
      title: "Traffic signal malfunction",
      description: "Traffic signal not working, causing confusion and jams",
      priority: "High",
      location: "Central Intersection",
      status: "in_progress",
      reportedBy: "David Brown",
      reportedDate: "2024-01-28",
      resolvedDate: null,
      timeTaken: "2 days (ongoing)",
      assignedTo: "Traffic Department",
      resolution: null,
    },
  ],
  Electricity: [
    {
      id: 13,
      title: "Power outage in residential area",
      description: "No electricity for 6 hours affecting 200+ households",
      priority: "High",
      location: "Residential Complex B",
      status: "resolved",
      reportedBy: "Resident Association",
      reportedDate: "2024-01-20",
      resolvedDate: "2024-01-20",
      timeTaken: "8 hours",
      assignedTo: "Electricity Board",
      resolution: "Transformer repaired and power restored",
    },
  ],
  Others: [
    {
      id: 14,
      title: "Stray dog menace",
      description: "Aggressive stray dogs in park area",
      priority: "Medium",
      location: "Community Park",
      status: "pending",
      reportedBy: "Park Visitor",
      reportedDate: "2024-01-29",
      resolvedDate: null,
      timeTaken: "1 day (pending)",
      assignedTo: "Animal Control",
      resolution: null,
    },
  ],
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
      return <XCircle className="w-5 h-5 text-gray-500" />;
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

export default function CategoryProblems() {
  const params = useParams();

  // Decode the URL parameter
  const rawCategory = params?.category || null;
  const category = rawCategory ? decodeURIComponent(rawCategory) : null;

  const [problems, setProblems] = useState([]);

  useEffect(() => {
    if (category && categoryProblemsData[category]) {
      setProblems(categoryProblemsData[category]);
    } else {
      setProblems([]);
    }
  }, [category, rawCategory]);
  if (!category || !categoryProblemsData[category]) {
    return (
      <div className="max-w-6xl mx-auto mt-8 p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Category Not Found
          </h1>
          <Link
            to="/analytics"
            className="text-yellow-600 hover:text-yellow-700"
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
            {category} Problems
          </h1>
        </div>
        <div className="text-sm text-gray-600">
          Total Problems: {problems.length}
        </div>
      </div>

      {/* Problems List */}
      <div className="space-y-4">
        {problems.map((problem) => (
          <div
            key={problem.id}
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6">
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

              {/* Problem Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
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
                  <span>
                    Reported:{" "}
                    {problem.reportedDate
                      ? new Date(problem.reportedDate).toLocaleDateString()
                      : "N/A"}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">Time: {problem.timeTaken}</span>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-3">
                  Problem Timeline
                </h4>
                <div className="space-y-3">
                  {/* Reported */}
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <span className="text-sm font-medium text-gray-800">
                          Problem Reported
                        </span>
                        <span className="text-xs text-gray-500">
                          {problem.reportedDate
                            ? new Date(
                                problem.reportedDate
                              ).toLocaleDateString()
                            : "N/A"}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Assigned to: {problem.assignedTo}
                      </p>
                    </div>
                  </div>

                  {/* In Progress (if applicable) */}
                  {problem.status === "in_progress" && (
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                      <div className="flex-1">
                        <span className="text-sm font-medium text-gray-800">
                          In Progress
                        </span>
                        <p className="text-xs text-gray-600">
                          Work is currently underway
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Resolved (if applicable) */}
                  {problem.status === "resolved" && problem.resolvedDate && (
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <span className="text-sm font-medium text-gray-800">
                            Problem Resolved
                          </span>
                          <span className="text-xs text-gray-500">
                            {problem.resolvedDate
                              ? new Date(
                                  problem.resolvedDate
                                ).toLocaleDateString()
                              : "N/A"}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600">
                          {problem.resolution}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Pending (if applicable) */}
                  {problem.status === "pending" && (
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="flex-1">
                        <span className="text-sm font-medium text-gray-800">
                          Pending Action
                        </span>
                        <p className="text-xs text-gray-600">
                          Waiting for department response
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {problems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No problems found for this category.
          </p>
        </div>
      )}
    </div>
  );
}
